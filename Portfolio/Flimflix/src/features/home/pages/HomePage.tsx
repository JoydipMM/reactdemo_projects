import React from 'react';
import { HeroSection, TrendingToday } from '@/features/home';
import { GenreList } from '@/features/genres';


const HomePage = () => {



  return (
    <div>
      <h2>Home Page</h2>
      <HeroSection/>
      {/* Trending Today */}
      <TrendingToday/>
      <GenreList/>
      {/* Popular Movies */}
      {/* Popular TV Shows */}
      {/* Top Rated Movies */}
      {/* Top Rated TV Shows */}
      {/* Upcoming Movies */}
      {/* Airing Today */}
      {/* Popular Actors */}


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
