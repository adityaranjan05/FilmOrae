import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MovieSection from "../Components/MovieSection";
import Hero from "../Components/Hero"

export default function Home ( ) {
    const [searchMovie, setSearchMovie] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    // const [movies, setMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const navigate = useNavigate();
    function handleSearch() {
        const query = searchMovie.trim();
        if (!query) return;
        navigate(`/search?query=${encodeURIComponent(query)}`);
    }

    useEffect (() => {
        async function getHomeMovies() {
            setLoading(true);
            setError("");

            try {
                const endpoints = [
                    "trending/movie/day",
                    "movie/popular",
                    "movie/top_rated",
                    "movie/upcoming",
                ];
                const responses = await Promise.all(
                    endpoints.map((endpoint) =>
                        fetch(
                            `https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}`
                        )
                    )
                );

                if (responses.some((response) => !response.ok)) {
                    throw new Error("Failed to fetch movie categories.");
                }

                const data = await Promise.all(
                    responses.map((response) => response.json())
                );

                console.log(data);

                setTrendingMovies(data[0].results);
                setPopularMovies(data[1].results);
                setTopRatedMovies(data[2].results);
                setUpcomingMovies(data[3].results);
            } catch (err) {
                // setMovies([]);
                setError(err.message || "Something went wrong.");
            } finally {
                setLoading(false);
            }
        }
        getHomeMovies()
    }, [apiKey])

    return (
        <>
            <Hero
                searchMovie={searchMovie}
                setSearchMovie={setSearchMovie}
                search={handleSearch}
            />

            <main
                className="min-h-screen bg-[#12091F]"
            >
                {loading && (
                    <p className="py-10 text-center text-white">
                        Loading movies...
                    </p>
                )}

                {error && (
                    <p className="py-10 text-center text-red-400">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <>
                        <MovieSection
                            title="Trending Today"
                            movies={trendingMovies}
                        />

                        <MovieSection
                            title="Popular Movies"
                            movies={popularMovies}
                        />

                        <MovieSection
                            title="Top Rated Movies"
                            movies={topRatedMovies}
                        />

                        <MovieSection
                            title="Upcoming Releases"
                            movies={upcomingMovies}
                        />
                    </>
                )}
            </main>
        </>
    )
}