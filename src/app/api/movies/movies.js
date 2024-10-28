export async function fetchTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day";


  const headers = new Headers();
  headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

export async function fetchMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}
export async function fetchFavoriteMovies() {
  const url =
    "https://api.themoviedb.org/3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
      revalidate: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("response:", data);
    return data.results;
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    return [];
  }
}
