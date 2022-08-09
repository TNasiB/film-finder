import { makeRequest } from "../index";

export const fetchTop = (data) =>
  makeRequest({
    url: "v2.2/films/top",
    params: { ...data },
  });

export const fetchFilm = (id) =>
  makeRequest({
    url: `v2.2/films/${id}`,
  });

export const findFilm = (keyword) =>
  makeRequest({
    url: "v2.1/films/search-by-keyword",
    method: "GET",
    params: {
      keyword,
    },
  });
