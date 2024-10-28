import React from "react";
import Image from "next/image";
import { fetchMovieDetails } from "@/app/api/movies/movies";

export default async function MovieDetailsPage({ params }) {
  const { id } = params;
  const movie = await fetchMovieDetails(id);

  if (!movie) {
    return <div>Error loading movie details.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
          width={1280}
          height={720}
          style={styles.backdrop}
        />
        <div style={styles.posterContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            style={styles.poster}
          />
        </div>
      </div>

      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h1>
        <p style={styles.tagline}>
          <i>{movie.tagline}</i>
        </p>
        <div style={styles.ratingContainer}>
          <p style={styles.rating}>
            Rating: {movie.vote_average} / 10
            <span style={styles.voteCount}> ({movie.vote_count} votes)</span>
          </p>
        </div>
        
        <p>
          <b>Overview:</b> {movie.overview}
        </p>

        <div style={styles.genres}>
          {movie.genres.map((genre) => (
            <span key={genre.id} style={styles.genre}>
              {genre.name}
            </span>
          ))}
        </div>

        <div style={styles.productionInfo}>
          <p>
            <b>Runtime:</b> {movie.runtime} minutes
          </p>
          <p>
            <b>Status:</b> {movie.status}
          </p>
          <p>
            <b>Release Date:</b> {movie.release_date}
          </p>
        </div>

        <div>
          <h3 style={styles.productionTitle}>Production Companies:</h3>
          <div style={styles.productionCompanies}>
            {movie.production_companies.map((company) => (
              <div key={company.id} style={styles.company}>
                {company.logo_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    alt={company.name}
                    width={100}
                    height={50}
                    style={styles.companyLogo}
                  />
                )}
                {company.name}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.additionalInfo}>
          <p>
            <b>Languages:</b> {movie.spoken_languages.map(lang => lang.name).join(", ")}
          </p>
          <p>
            <b>Countries:</b> {movie.production_countries.map(country => country.name).join(", ")}
          </p>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer" style={styles.homepageLink}>
            <button style={styles.homepageButton}>Official Homepage</button>
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  header: {
    position: "relative",
    marginBottom: "20px",
  },
  backdrop: {
    borderRadius: "15px",
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  posterContainer: {
    position: "absolute",
    bottom: "-150px",
    left: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  },
  poster: {
    borderRadius: "15px",
  },
  detailsContainer: {
    marginTop: "140px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    textAlign: "center",
  },
  tagline: {
    fontSize: "1.5rem",
    color: "#555",
    textAlign: "center",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  rating: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  voteCount: {
    fontSize: "0.9rem",
    color: "#555",
  },
  genres: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  genre: {
    backgroundColor: "#ff4500",
    color: "#fff",
    borderRadius: "5px",
    padding: "5px 10px",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  productionInfo: {
    marginBottom: "20px",
  },
  productionTitle: {
    marginTop: "20px",
    fontSize: "1.5rem",
  },
  productionCompanies: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  company: {
    display: "flex",
    alignItems: "center",
  },
  companyLogo: {
    marginRight: "10px",
  },
  additionalInfo: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#555",
  },
  homepageLink: {
    textDecoration: "none",
  },
  homepageButton: {
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
