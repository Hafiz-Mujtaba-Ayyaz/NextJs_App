import React from 'react';
import MoviesList from '../components/MovieList/MovieList'; 

export const metadata = {
  title: 'Movies Listing',
  description: 'Movies listing'
}

const Page = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <h1 style={{paddingLeft:'30px'}}>Trending Movies</h1>
            <MoviesList />
        </div>
    );
};

export default Page;
