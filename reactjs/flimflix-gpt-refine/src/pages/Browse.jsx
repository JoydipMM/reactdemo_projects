import Header from '../shared/components/Header'
import BottomBodySection from '../features/movies/components/BottomBodySection';
import TopBannerSection from '../features/movies/components/TopBannerSection';
import useNowPlayingMovies from '../features/movies/queries/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <TopBannerSection />
      <BottomBodySection />
    </>
  )
}

export default Browse

