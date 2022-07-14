import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0aafb95cb1d326545fe8c2b793333e8a",
    language: "ko-kr",
  },
});

export const contentsApi = {
  // 현재상영,방영중
  mNowPlaying: () => api.get("/movie/now_playing"),
  tvOnair: () => api.get("/tv/on_the_air"),
  // 높은평점
  mTopRated: () => api.get("/movie/top_rated"),
  tvTopRated: () => api.get("/tv/top_rated"),
  // 인기
  mPopular: () => api.get("/movie/popular"),
  tvPopular: () => api.get("/tv/popular"),
  //개봉예정
  mUpComming: () => api.get("/movie/upcoming"),
  // 상세
  mDetail: (id) => api.get(`/movie/${id}`),
  tvDetail: (id) => api.get(`/tv/${id}`),
  // 예고편
  mVideo: (id) => api.get(`/movie/${id}/videos`),
  tvVideo: (id) => api.get(`/tv/${id}/videos`),
};
