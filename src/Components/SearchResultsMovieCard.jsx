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
    const movieName = movie.title;
    const posterLink = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/300x450?text=No+Poster";
    const releaseYear = movie.release_date
        ? movie.release_date.slice(0, 4)
        : "Year unavailable";
    const genre = movie.genre_ids;
    const movieDetail = movie.overview || "No overview available.";

    return (
        <>

        </>
    )
}

export default SearchResultsMovieCard;