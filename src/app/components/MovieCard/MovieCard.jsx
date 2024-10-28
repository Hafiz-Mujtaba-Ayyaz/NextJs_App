import React from "react";
import Link from "next/link";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "20px" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "340px",
          height: "auto",
          borderRadius: "20px 20px 0 0",
          marginBottom: "2rem",
        }}
      />
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <FavoriteButton movie={movie} />
          </div>

          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Link href={`/movies/details/${movie.id}`}>
              <button
                style={{
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Open Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
