import axios from "axios";
import router from "@/router";

axios.defaults.baseURL = "https://kinopoiskapiunofficial.tech/api/";
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const checkTokenFilm = () => {
  if (getCookie("filmApiToken")) {
    axios.defaults.headers["X-API-KEY"] = getCookie("filmApiToken");
    router.push("/");
  } else {
    router.push("/auth");
  }
};

export const setToken = (newToken) => {
  document.cookie = `filmApiToken=${newToken};expires=Tue, 19 Jan 2038 03:14:07 GMT`;
  axios.defaults.headers["X-API-KEY"] = newToken;
};

export const makeRequest = ({
  url = "/",
  method = "get",
  responseType = "json",
  headers = {},
  params = {},
  data = {},
}) =>
  axios({
    url,
    method,
    responseType,
    headers,
    params,
    data,
  });
