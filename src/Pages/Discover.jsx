import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const genres = [
    "Science Fiction",
    "Thriller",
    "Adventure",
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Mystery",
    "Animation"
];

const genreIds = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Drama: 18,
    Horror: 27,
    Romance: 10749,
    "Science Fiction": 878,
    Mystery: 9648,
    Thriller: 53
};

const sortOptions = [
    { label: "Most Popular", value: "popularity.desc" },
    { label: "Top Rated", value: "vote_average.desc" },
    { label: "Most Voted", value: "vote_count.desc" },
    { label: "Newest First", value: "primary_release_date.desc" },
    { label: "Oldest First", value: "primary_release_date.asc" },
    { label: "Title A–Z", value: "title.asc" },
];

function Discover() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedSort, setSelectedSort] = useState("popularity.desc");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const fetchRecommendations = async () => {
        const selectedGenreIds = selectedGenres
            .map((genre) => genreIds[genre])
            .join(",");

        const params = new URLSearchParams({
            api_key: apiKey,
            sort_by: selectedSort,
            "vote_count.gte": "300",
            include_adult: "true",
            page: "1",
        });

        if (selectedGenreIds) {
            params.set("with_genres", selectedGenreIds);
        }

        setLoading(true);

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?${params}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch movies from TMDB.");
            }

            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Recommendation error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#12091F] min-h-screen">
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="mb-10">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                        Movie Recommendations
                    </p>

                    <h1 className="text-4xl font-bold text-white">
                        Find Your Next Favourite
                    </h1>

                    <p className="mt-3 max-w-2xl text-gray-400">
                        Tell us what you're in the mood for, and discover
                        movies worth watching.
                    </p>
                </div>

                <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-6">
                    <h2 className="mb-4 text-xl font-semibold text-white">
                        Choose your genres
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {genres.map((genre) => (
                            <button
                                key={genre}
                                type="button"
                                onClick={() => {
                                    setSelectedGenres((previousGenres) =>
                                        previousGenres.includes(genre)
                                            ? previousGenres.filter(
                                                (item) => item !== genre
                                            )
                                            : [...previousGenres, genre]
                                    );
                                }}
                                className={`rounded-full border px-4 py-2 transition ${
                                    selectedGenres.includes(genre)
                                        ? "border-purple-500 bg-purple-600 text-white"
                                        : "border-purple-300/20 bg-purple-500/10 text-gray-300 hover:border-purple-400"
                                }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>

                    <p className="mt-5 text-sm text-gray-400">
                        Selected genres:{" "}
                        <span className="text-purple-300">
                            {selectedGenres.length > 0
                                ? selectedGenres.join(", ")
                                : "None selected"}
                        </span>
                    </p>
                </div>

                <div className="mt-6">
                    <label
                        htmlFor="sortBy"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Sort By
                    </label>

                    <div className="relative w-fit">
                        <select
                            id="sortBy"
                            value={selectedSort}
                            onChange={(event) => setSelectedSort(event.target.value)}
                            className="appearance-none rounded-lg border border-purple-500/30 bg-[#1B0C32] py-3 pl-4 pr-12 text-white outline-none transition focus:border-purple-400 cursor-pointer"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <ChevronDown
                            size={18}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-purple-300"
                        />
                    </div>
                </div>

                <button
                    onClick={fetchRecommendations}
                    disabled={loading}
                    className="mt-6 rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white disabled:opacity-50"
                >
                    {loading ? "Finding Movies..." : "Find My Movies"}
                </button>

                {movies.length > 0 && (
                    <p className="mt-4 text-gray-300">
                        Found {movies.length} movies!
                    </p>
                )}
                {movies.length > 0 && (
                    <div className="mt-10">
                        <h2 className="mb-6 text-2xl font-bold text-white">
                            Your Movie Recommendations
                        </h2>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {movies.map((movie) => (
                                <Link
                                    key={movie.id}
                                    to={`/movie/${movie.id}`}
                                    className="block overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-950/30 transition hover:border-purple-500/50"
                                >
                                    <div
                                        key={movie.id}
                                        className="overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-950/30 transition hover:border-purple-500/50"
                                    >
                                        <img
                                            src={
                                                movie.poster_path
                                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                    : "https://placehold.co/300x450?text=No+Poster"
                                            }
                                            alt={movie.title}
                                            className="h-80 w-full object-cover"
                                        />

                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-white">
                                                {movie.title}
                                            </h3>

                                            <p className="mt-2 text-sm text-gray-400">
                                                Release year:{" "}
                                                {movie.release_date
                                                    ? movie.release_date.slice(0, 4)
                                                    : "Unavailable"}
                                            </p>

                                            <p className="mt-2 text-sm text-purple-300">
                                                ★ {movie.vote_average?.toFixed(1) ?? "N/A"} / 10
                                            </p>

                                            <p className="mt-3 line-clamp-3 text-sm text-gray-400">
                                                {movie.overview || "No overview available."}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Discover;