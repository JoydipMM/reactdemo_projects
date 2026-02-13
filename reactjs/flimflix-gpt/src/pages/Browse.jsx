import Header from '../components/Header'
import BottomBodySection from '../components/browse/BottomBodySection';
import TopBannerSection from '../components/browse/TopBannerSection';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      Browse<br />
      <TopBannerSection />
      <BottomBodySection />
    </div>
  )
}

export default Browse
