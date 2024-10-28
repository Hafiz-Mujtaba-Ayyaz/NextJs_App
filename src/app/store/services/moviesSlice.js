import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => 'trending/movie/day',
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}`,
    }),
    toggleFavorite: builder.mutation({
      query: ({ media_id, favorite }) => ({
        url: 'account/21587069/favorite',
        method: 'POST',
        body: {
          media_type: 'movie',
          media_id,
          favorite,
        },
      }),
    }),
    getFavoriteMovies: builder.query({
      query: () => 'account/21587069/favorite/movies',
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMovieDetailsQuery,
  useToggleFavoriteMutation,
  useGetFavoriteMoviesQuery,
} = moviesApi;
