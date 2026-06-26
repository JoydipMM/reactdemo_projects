import React from 'react';
import { useTrandingMoviesQuery } from '@/features/home/queries/useTradingMovieQueries';

const TrendingToday = () => {

  const {
    data: trandingMovies,
    isLoading: isLoadingTrandingMovies,
    isError: isErrorTrandingMovies,
  } = useTrandingMoviesQuery();

  if (isLoadingTrandingMovies) return <div>Loading...</div>;
  if (isErrorTrandingMovies) return <div>Error</div>;


  return (
    <div>
      <h4>Home Trending Today</h4>
      {trandingMovies && trandingMovies.map((item : any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default TrendingToday
