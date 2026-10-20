
import { Link } from "react-router";

const features = [
    {
        title: "Discover Movies",
        description:
            "Explore films across different genres and find something new to watch.",
    },
    {
        title: "Find Your Next Watch",
        description:
            "Choose your preferred genres and sort movies by rating, popularity, or release date.",
    },
    {
        title: "Explore Movie Details",
        description:
            "Check movie ratings, release years, posters, and descriptions before deciding what to watch.",
    },
];

const technologies = [
    {
        name: "React",
        description: "Building the interface with reusable components.",
    },
    {
        name: "Tailwind CSS",
        description: "Styling the website and making it responsive.",
    },
    {
        name: "React Router",
        description: "Handling navigation between pages.",
    },
    {
        name: "TMDB API",
        description: "Fetching movie details, ratings, and posters.",
    },
];

function About() {
    return (
        <main className="min-h-screen bg-[#12091F] text-white">
            <section className="border-b border-purple-500/20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                            About FilmOrae
                        </p>

                        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
                            A simpler way to
                            <br />
                            <span className="text-orange-400">
                                find your next movie.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl leading-8 text-gray-400">
                            FilmOrae is a movie discovery website built
                            for people who enjoy watching films but don't
                            always know what to watch next. Browse movies,
                            explore different genres, and find something
                            that suits your mood.
                        </p>

                        <Link
                            to="/discover"
                            className="mt-8 inline-flex items-center rounded-lg bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
                        >
                            Explore Movies
                        </Link>
                    </div>

                    <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-8 sm:p-10">
                        <p className="text-sm text-gray-500">
                            THE IDEA
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold leading-snug">
                            Less time searching.
                            <br />
                            More time watching.
                        </h2>

                        <p className="mt-5 leading-7 text-gray-400">
                            From popular releases to highly rated films,
                            FilmOrae brings movie information together
                            in one place to make choosing your next
                            watch a little easier.
                        </p>

                        <div className="mt-8 border-t border-purple-500/20 pt-5">
                            <p className="text-sm text-gray-500">
                                Built with React, Tailwind CSS and TMDB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                        The Story
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Why FilmOrae?
                    </h2>

                    <p className="mt-6 leading-8 text-gray-400">
                        Choosing a movie can sometimes take longer than
                        watching one. FilmOrae started as a project to
                        make that process easier while exploring modern
                        frontend development.
                    </p>

                    <p className="mt-4 leading-8 text-gray-400">
                        The goal is simple: create a clean, easy-to-use
                        place where people can browse films, check their
                        details, and discover something worth watching.
                        There is always more to improve, and FilmOrae
                        will continue to grow as the project develops.
                    </p>
                </div>
            </section>

            <section className="border-y border-purple-500/20 bg-purple-950/10">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                            What You Can Do
                        </p>

                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Made for movie discovery
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <article
                                key={feature.title}
                                className="rounded-xl border border-purple-500/20 bg-[#170C25] p-6 transition-colors hover:border-orange-400/40"
                            >
                                <p className="text-sm text-orange-400">
                                    0{index + 1}
                                </p>

                                <h3 className="mt-5 text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-400">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
                    Technology
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Built with
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    FilmOrae uses a small set of technologies to deliver
                    its movie browsing and discovery experience.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {technologies.map((technology) => (
                        <article
                            key={technology.name}
                            className="rounded-xl border border-purple-500/20 p-5 transition-colors hover:border-orange-400/40"
                        >
                            <h3 className="font-semibold text-white">
                                {technology.name}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {technology.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-t border-purple-500/20">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold">
                        Found something to watch?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                        Take a look around and see where your next movie
                        discovery takes you.
                    </p>

                    <Link
                        to="/discover"
                        className="mt-7 inline-flex items-center rounded-lg border border-orange-400/50 px-5 py-3 font-medium text-orange-400 transition hover:bg-orange-500 hover:text-white"
                    >
                        Browse Movies
                    </Link>
                </div>
            </section>

            <footer className="border-t border-purple-500/20 px-6 py-6 text-center">
                <p className="text-sm leading-6 text-gray-500">
                    This product uses the TMDB API but is not endorsed or
                    certified by TMDB.
                </p>

                <p className="mt-2 text-sm text-gray-600">
                    FilmOrae © {new Date().getFullYear()}
                </p>
            </footer>
        </main>
    );
}

export default About;
