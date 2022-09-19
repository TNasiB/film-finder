import { defineStore } from "pinia";
import {
  fetchTop,
  findFilm,
  fetchFilmFilter,
  fecthFiltersInfo,
} from "../services/movieApi/rest/fetchTop";

export const useMovieStore = defineStore("movies", {
  state: () => ({
    movies: [],
    findedFilms: [],
    genres: [],
    countries: [],
  }),
  actions: {
    fetchMovies(page = 1) {
      return fetchTop({
        type: "TOP_250_BEST_FILMS",
        page,
      }).then(({ data }) => (this.movies = [...this.movies, ...data.films]));
    },
    findFilm(keyword) {
      return findFilm(keyword).then(({ data }) => (this.findedFilms = data.films));
    },
    findFilmsByFilter(form) {
      return fetchFilmFilter(form).then(({ data }) => (this.movies = data.items));
    },
    fetchFilters() {
      return fecthFiltersInfo().then(
        ({ data }) => ([this.genres, this.countries] = [data.genres, data.countries])
      );
    },
  },
});
