import React from 'react';
import useGetTrandingMovies from '../queries/useGetTrandingMovies';
import useGenres from '../../genres/queries/useGenres';
import { useFormattedMoviesByGenre } from '../queries/useFormattedMoviesByGenre';
import BottomBodyView from './BottomBodyView';
import Loader from '../../../shared/components/Loader';
import ErrorState from '../../../shared/components/ErrorState';
import EmptyState from '../../../shared/components/EmptyState';

const BottomBodySection = () => {
  const { data: getTrandingMovies, isLoading: isTrendingLoading, isError: isTrendingError } = useGetTrandingMovies();
  const { genres: getGenres, isLoading: isGenresLoading, isError: isGenresError } = useGenres();
  
  const moviesByGenre = useFormattedMoviesByGenre(getGenres, getTrandingMovies);

  if (isTrendingLoading || isGenresLoading) return <Loader />;
  if (isTrendingError || isGenresError) return <ErrorState message="Failed to load sections. Please try again." />;
  if (!moviesByGenre || moviesByGenre.length === 0) return <EmptyState message="No categories available right now." />;

  return <BottomBodyView moviesByGenre={moviesByGenre} />;
}

export default BottomBodySection;

