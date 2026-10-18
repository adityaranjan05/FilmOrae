import { useState } from "react"
import { Link } from "react-router";

const navLinks = [
    {
        name : "Home",
        key : "home",
        path: "/",
    },
    {
        name : "Discover",
        key : "discover",
        path: "/discover",
    },
    {
        name : "About",
        key : "about",
        path: "/about",
    }
]

export default function Navbar () {
    const [activeNav, setActiveNav] = useState("home")

    return (
        <>
            <div
                className="bg-[radial-gradient(circle_at_50%_0%,#241044_0%,#1B0C32_35%,#120820_70%,#0A0510_100%)] py-4 border-b border-purple-500/20 shadow-xl shadow-purple-950/30 sticky top-0 z-50 w-full"
            >
                <nav
                    className="flex justify-between items-center mx-auto max-w-7xl px-6"
                >
                    <h1
                        className="text-white text-3xl font-bold"
                    >
                        Movie<span className="text-orange-500">Muse.</span>
                    </h1>
                    <ul
                        className="flex gap-10"
                    >
                        {navLinks.map ((item) => {
                            return (
                                <li 
                                    key={item.key}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={
                                            () => setActiveNav(item.key)
                                        }
                                        className={`relative cursor-pointer
                                            text-md
                                            font-bold
                                            after:content-['']
                                            after:absolute
                                            after:left-0
                                            after:-bottom-1
                                            after:h-0.5
                                            after:bg-orange-500
                                            after:transition-all
                                            after:duration-300
                                            ${item.key === activeNav
                                                ? "text-orange-500 after:w-full"
                                                : "text-white after:w-0 hover:after:w-full "
                                            }
                                        `}
                                    >
                                            {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}