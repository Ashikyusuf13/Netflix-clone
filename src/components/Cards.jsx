import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OMDB_API_KEY = "49e13bc7"; // Your OMDb API key

const Cards = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Use a default search term or the title prop
    const searchTerm = title ? title : "batman";
    fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(
        searchTerm
      )}&apikey=${OMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.Search) {
          setMovies(res.Search);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, [title]);

  return (
    <div className="bg-black text-white p-4">
      <h2 className="font-bold text-2xl italic ml-4 mb-2">
        {title ? title : "Popular on OMDb"}
      </h2>
      <div className="flex gap-6 mt-4 ml-5 overflow-x-auto scrollbar-hide cursor-pointer pb-4">
        {error ? (
          <div className="text-red-500 text-lg">No movies found.</div>
        ) : (
          movies.map((movie, index) => (
            <Link
              to={`/player/${movie.imdbID}?title=${encodeURIComponent(
                movie.Title
              )}`}
              key={movie.imdbID}
              className="min-w-[140px] md:min-w-[200px] bg-gray-900 h-70 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col items-center"
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-[180px] md:h-[300px] object-cover rounded-t-lg"
              />
              <div className="p-2 flex flex-col items-center">
                <p className="text-base md:text-lg font-semibold text-center">
                  {movie.Title}
                </p>
                <span className="text-xs text-gray-400">{movie.Year}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
