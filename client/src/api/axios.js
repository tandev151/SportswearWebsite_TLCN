import axios from "axios";

// const api = "http://ec2-52-91-60-221.compute-1.amazonaws.com/api";
const api = "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: api,
  headers: { "content-type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (req) => {
    const token = window.localStorage.getItem('accessToken')
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  },
  function error() {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    console.log(error)
    const msg = error.response.data?.message
    if (msg === 'Token expired') {
      // console.log('this is case expired token case')
      // this is expired token case
      const config = error.response.config
      //step 1 : retrieve new token from refresh token
      const newAccessToken = await refreshToken()
      if (newAccessToken) {
        config.headers.Authorization = `Bearer ${newAccessToken}`
        //step 2 : store in local storage
        await window.localStorage.setItem('accessToken', newAccessToken)
        //step 3 : resend the request
        return axiosInstance(config)
      } else {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)
const refreshToken = async () => {
  const refreshToken = window.localStorage.getItem('refreshToken')
  if (!refreshToken) {
    return false
  }
  const res = await axiosInstance.post(`${api}/auth/refreshToken`, {
    refreshToken,
  })
  const data = res.data
  const { newAccessToken } = data
  return newAccessToken
}

export default axiosInstance;
