"use client";
import React, { useCallback, useEffect } from "react";
import { useGetFavoriteMoviesQuery } from "../store/services/moviesSlice";
import MovieCard from "../components/MovieCard/MovieCard";

const FavoritesList = () => {
  const { data, error, isLoading, refetch } = useGetFavoriteMoviesQuery();

  useEffect(() => {
      refetch();
  }, []);

  if (isLoading) return <p>Loading favorite movies...</p>;
  if (error) return <p>Error fetching favorite movies: {error.message}</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2rem",
        margin: "2rem",
      }}
    >
      {data.results.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavoritePage={true} />
        ))
      )}
    </div>
  );
};

export default FavoritesList;
