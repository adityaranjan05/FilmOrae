import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MoviesCard from "./MoviesCard";
import { Link } from "react-router";

export default function MovieSection({ title, movies }) {
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

    return (
        <section className="mx-auto max-w-340 px-6 py-8">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                    {title}
                </h2>

                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={scrollLeft}
                        aria-label={`Scroll ${title} left`}
                        className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-950/70 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={scrollRight}
                        aria-label={`Scroll ${title} right`}
                        className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-purple-400/30 bg-purple-950/70 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto p-4 hide-scrollbar scroll-smooth"
            >
                {movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                    >
                        <div key={movie.id} className="shrink-0">
                            <MoviesCard movie={movie} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );}