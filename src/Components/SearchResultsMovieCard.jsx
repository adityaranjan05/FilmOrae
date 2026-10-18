import { Link } from "react-router";

const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

function SearchResultsMovieCard ({ movie }) {
    const movieName = movie.title || movie.name;
    const posterLink = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/300x450?text=No+Poster";
    const releaseDate = movie.release_date || movie.first_air_date;

    const releaseYear = releaseDate
        ? releaseDate.slice(0, 4)
        : "Year unavailable";
    const genre = movie.genre_ids || [];
    const movieDetail = movie.overview || "No overview available.";

    return (
        <div
            className="flex h-full min-h-80 items-stretch gap-5"
        >
            <img 
                alt={movieName}
                src={`${posterLink}`}
                className="block w-62 shrink-0 self-stretch rounded-xl object-cover"
            />
            <div
                className="flex min-w-0 flex-1 flex-col p-3 "
            >
                <div
                    className="flex flex-wrap gap-4 items-baseline self-start"
                >
                    <h2
                        className="text-white text-2xl font-semibold"
                    >
                        {movieName}
                    </h2>
                    <span
                        className="text-gray-400 text-lg font-semibold"
                    >
                        ({releaseYear})
                    </span>
                </div>
                <span
                    className={`inline-flex mt-3 self-start items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        movie.media_type === "tv"
                            ? "border-purple-400/40 bg-purple-500/15 text-purple-300"
                            : "border-pink-400/40 bg-pink-500/15 text-pink-300"
                    }`}
                >
                    {movie.media_type === "tv" ? "TV Show" : "Movie"}
                </span>
                <ul
                    className="mt-3 flex flex-wrap gap-4 font-semibold text-gray-400"
                >
                    {
                        genre.map((genreId) => (
                            <li
                                key={genreId}
                                className="rounded-xl border border-purple-200/40 bg-purple-500/10 px-4 py-0.5"
                            >
                                {genreMap[genreId] || "Other"}
                            </li>
                        ))
                    }
                </ul>
                <p
                    className="font-semibold text-sm mt-3 mb-3 text-gray-400"
                >
                    {movieDetail}
                </p>
                <Link
                    to={`/${movie.media_type === "tv" ? "tv" : "movie"}/${movie.id}`}
                    className="self-end rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-500 mt-auto"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default SearchResultsMovieCard;