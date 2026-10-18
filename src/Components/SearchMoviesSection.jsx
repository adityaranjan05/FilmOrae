import SearchResultsMovieCard from "./SearchResultsMovieCard";

function SearchMoviesSection ({ title, movies }) {
    return (
        <>
            <section className="mx-auto max-w-340 px-6 py-8">
                <h2 className="mb-6 text-2xl font-bold text-white">
                    {title}
                </h2>
    
                <div className="flex flex-col gap-5">
                    {movies.map((movie) => (
                        <div 
                            key={movie.id} 
                            className="w-full p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 shadow-lg shadow-purple-950/20 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-900/20"
                        >
                            <SearchResultsMovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </section>
        </>        
    )
}

export default SearchMoviesSection;