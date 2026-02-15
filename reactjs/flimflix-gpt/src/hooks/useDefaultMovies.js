
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { defaultLoadMovies } from "../store/moviesSlice";
import { API_BASE_URL, TMDB_API_OPTION } from "../utils/constants";
const useDefaultMovies = () => {
    const dispatch = useDispatch((store)=> store?.movies?.defaultLoadMovies);

    const defaultMovies = async () => {
        const response = await fetch(`${API_BASE_URL}/movie/popular?language=en-US&page=1`, TMDB_API_OPTION);
        const data = await response.json();
        //console.log(data.results);
        const firstFiveMovies = data.results.slice(7, 15);
        dispatch(defaultLoadMovies(firstFiveMovies));
        return firstFiveMovies;
    }

    useEffect(()=>{
        defaultMovies();
    },[])
}

export default useDefaultMovies;