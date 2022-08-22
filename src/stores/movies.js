import { defineStore } from "pinia";
import {
  fetchTop,
  findFilm,
  fetchFilmFilter,
} from "../services/movieApi/rest/fetchTop";

export const useMovieStore = defineStore("movies", {
  state: () => ({ movies: [] }),
  actions: {
    fetchMovies(page = 1) {
      return fetchTop({
        type: "TOP_250_BEST_FILMS",
        page,
      }).then(({ data }) => (this.movies = [...this.movies, ...data.films]));
    },
    findFilm(keyword) {
      return findFilm(keyword);
    },
    findFilmsByFilter(form) {
      return fetchFilmFilter(form).then(
        ({ data }) => (this.movies = data.items)
      );
    },
  },
});
