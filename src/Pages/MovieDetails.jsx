import { useParams, useLocation } from "react-router";
import { useState, useEffect } from "react";

function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();

    const mediaType = location.pathname.startsWith("/tv/")
        ? "tv"
        : "movie";
    return (
        <>
            <h1>Movie Details</h1>
        </>
    )
}

export default MovieDetails;