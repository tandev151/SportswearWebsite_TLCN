import axios from "axios";
// import store from "../app/store";

const api = "https://api-sportswear.herokuapp.com/api";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: { Authorization: token ? `Bearer ${token}` : "" },
});

axiosInstance.interceptors.request.use((req) => {
  // const { auth } = store.getState();
  if (token) {
    req.headers.Authorization = `Bearer ${token}}`;
  }
  return req;
}, function error() {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
