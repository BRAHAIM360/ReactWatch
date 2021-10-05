// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '708c3f2bb4c20dfda00a1c1b854a2315';
const lang = 'fr';
const Youtube_key="AIzaSyB4jMalGQtPGIYvZ5sZO65J2IbTi8MEaOE"
const Youtub_url = 'https://www.googleapis.com/youtube/v3/';
// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  lang,
  Youtube_key,
  Youtub_url
}