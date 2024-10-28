"use client";
import React, { useMemo } from "react";
import {
  useToggleFavoriteMutation,
  useGetFavoriteMoviesQuery,
} from "../../store/services/moviesSlice";

const FavoriteButton = ({ movie }) => {
  const { data: favoriteMovies = [], isLoading: favouriteLoading, refetch: refetchFavorites } =
    useGetFavoriteMoviesQuery();
  const [toggleFavorite, { isLoading }] = useToggleFavoriteMutation();

  const favoriteMovieIds = useMemo(() => {
    console.log('first')
    const ids = {};
    favoriteMovies.results?.forEach((fav) => {
      ids[fav.id] = true;
    });
    return ids;
  }, [favoriteMovies.results]);

  const isFavorite = Boolean(favoriteMovieIds[movie.id]);

  const handleToggleFavorite = async () => {
    try {
      await toggleFavorite({
        media_id: movie.id,
        favorite: !isFavorite,
      }).unwrap();
      refetchFavorites();
      alert(isFavorite ? "Removed from favorites!" : "Added to favorites!");
    } catch (error) {
      console.error("Failed to toggle favorite status: ", error);
    }
  };

  if (favouriteLoading) {
    return <div>Loading...</div>;
  }

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        backgroundColor: isFavorite ? "#ff4500" : "#28a745",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      disabled={isLoading}
    >
      {isLoading ? "Processing..." : isFavorite ? "Remove" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;