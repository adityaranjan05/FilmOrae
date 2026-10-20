import { useParams, useLocation, Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { MoveUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

function MovieDetails() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState("")

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    const { movieId } = useParams();
    const location = useLocation();
        

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

    const scrollRef = useRef(null);
    
    function scrollLeft() {
        scrollRef.current?.scrollBy({
            left: -600,
            behavior: "smooth",
        });
    }

    function scrollRight() {
        scrollRef.current?.scrollBy({
            left: 600,
            behavior: "smooth",
        });
    }

    // Fetching Data
    useEffect(() => {
        async function getMovieDetails() {
            setLoading(true);
            setError("");
            try {
                const [response1, response2, response3] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${apiKey}`),
                    fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=${apiKey}`),
                    fetch(`https://api.themoviedb.org/3/${mediaType}/${movieId}/videos?api_key=${apiKey}`)
                ]);

                if (!response1.ok || !response2.ok || !response3.ok) {
                    throw new Error("Failed to fetch movies.");
                }
                const data1 = await response1.json();
                setMovieDetails(data1);

                const data2 = await response2.json();
                setCast(data2.cast || []);

                const data3 = await response3.json();

                const trailerKey = data3.results.find(
                    (v) => v.type === "Trailer" && v.site === "YouTube"
                )?.key;

                if (trailerKey) {
                    setTrailer(`https://www.youtube.com/embed/${trailerKey}`);
                }
            }
            catch (err) {
                setMovieDetails({})
                setCast([]);
                setTrailer("");
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
                            className="relative z-10 flex flex-col gap-8 px-12 py-12 text-white space-y-6"
                        >
                            <div className="flex gap-16">
                                <img 
                                    src={posterLink}
                                    alt={title}
                                    className="h-auto w-64 shrink-0 self-start rounded-xl object-contain border-2 border-purple-800 drop-shadow-xl drop-shadow-purple-800/20 transition-all duration-200 hover:scale-105 hover:rotate-x-10 hover:rotate-y-12 hover:drop-shadow-2xl hover:drop-shadow-purple-800/20"
                                />
                                <div className="min-w-0 flex-1 space-y-4">
                                    <h4
                                        className="px-3 py-0.5 rounded-xl bg-purple-950/80 w-fit border border-purple-800"
                                    >
                                        Movie
                                    </h4>

                                    <h2 className="text-5xl font-bold tracking-tight">
                                        {title}
                                    </h2>

                                    <ul
                                        className="flex flex-wrap gap-3"
                                    >
                                        {genres.map((genre) => {
                                            return (
                                                <li
                                                    key={genre.id}
                                                    className="rounded-full border border-purple-800 bg-purple-950/90 px-3 py-1 text-sm"
                                                >
                                                    {genre.name}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <div className="flex gap-2 items-end">
                                        <Star className="text-yellow-500 fill-yellow-500 w-8 h-8"/>
                                        <h4 className="text-2xl">
                                            {rating != null ? rating.toFixed(1) : "N/A"}
                                        </h4>
                                        <h5 className="text-gray-400 text-md self-end">
                                            /10    
                                        </h5>
                                    </div>

                                    <p
                                        className="text-gray-400 max-w-4xl"
                                    >
                                        {overview || "Overview unavailable."}
                                    </p>

                                    <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Release Date</p>
                                            <p>{releaseDate || "N/A"}</p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Runtime</p>
                                            <p>{runtime != null ? `${runtime} minutes` : "N/A"}</p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Status</p>
                                            <p>{status || "N/A"}</p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Budget</p>
                                            <p>
                                                {productionBudget > 0
                                                    ? `$${productionBudget.toLocaleString()}`
                                                    : "Unavailable"}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Box Office</p>
                                            <p>
                                                {boxOffice > 0
                                                    ? `$${boxOffice.toLocaleString()}`
                                                    : "Unavailable"}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Language</p>
                                            <p>{originalLanguage?.toUpperCase() || "N/A"}</p>
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">Popularity</p>
                                            <p>
                                                {popularity != null ? popularity.toFixed(2) : "N/A"}
                                            </p>
                                        </div>

                                        <div className="min-w-0 rounded-xl bg-white/5 p-4 shadow-md shadow-black/30 transition-all duration-150 hover:shadow-lg hover:-rotate-y-10 hover:rotate-x-10">
                                            <p className="text-sm text-gray-400">
                                                Production Companies
                                            </p>
                                            <ul
                                                className="mt-2 flex flex-wrap gap-x-8 gap-y-2 pl-4 list-disc list-outside"
                                            >
                                                {productionCompanies.map((company) => {
                                                    return (
                                                        <li
                                                            key={company.id}
                                                            className="min-w-0 max-w-full wrap-break-word text-sm text-gray-300"
                                                        >
                                                            {company.name}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
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
                                            className="flex gap-2 text-purple-300 hover:text-purple-200"
                                        >
                                            <span>Official Website</span> <span><MoveUpRight /></span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div className="flex justify-between">
                                    <h1 className="text-3xl font-bold tracking-wide">
                                        Cast
                                    </h1>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={scrollLeft}
                                            aria-label={`Scroll ${title} left`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-950/70 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        >
                                            <ChevronLeft size={22} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={scrollRight}
                                            aria-label={`Scroll ${title} right`}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-950/70 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        >
                                            <ChevronRight size={22} />
                                        </button>
                                    </div>
                                </div>
                                <div
                                    ref={scrollRef}
                                    className="flex flex-nowrap overflow-y-hidden overflow-x-auto hide-scrollbar scroll-smooth gap-10 pb-4"
                                >
                                    {cast.map((actor) => {
                                        const castName = actor.name || "NA";
                                        const characterName = actor.character || "NA";
                                        const profilePic = actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                            : "https://placehold.co/185x278?text=No+Photo";
                                        return (
                                            <div 
                                                key={actor.id}
                                                className="shrink-0 w-42"
                                            >
                                                <img 
                                                    src={profilePic}
                                                    alt={actor.name}
                                                    className="w-42 h-42 rounded-full object-cover select-none"
                                                />
                                                <h2
                                                    className="text-center pt-4 font-bold tracking-wide text-md"
                                                >
                                                    {castName}
                                                </h2>
                                                <h2
                                                    className="wrap-break-word max-w-42 text-center pt-1 font-bold tracking-wide text-md text-gray-400"
                                                >
                                                    ({characterName})
                                                </h2>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                {trailer && (
                                    <>
                                        <iframe
                                             src={trailer}
                                            title={`${title} trailer`}
                                            className=" w-full h-[85dvh] aspect-video rounded-xl"
                                            
                                            allowFullScreen
                                        />
                                    </>
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
                                            className="aspect-2/3 w-full rounded-xl object-cover"
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