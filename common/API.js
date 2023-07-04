/* eslint-disable no-undef */
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FAUCET_BACKEND_API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// API.interceptors.request.use(
//   (config) => {
//     const accessToken = refreshAPIToken();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`; //accessToken
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// const HandleUnauthorizedError = async () => {
//   const logout = useLogout();
//   logout();
//   return none;
// };

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const accessToken = refreshAPIToken();
    // error.config.headers.Authorization = `Bearer ${accessToken}`;
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      await disconnect();
    }
    return Promise.reject(error);
  }
);

// function refreshAPIToken() {
//   const accessToken = getLocalStorage("accessToken");
//   API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   return accessToken;
// }

// export { refreshAPIToken };
export default API;
