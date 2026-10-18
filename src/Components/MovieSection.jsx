import MoviesCard from "./MoviesCard";

export default function MovieSection({ title, movies }) {
    return (
        <section className="mx-auto max-w-340 px-6 py-8">
            <h2 className="mb-6 text-2xl font-bold text-white">
                {title}
            </h2>

            <div className="flex gap-6 overflow-x-auto p-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="shrink-0">
                        <MoviesCard movie={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
}