import { config } from "@/config";
import axios from "axios";

export const createAxios = (token: string) => {
  const newInstance = axios.create({
    baseURL: config.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  return newInstance;
};
