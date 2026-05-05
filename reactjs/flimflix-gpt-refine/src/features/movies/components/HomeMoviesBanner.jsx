import useDefaultMovies from "../queries/useDefaultMovies";
import HomeMoviesBannerView from "./HomeMoviesBannerView";
import Loader from "../../../shared/components/Loader";
import ErrorState from "../../../shared/components/ErrorState";
import EmptyState from "../../../shared/components/EmptyState";

const HomeMoviesBanner = () => {
    const { data: movies, isLoading, isError } = useDefaultMovies();

    if (isLoading) return <Loader />;
    if (isError) return <ErrorState message="Error loading featured movies." />;
    if (!movies || movies.length === 0) return <EmptyState message="No featured movies found." />;

    return <HomeMoviesBannerView movies={movies} />;
}
export default HomeMoviesBanner;
