import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const TopBannerView = ({ singleMovieData }) => {
  if (!singleMovieData) return null;
  const { id, backdrop, poster } = singleMovieData;

  return (
    <section className='browse_top_banner_section'>
      <div className={`browse_top_bnnr_cnt_wrap`}>
        <div className='common_container'>
          <div className={`banner_inner_row`}>
            <div className="banner_left_col">
              <div className="movie_banner_cnt_wrap">
                <VideoTitle data={singleMovieData} />
              </div>
            </div>
            <div className="banner_rgt_col">
              <div className="banner_post_frame">
                <VideoBackground movieID={id} backdrop={backdrop} poster={poster} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='banner_backdrop' src={`https://image.tmdb.org/t/p/w1920${backdrop}`} alt="" />
    </section>
  );
};

export default TopBannerView;
