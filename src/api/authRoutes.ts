import { validateToken } from "../services/auth";
import { apiFetch } from "./methods";

export default {
  login: async (email: string, password: string) => {
    const response = apiFetch
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });

    return response;
  },

  me: async (token: string) => {
    const response = apiFetch
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    validateToken(response);

    return response;
  },
};
