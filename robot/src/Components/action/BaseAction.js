import axios from "axios";
const CancelToken = axios.CancelToken;
let cancel;
let urlForCancel;
//axios.defaults.withCredentials = false;

export const API_URL = "http://localhost:5000";
export function post(url, params, extraParam = {}) {
  cancel && urlForCancel === url && cancel();

  return axios
    .post(url, params, {
      cancelToken: new CancelToken(function executor(c) {
        urlForCancel = url;
        cancel = c;
      }),
      ...extraParam,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function get(url, params) {
  return axios
    .get(url, params)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
}

export function put(url, params) {
  return axios
    .put(url, params)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

export function remove(url, params) {
  return axios
    .delete(url, { data: params })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}
