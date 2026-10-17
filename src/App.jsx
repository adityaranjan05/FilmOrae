// // import { useState } from 'react'

// // import Home from './Pages/Home';

// function App() {
//   // const [count, setCount] = useState(0)
//   const [searchMovie, setSearchMovie] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const apiKey = import.meta.env.VITE_OMDB_API_KEY;

//   function handleSearch() {
//     if (searchMovie.trim() === "") {
//         return;
//     }
//     getMovies();
//   }

//   async function getMovies() {
//     setLoading(true);
//     try {
//       const response1 = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchMovie.trim()}`);
//       await new Promise ((resolve) => {
//         setTimeout(() => {
//           resolve()
//         }, 2000);
//       });
//       const data1 = await response1.json();
//       console.log(data1);
//       if (data1.Response === "True") {
//         setMovies(data1.Search);
//         setError("");
//       }
//       else {
//         setMovies([]);
//         setError("Movies not found!");
//       }
//     }
//     finally {
//       setLoading(false)
//     }
//   }
  
//   // getMovies();
  
//   return (
//     <>
//       {/* <Home
//         setSearchMovie={setSearchMovie}
//         searchMovie={searchMovie}
//         search={handleSearch}
//         movies={movies}
//         error={error}
//         loading={loading}
//       /> */}
//     </>
//   )
// }

// // export default App
