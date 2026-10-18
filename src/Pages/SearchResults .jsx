import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SearchMoviesSection from "../Components/SearchMoviesSection";

function SearchResults  () {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const movieName = searchParams.get("query") || "";
    if (movieName === null) {
       setError("Invalid Input"); 
    }
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    useEffect (() => {
        async function getMovies() {
            try {
                const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName.trim())}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch movies.");
                }
                const data = await response.json();
                setMovies(data.results || []);
                if (!data.results?.length) {
                    setError("No movies found.");
                }
            }
            catch (err) {
                setMovies([])
                setError(err.message || "Something went wrong.");
            }
        }
        getMovies();
    }, [movieName, apiKey])

    return (
        <>
            <main
                className="min-h-screen bg-[#12091F]"
            >
                {error && (
                    <p className="text-center text-red-400 py-8">
                    {error}
                    </p>
                )}
                {!error && (
                    <>
                        <SearchMoviesSection
                            title="Search Results"
                            movies={movies}
                        />
                    </>
                )}
            </main>
        </>
    )
}

export default SearchResults 