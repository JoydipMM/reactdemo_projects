import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <br/>
      <br/>
      Browse
    </div>
  )
}

export default Browse
