import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router';
import Layout from './Layout.jsx';
import './index.css'
// import App from './App.jsx'
import Home from './Pages/Home.jsx';
import Discover from './Pages/Discover.jsx'
import About from './Pages/About.jsx'
import SearchResults from './Pages/SearchResults .jsx';
import MovieDetails from './Pages/MovieDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "discover",
        element: <Discover />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "search",
        element: <SearchResults />
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />
      },
      {
        path: "tv/:movieId",
        element: <MovieDetails />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
