import axios from "./axios";

const authAPI = {
  login: (user) => {
    const url = "/signin";
    return axios.post(url, user);
  },
  register: (user) => {
    const url = "/signup";
    return axios.post(url, user);
  },
  logout: () => {
    const url = "/signout";
    return axios.post(url);
  },
};
export default authAPI;
