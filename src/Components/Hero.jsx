import heroImg from "../Assets/hero.png"
import SearchBar from "./SearchBar"

export default function Hero( {search, searchMovie, setSearchMovie} ) {
    return (
        <section className="relative h-svh md:h-[93vh] overflow-hidden">
            <img
                src={heroImg}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

            <div
                className="absolute inset-0 bg-gradient-to-r
                           from-[#12091F]/90
                           via-[#12091F]/40
                           to-transparent"
            />

            <div className="relative z-10 max-w-[95%] px-6 h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">Find Your Next</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500 font-bold">Favorite Movie</h1>
                    <p className="text-white/70 max-w-md mx-auto lg:mx-0 font-medium text-base md:text-lg mt-5 leading-relaxed">
                        Search thousands of movies, explore their ratings, cast, and more. Because great movies always find their audience.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <SearchBar
                        setSearchMovie={setSearchMovie}
                        searchMovie={searchMovie}
                        search={search}
                        />
                    </div>
                </div>
                
                <div className="max-w-xs lg:w-40 h-fit relative p-6 bg-[#12091F]/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg shadow-purple-950/30">
                    <h1 className="text-white/80 font-bold text-4xl md:text-5xl">"</h1>
                    <p className="text-white/80 text-lg md:text-xl font-bold">
                        Movies make life a little brighter.
                    </p>
                </div>
            </div>

        </section>
    )
}