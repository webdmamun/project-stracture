import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
};

const instance: AxiosInstance = axios.create(axiosConfig);
instance.get("/product").then((res) => res.data);
