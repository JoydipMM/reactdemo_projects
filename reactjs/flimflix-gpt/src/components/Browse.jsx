import Header from './Header'
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
