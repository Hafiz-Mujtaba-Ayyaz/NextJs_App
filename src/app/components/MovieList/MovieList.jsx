import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { fetchTrendingMovies } from "@/app/api/movies/movies";
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'



const MoviesList = async () => {
  let movies = [];
  let error = null;

  try {
    movies = await fetchTrendingMovies();
  } catch (err) {
    error = err;
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2rem",
        margin: "2rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
