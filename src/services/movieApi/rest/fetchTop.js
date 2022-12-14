import { makeRequest } from "../index";

export const fetchTop = (params) =>
  makeRequest({
    url: "v2.2/films/top",
    params,
  });

export const fetchFilm = (id) =>
  makeRequest({
    url: `v2.2/films/${id}`,
  });

export const fetchFilmFilter = (params) =>
  makeRequest({
    url: "v2.2/films/",
    params,
  });

export const findFilm = (keyword) =>
  makeRequest({
    url: "v2.1/films/search-by-keyword",
    method: "GET",
    params: {
      keyword,
    },
  });

export const fecthFiltersInfo = () =>
  makeRequest({
    url: "v2.2/films/filters",
    method: "GET",
  });

export const fetchPremiers = (params) =>
  makeRequest({
    url: "v2.2/films/premieres",
    method: "GET",
    params,
  });
