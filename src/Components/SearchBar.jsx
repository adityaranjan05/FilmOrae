// import { useState } from "react";

export default function SearchBar ( {setSearchMovie, searchMovie, search} ) {
    
    function handleSubmit(e) {
        e.preventDefault();
        search();
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mt-4 lg:mt-6 w-full"
            >
                <div className="flex gap-2 lg:gap-4 w-full">
                    <input
                        type = "text"
                        placeholder="Search for a movie....."
                        value = {searchMovie}
                        onChange = { (e) => setSearchMovie(e.target.value) }
                        className="flex-1 h-10 lg:h-13 text-sm lg:text-lg bg-purple-900/10 backdrop-blur-lg rounded-xl lg:rounded-2xl text-white shadow-lg px-4 shadow-purple-950/30 border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"    
                    />
                    <button
                        type="submit"
                        className="px-6 h-10 lg:h-13 rounded-xl lg:rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_100%] bg-left text-white font-semibold shadow shadow-orange-400/30 transition-all duration-500 hover:bg-right hover:-translate-y-1 active:translate-y-0"
                    >
                        Search
                    </button>
                </div>
            </form>
        </>
    )
}