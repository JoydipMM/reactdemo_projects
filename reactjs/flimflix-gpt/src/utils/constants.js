export const USER_DEFAULT_AVATER = "https://api.dicebear.com/7.x/identicon/svg?seed=atanu"
export const API_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMG_PATH = "https://image.tmdb.org/t/p/original";

export const TMDB_LANGUAGES = [
  { iso_639_1: "en", english_name: "English", name: "English" },
  { iso_639_1: "hi", english_name: "Hindi", name: "हिन्दी" },
  { iso_639_1: "bn", english_name: "Bengali", name: "বাংলা" },
  { iso_639_1: "ta", english_name: "Tamil", name: "தமிழ்" },
  { iso_639_1: "te", english_name: "Telugu", name: "తెలుగు" },
  { iso_639_1: "mr", english_name: "Marathi", name: "मराठी" },
  { iso_639_1: "gu", english_name: "Gujarati", name: "ગુજરાતી" },
  { iso_639_1: "pa", english_name: "Punjabi", name: "ਪੰਜਾਬੀ" },
  { iso_639_1: "ur", english_name: "Urdu", name: "اردو" },
  { iso_639_1: "kn", english_name: "Kannada", name: "ಕನ್ನಡ" },
  { iso_639_1: "ml", english_name: "Malayalam", name: "മലയാളം" },
  { iso_639_1: "or", english_name: "Odia", name: "ଓଡ଼ିଆ" },
  { iso_639_1: "as", english_name: "Assamese", name: "অসমীয়া" },
  { iso_639_1: "ne", english_name: "Nepali", name: "नेपाली" },
  { iso_639_1: "ar", english_name: "Arabic", name: "العربية" },
  { iso_639_1: "fr", english_name: "French", name: "Français" },
  { iso_639_1: "de", english_name: "German", name: "Deutsch" },
  { iso_639_1: "es", english_name: "Spanish", name: "Español" },
  { iso_639_1: "it", english_name: "Italian", name: "Italiano" },
  { iso_639_1: "ru", english_name: "Russian", name: "Pусский" },
  { iso_639_1: "ja", english_name: "Japanese", name: "日本語" },
  { iso_639_1: "ko", english_name: "Korean", name: "한국어/조선말" },
  { iso_639_1: "zh", english_name: "Chinese", name: "中文" },
  { iso_639_1: "pt", english_name: "Portuguese", name: "Português" },
  { iso_639_1: "tr", english_name: "Turkish", name: "Türkçe" },
];

export const TMDB_API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`
  }
};