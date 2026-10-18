import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SearchMoviesSection from "../Components/SearchMoviesSection";

function SearchResults  () {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const movieName = searchParams.get("query") || "";
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    
    useEffect (() => {
        async function getMovies() {
            if (!movieName.trim()) {
                setMovies([]);
                setError("Please enter a movie or TV show name.");
                return;
            }
            setLoading(true);
            setError("");

            try {
                const response = await fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(movieName.trim())}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch movies.");
                }
                const data = await response.json();
                const results = (data.results || []).filter(
                    (item) =>
                        item.media_type === "movie" ||
                        item.media_type === "tv"
                );
                setMovies(results);
                if (results.length === 0) {
                    setError("No movies or TV shows found.");
                }
            }
            catch (err) {
                setMovies([])
                setError(err.message || "Something went wrong.");
            }
            finally {
                setLoading(false);
            }
        }
        getMovies();
    }, [movieName, apiKey])

    return (
        <>
            <main
                className="min-h-screen bg-[#12091F]"
            >
                {loading && (
                    <p className="py-8 text-center text-white">
                        Searching...
                    </p>
                )}

                {error && !loading && (
                    <p className="py-8 text-center text-red-400">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <SearchMoviesSection
                        title="Search Results"
                        movies={movies}
                    />
                )}
            </main>
        </>
    )
}

export default SearchResults 