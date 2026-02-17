import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadGenres } from "../store/moviesSlice";
import { API_BASE_URL, TMDB_API_OPTION } from "../utils/constants";

const useGenres = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/genre/movie/list?language=en`,
          TMDB_API_OPTION
        );

        const data = await response.json();
        dispatch(loadGenres(data.genres));
        setGenres(data.genres);
      } catch (error) {
        console.log("Genre API Error:", error);
      }
    };

    fetchGenres();
  }, []);

  const getGenreName = (id) => {
    const genreObj = genres.find((g) => g.id === id);
    return genreObj ? genreObj.name : "";
  };

  return { genres, getGenreName };
};

export default useGenres;