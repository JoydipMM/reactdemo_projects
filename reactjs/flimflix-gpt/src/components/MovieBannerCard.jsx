
import useGenres from "../hooks/useGenres";
import { TMDB_IMG_PATH, TMDB_LOGO } from "../utils/constants";

const MovieBannerCard = ({ className = "", movie }) => {

    const { getGenreName } = useGenres();

    const releaseYear = new Date(movie?.release_date).getFullYear();

    return <div className={`movieBannerCard ${className ? className : ""}`}>
        <div className="contentwrapper">
            <div className="common_container">
                <div className="banner_inner_row">
                    <div className="banner_left_col">
                        <div className="movie_banner_cnt_wrap">
                            {movie?.original_title && <h2 className="movie_banner_title">{movie?.original_title} {`(${releaseYear})`}</h2> }
                            {!movie?.original_title && <h2 className="movie_banner_title">{movie?.title} {`(${releaseYear})`}</h2> }
                            <div className="movie_small_info_row">
                                <img className="api_logo" src={TMDB_LOGO} alt="" />
                                {movie?.genre_ids &&<ul className="genarlist">
                                {movie.genre_ids.map((id) => (<li key={id}>{getGenreName(id)}</li>))}
                            </ul>}
                            </div>
                            {movie?.overview && <p className="movie_banner_overview">{movie?.overview}</p>}
                            <button className="common_button">Watch Now</button>
                        </div>
                    </div>
                    <div className="banner_rgt_col">
                        <div className="banner_post_frame">
                            <img src={`${TMDB_IMG_PATH}${movie.poster_path}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <img className="coverimage" src={`${TMDB_IMG_PATH}${movie.backdrop_path}`} alt="" />
        </div>
}

export default MovieBannerCard;