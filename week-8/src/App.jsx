import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favourites from "./Favourites";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86"
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const toggleFavourites = (selected) => {
    const isFavourited = favourites.find((movie) => movie.id === selected.id);
    if (!isFavourited) {
      setFavourites((prev) => [...prev, selected]);
      
    } else {
      const updatedMovies = favourites.filter((movie) => movie.id !== selected.id);
      setFavourites(updatedMovies);
      
    }

    
  };
  return (
    <BrowserRouter>
      <div className="flex justify-around p-4 bg-green-100 mb-2 text-gray-600">
        <Link to="/">Popular Movies</Link>
        <Link
          to="/favourite"
          className="cursor-pointer hover:scale-105 hover:text-green-300"
        >
          My Favourites
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {movies?.map((movie) => (
                <div key={movie.id} className="">
                  <button
                    className="absolute text-white text-lg p-1"
                    onClick={() => toggleFavourites(movie)}
                  >
                    {favourites.find((fav) => fav.id === movie.id) ? (
                      <FaHeart className="text-red-500"/>
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                  <img
                    className="w-full rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          }
        />

        <Route
          path="/favourite"
          element={<Favourites favouriteMovies={favourites} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
