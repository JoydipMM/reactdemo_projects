import { useSelector } from "react-redux";
import useDefaultMovies from "../../hooks/useDefaultMovies";
import MovieBannerCard from "../MovieBannerCard";
import SlickCarousel from "../sliders/SlickCarousel";

const HomeMoviesBanner = () => {
    
    useDefaultMovies();
    const getDefaultMovies = useSelector((store) => store.movies?.defaultMoviesList);
    console.log(getDefaultMovies);

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
    return (
        <>
        <SlickCarousel settings={defaultSettings}>
            {getDefaultMovies?.map((movie) => (<MovieBannerCard key={movie.id} movie={movie} />))}
        </SlickCarousel>
        
        </>
    ) 
}
export default HomeMoviesBanner;