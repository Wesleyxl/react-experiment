import axios from "axios";

import { BASE_URL } from "../env";
import { getToken } from "../services/auth";

const token = getToken();
export const apiFetch = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
