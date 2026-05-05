import useGenres from "../../genres/queries/useGenres";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../../app/settingSlice";
import { TMDB_IMG_PATH, TMDB_LOGO } from "../../../shared/constants/constants";

const MovieBannerCard = ({ className = "", movie }) => {
  const { getGenreName } = useGenres();
  const dispatch = useDispatch();

  const toggleLoginEvent = (status) => {
    dispatch(toggleLogin(status));
  };

  const releaseYear = movie?.releaseDate ? new Date(movie.releaseDate).getFullYear() : '';

  return (
    <div className={`movieBannerCard ${className}`}>
      <div className="contentwrapper">
        <div className="common_container">
          <div className="banner_inner_row">
            <div className="banner_left_col">
              <div className="movie_banner_cnt_wrap">
                <h2 className="movie_banner_title">
                  {movie?.originalTitle || movie?.title} {releaseYear ? `(${releaseYear})` : ''}
                </h2>
                <div className="movie_small_info_row">
                  <img className="api_logo" src={TMDB_LOGO} alt="" />
                  {movie?.genreIds && (
                    <ul className="genarlist">
                      {movie.genreIds.map((id) => (
                        <li key={id}>{getGenreName(id)}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {movie?.overview && <p className="movie_banner_overview">{movie.overview}</p>}
                <button className="common_button" onClick={() => toggleLoginEvent(true)}>Watch Now</button>
              </div>
            </div>
            <div className="banner_rgt_col">
              <div className="banner_post_frame">
                {movie?.poster && <img src={`${TMDB_IMG_PATH}${movie.poster}`} alt={movie.title} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {movie?.backdrop && <img className="coverimage" src={`${TMDB_IMG_PATH}${movie.backdrop}`} alt="" />}
    </div>
  );
};

export default MovieBannerCard;
