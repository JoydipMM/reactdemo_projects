import { useEffect, useState } from "react";
import { API_BASE_URL, TMDB_API_OPTION } from "../utils/constants";

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/genre/movie/list?language=en`,
          TMDB_API_OPTION
        );

        const data = await response.json();
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