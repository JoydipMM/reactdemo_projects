import Header from '../components/Header'
import BottomBodySection from '../components/browse/BottomBodySection';
import GptSearch from '../components/gpt/GptSearch';
import TopBannerSection from '../components/browse/TopBannerSection';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      {/* <GptSearch /> */}
      <TopBannerSection />
      <BottomBodySection />
    </>
  )
}

export default Browse
