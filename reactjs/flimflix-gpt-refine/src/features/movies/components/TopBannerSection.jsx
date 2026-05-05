import React from 'react';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../queries/useNowPlayingMovies';
import TopBannerView from './TopBannerView';

const TopBannerSection = () => {
    const nextMovieIndex = useSelector((store) => store.movies?.currentBrowseMovieIndex);
    const { data: getMovies, isLoading, isError } = useNowPlayingMovies();

    if (isLoading) return <div>Loading Banner...</div>;
    if (isError) return <div>Error Loading Banner</div>;
    if (!getMovies || !getMovies[nextMovieIndex]) return null;

    const singleMovieData = getMovies[nextMovieIndex];

    return <TopBannerView singleMovieData={singleMovieData} />;
};

export default TopBannerSection;

