import MovieBannerCard from "./MovieBannerCard";
import SlickCarousel from "../../../shared/components/sliders/SlickCarousel";

const HomeMoviesBannerView = ({ movies }) => {
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
    <SlickCarousel settings={defaultSettings}>
      {movies.map((movie) => (<MovieBannerCard key={movie.id} movie={movie} />))}
    </SlickCarousel>
  );
};

export default HomeMoviesBannerView;
