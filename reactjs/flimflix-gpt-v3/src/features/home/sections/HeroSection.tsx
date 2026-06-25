import React from 'react';
import { useHomeBannerQuery } from "../queries/useQueries";
import { BannerCardProp } from '../types/home';
const HeroSection = () => {

    const {
    data: moviesBanners,
    isLoading: isLoadingMoviesBanner,
    isError: isErrorMoviesBanner,
  } = useHomeBannerQuery();

  return (
    <div>
      Hero Section
      {isLoadingMoviesBanner && <div>Loading...</div>}
      {isErrorMoviesBanner && <div>Error</div>}
      {moviesBanners && moviesBanners.map((item : BannerCardProp) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default HeroSection
