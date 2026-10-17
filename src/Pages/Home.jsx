import { useState } from "react";
// import SearchBar from "../Components/SearchBar"
import MoviesCard from "../Components/MoviesCard"
import Hero from "../Components/Hero"

export default function Home ( ) {
    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    function handleSearch() {
        if (searchMovie.trim() === "") {
            return;
        }
        getMovies();
    }

    async function getMovies() {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchMovie.trim())}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch movies.");
            }

            const data = await response.json();

            console.log(data);

            setMovies(data.results);

            if (data.results.length === 0) {
                setError("Movies not found!");
            }
        } catch (err) {
            setMovies([]);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Hero
                searchMovie={searchMovie}
                setSearchMovie={setSearchMovie}
                search={handleSearch}
            />

             <section className="mx-auto max-w-[95%] py-10">
                {loading && (
                    <p className="text-white text-center">
                        Loading movies...
                    </p>
                )}

                {error && (
                    <p className="text-red-400 text-center">
                        {error}
                    </p>
                )}

                {!loading && movies.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MoviesCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                )}
            </section>
        </>
    )
}