//@ts-ignore
import axios from "axios";
import { apiErrorLog } from "src/api/logger.js"
import { API_BASE_URL } from "src/config"
import { appLocalStorage } from "src/libs";

const progress = new Progress({
  height: 3,
  color: "#62bb46",
})

const api = axios.create({
  baseURL: `${API_BASE_URL}`,
})

api.interceptors.request.use(function (config) {
  const token = appLocalStorage.token
  return config;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(

  async (res) => {
    const response = await progress.promise(res)
    return res.data
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (
        error.response.config.url !== "v1/auth" &&
          error.response.config.url !== "v1/auth/refresh"
      ) {

        appLocalStorage.clearData('token')
        window.location.reload()
      }
    } else {
      apiErrorLog(error)
      throw error
    }
  },
)

export default api
