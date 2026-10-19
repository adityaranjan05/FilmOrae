import { useParams, useLocation } from "react-router";
import { useState, useEffect } from "react";

function MovieDetails() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();
    const location = useLocation();
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const mediaType = location.pathname.startsWith("/tv/")
        ? "tv"
        : "movie";

    // Movie Details
    const title = movieDetails.title || movieDetails.name;
    const overview = movieDetails.overview;
    const rating = movieDetails.vote_average;
    const posterLink = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : "https://placehold.co/300x450?text=No+Poster";
    const backgroundImg = movieDetails.backdrop_path 
        ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920";
    const runtime = movieDetails.runtime;
    const genres = movieDetails.genres || [];
    const homepageLink = movieDetails.homepage;
    const status = movieDetails.status;
    const productionBudget = movieDetails.budget;
    const boxOffice = movieDetails.revenue;
    const popularity = movieDetails.popularity;
    const productionCompanies = movieDetails.production_companies || [];
    const releaseDate = movieDetails.release_date;
    const originalLanguage = movieDetails.original_language;
    const tagline = movieDetails.tagline;

    // TV Series details
    const firstAirDate = movieDetails.first_air_date;
    const lastAirDate = movieDetails.last_air_date;
    const totalSeasons = movieDetails.number_of_seasons;
    const totalEpisodes = movieDetails.number_of_episodes;
    const episodeRuntime = movieDetails.episode_run_time || [];
    const creators = movieDetails.created_by || [];
    const networks = movieDetails.networks || [];
    const seasons = movieDetails.seasons || [];
    const lastEpisode = movieDetails.last_episode_to_air;
    const nextEpisode = movieDetails.next_episode_to_air;
    const inProduction = movieDetails.in_production;

    // Fetching Data
    useEffect(() => {
        async function getMovieDetails() {
            setLoading(true);
            setError("");
            try {
                const [response1, response2] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${apiKey}`),
                    fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=${apiKey}`)
                ]);

                if (!response1.ok || !response2.ok) {
                    throw new Error("Failed to fetch movies.");
                }
                const data1 = await response1.json();
                setMovieDetails(data1);

                const data2 = await response2.json();
                setCast(data2.cast || []);
            }
            catch (err) {
                setMovieDetails({})
                setCast([]);
                setError(err.message || "Something went wrong.");
            }
            finally {
                setLoading(false);
            }
        }
        getMovieDetails();
    }, [movieId, mediaType, apiKey])

    return (
        <>
            <main
                className="min-h-screen bg-[#12091F]"
            >
                {mediaType === "movie" && (
                    <section>
                        <div>
                            <img 
                                src={backgroundImg}
                                alt={title}
                                className="fixed inset-0 z-0 h-full w-full object-cover opacity-15"
                            />
                        </div>
                        <div 
                            className="relative z-10 flex gap-8 px-6 py-8 text-white"
                        >
                            <img 
                                src={posterLink}
                                alt={title}
                                className="h-auto w-64 shrink-0 self-start rounded-xl object-contain"
                            />
                            <div className="min-w-0 flex-1 space-y-6">
                                <h2 className="text-5xl font-bold tracking-tight">
                                    {title}
                                </h2>

                                <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Release Date</p>
                                        <p>{releaseDate || "N/A"}</p>
                                    </div>

                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Runtime</p>
                                        <p>{runtime != null ? `${runtime} minutes` : "N/A"}</p>
                                    </div>

                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Status</p>
                                        <p>{status || "N/A"}</p>
                                    </div>

                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Budget</p>
                                        <p>
                                            {productionBudget > 0
                                                ? `$${productionBudget.toLocaleString()}`
                                                : "Unavailable"}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Box Office</p>
                                        <p>
                                            {boxOffice > 0
                                                ? `$${boxOffice.toLocaleString()}`
                                                : "Unavailable"}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:rotate-y-10 hover:rotate-x-10">
                                        <p className="text-sm text-gray-400">Language</p>
                                        <p>{originalLanguage?.toUpperCase() || "N/A"}</p>
                                    </div>
                                </div>

                                {tagline && (
                                    <p className="italic text-purple-300">{tagline}</p>
                                )}

                                {homepageLink && (
                                    <a
                                        href={homepageLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block text-purple-300 hover:text-purple-200"
                                    >
                                        Official Website ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {mediaType === "tv" && seasons.length > 0 && (
                    <section className="px-6 py-8 text-white">
                        <h2 className="mb-5 text-2xl font-bold">Seasons</h2>

                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                            {seasons.map((season) => {
                                const seasonPoster = season.poster_path
                                    ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                    : "https://placehold.co/300x450?text=No+Poster";

                                return (
                                    <div key={season.id} className="space-y-2">
                                        <img
                                            src={seasonPoster}
                                            alt={season.name}
                                            className="aspect-[2/3] w-full rounded-xl object-cover"
                                        />

                                        <h3 className="font-semibold">{season.name}</h3>

                                        <p className="text-sm text-gray-400">
                                            {season.episode_count} episodes
                                        </p>

                                        <p className="text-sm text-gray-400">
                                            {season.air_date || "Air date unavailable"}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}

export default MovieDetails;