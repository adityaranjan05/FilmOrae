export default function MoviesCard({ movie }) {
    const movieName = movie.title;

    const posterLink = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/300x450?text=No+Poster";

    const releaseYear = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "Year unavailable";

    const rating = Number(movie.vote_average).toFixed(1);

    return (
        <div className="w-52 h-auto rounded-lg text-white">

            <img
                src={posterLink}
                alt={`${movieName} poster`}
                className="rounded-lg w-full object-cover aspect-2/3 shadow-lg duration-300 hover:-translate-y-2 hover:shadow-xl"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                        "https://placehold.co/300x450?text=No+Poster";
                }}
            />

            <h2 className="text-lg text-black font-bold mt-2">
                {movieName}
            </h2>

            <div className="flex justify-between items-center mt-1 text-sm text-black/70">
                <span>{releaseYear}</span>

                <span className="text-orange-400">
                    ★ {rating}
                </span>
            </div>

        </div>
    );
}