import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0aafb95cb1d326545fe8c2b793333e8a",
    language: "ko-kr",
  },
});

export const contentsApi = {
  mNowPlaying: () => api.get("/movie/now_playing"),
  mTopRated: () => api.get("/movie/top_rated"),
  mLatest: () => api.get("/movie/latest"),
  mUpComming: () => api.get("/movie/upcoming"),
  tvOnair: () => api.get("/tv/on_the_air"),
  tvPopular: () => api.get("/tv/popular"),
  tvLatest: () => api.get("/tv/latest"),
};
