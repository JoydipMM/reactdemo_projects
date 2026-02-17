import { useDispatch, useSelector } from "react-redux";
import useDefaultMovies from "../../hooks/useDefaultMovies";
import MovieBannerCard from "../MovieBannerCard";
import SlickCarousel from "../sliders/SlickCarousel";
import { useEffect } from "react";
import { defaultMoviesFetch } from "../../store/moviesSlice";

const HomeMoviesBanner = () => {

    const dispatch = useDispatch();

    // we are calling a hook for fetch api and dispatch to store
    // useDefaultMovies();

    // we are subscribe to data from store
    const getDefaultMovies = useSelector((store) => store.movies?.defaultMoviesList?.firstFiveMovies);
    //console.log(getDefaultMovies);

    const defaultSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    useEffect(() => {
        dispatch(defaultMoviesFetch()); // we are dispathing a outside action
    }, []);
    return (
        <>
        <SlickCarousel settings={defaultSettings}>
            {getDefaultMovies?.map((movie) => (<MovieBannerCard key={movie.id} movie={movie} />))}
        </SlickCarousel>
        
        </>
    ) 
}
export default HomeMoviesBanner;