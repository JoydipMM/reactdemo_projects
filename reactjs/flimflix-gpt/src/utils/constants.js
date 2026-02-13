export const USER_DEFAULT_AVATER = "https://api.dicebear.com/7.x/identicon/svg?seed=atanu"

export const TMDB_API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
  }
};