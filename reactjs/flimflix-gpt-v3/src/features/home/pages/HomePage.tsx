import React from 'react';
import { HeroSection, TrendingToday } from '@/features/home';
import { useMoviesGenresQuery, useTvGenresQuery, useAllGenresQuery } from '@/features/genres';

const HomePage = () => {

  const {
    data: genres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
  } = useAllGenresQuery();

  return (
    <div>
      <h2>Home Page</h2>
      <HeroSection/>
      {/* Trending Today */}
      <TrendingToday/>
      {/* Popular Movies */}
      {/* Popular TV Shows */}
      {/* Top Rated Movies */}
      {/* Top Rated TV Shows */}
      {/* Upcoming Movies */}
      {/* Airing Today */}
      {/* Popular Actors */}

      <h3>Genres</h3>
      {isLoadingGenres && <div>Loading...</div>}
      {isErrorGenres && <div>Error</div>}
      {genres && genres.map((item : any) => (
        <div key={item.id}>{item.id} -{item.name}</div>
      ))}

      {/* 
      
      /trending/all/week
      /movie/popular
      /tv/popular
      /movie/top_rated
      */}
    </div>
  )
}

export default HomePage
