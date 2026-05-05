import { Link } from 'react-router-dom';
import GenresMovieListSection from '../../genres/components/GenresMovieListSection';

const BottomBodyView = ({ moviesByGenre }) => {
  return (
    <section className='browse-page-body-area-section'>
      <div className='common_container'>
        <div className='section_hdng_section'>
          <div className='section_hdng_col'>
            <h4 className='section_title'>Tranding Movies by Genres</h4>
          </div>
          <div className='section_hdng_col row_view'>
            <Link to="/genres" className='common_button'>View all genres</Link>
          </div>
        </div>
        <div className='browse_genre_section'>
          {moviesByGenre?.slice(0,4).map((movie) => (
              <div className='browse_genre_section_col' key={movie.genreName}>
                <GenresMovieListSection title={movie.genreName} movies={movie.movies?.slice(0,4)} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomBodyView;

