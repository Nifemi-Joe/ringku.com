import axios from "axios";
import { appConfig } from "../appConfig.js";

const ApiClient = (others) => {
    const token = others.getState().auth.token;

    //axiosInstance
    const axiosInstance = axios.create({
        baseURL: appConfig.baseURL,
        withCredentials: false,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    });

    //interceptors request
    axiosInstance.interceptors.request.use(
        function (config) {
            config.headers.Authorization = `${token}`;
            return config;
        },
        function (error) {
            console.log("Request Error ===> ", error.message);
            return Promise.reject(error);
        }
    );

    //interceptors response
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log("Response Error ===> ", error.message);
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const BaseService = {
    apiClient: ApiClient,
};
