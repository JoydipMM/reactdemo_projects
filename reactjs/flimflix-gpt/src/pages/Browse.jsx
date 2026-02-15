import Header from '../components/Header'
import BottomBodySection from '../components/browse/BottomBodySection';
import GptSearch from '../components/gpt/GptSearch';
import TopBannerSection from '../components/browse/TopBannerSection';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      {/* <Header /> */}
      Browse<br />
      <GptSearch />
      <TopBannerSection />
      <BottomBodySection />
    </div>
  )
}

export default Browse
