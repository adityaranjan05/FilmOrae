# FilmOrae

**Discover your next favourite movie.**

FilmOrae is a movie discovery website built with React that helps users explore movies, browse genres, sort recommendations, and view detailed information about movies and TV series.

The project uses The Movie Database (TMDB) API to fetch movie information, ratings, posters, cast details, and available trailers.

**GitHub Repository:** [FilmOrae](https://github.com/adityaranjan05/FilmOrae)

---

## Features

- **Movie Discovery** — Explore movies and discover something new to watch.
- **Genre Filtering** — Find movies based on your preferred genres.
- **Sorting Options** — Sort movies by popularity, rating, vote count, release date, and title.
- **Movie Details** — View ratings, release dates, runtime, budget, revenue, genres, and production companies.
- **Cast Information** — Browse cast members and their characters.
- **Movie Trailers** — Watch available YouTube trailers.
- **TV Series Details** — Explore TV series information and seasons.
- **Responsive Design** — A dark, cinematic interface built with Tailwind CSS.
- **Client-Side Routing** — Navigate between pages using React Router.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive layouts |
| React Router | Client-side navigation |
| TMDB API | Movie and TV series data |
| Lucide React | Interface icons |
| JavaScript | Application logic |

---

## Getting Started

Follow these steps to run FilmOrae locally.

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- A TMDB API key

### 1. Clone the Repository

```bash
git clone https://github.com/adityaranjan05/FilmOrae.git
cd FilmOrae
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the TMDB API Key

FilmOrae uses the TMDB API to retrieve movie and TV series information.

1. Create an account at [The Movie Database](https://www.themoviedb.org/).
2. Request API access through your account settings.
3. Create a `.env` file in the root directory of the project.
4. Add the following variable:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

5. Replace `your_tmdb_api_key` with your own TMDB API key.

**Important:** Never commit your actual `.env` file to GitHub. Make sure `.env` is included in your `.gitignore`.

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view FilmOrae.

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

The following is an example structure. Actual file names and folders may differ.

```text
FilmOrae/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Discover.jsx
│   │   ├── About.jsx
│   │   └── MovieDetails.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## API Attribution

FilmOrae uses the TMDB API to access movie and TV series information.

This product uses the TMDB API but is not endorsed or certified by TMDB.

Learn more at [The Movie Database](https://www.themoviedb.org/).

---

## Future Improvements

Potential improvements for FilmOrae include:

- Personal watchlists and user authentication
- Additional movie filtering options
- Pagination and infinite scrolling
- Improved loading and error handling
- Accessibility improvements
- More personalised movie discovery

---

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Commit your changes.
4. Open a pull request.

---

## License

FilmOrae is a learning and portfolio project. No specific open-source license is implied unless a license file is added to the repository.
