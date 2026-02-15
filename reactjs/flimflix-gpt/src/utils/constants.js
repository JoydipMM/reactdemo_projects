export const SITE_LOGO = "/images/flimflix-gpt-logo.svg"
export const SITE_GRAY_LOGO = "/images/flimflix-gpt-gray-logo.svg"
export const TMDB_IMG_PATH = "https://image.tmdb.org/t/p/original";

export const USER_DEFAULT_AVATER = "https://api.dicebear.com/7.x/identicon/svg?seed=atanu"
export const API_BASE_URL = "https://api.themoviedb.org/3";



export const TMDB_API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
  }
};