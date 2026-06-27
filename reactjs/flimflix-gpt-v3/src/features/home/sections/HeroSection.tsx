import React from 'react';
import { useHomeBannerQuery } from "@/features/home/queries/useBannerQuery";
import { BannerCardProp } from '@/features/home/types/home';
const HeroSection = () => {

    const {
    data: moviesBanners,
    isLoading: isLoadingMoviesBanner,
    isError: isErrorMoviesBanner,
  } = useHomeBannerQuery();

  return (
    <div>
      <h3>Hero Section</h3>
      {isLoadingMoviesBanner && <div>Loading...</div>}
      {isErrorMoviesBanner && <div>Error</div>}
      {moviesBanners && moviesBanners.map((item : BannerCardProp) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default HeroSection
