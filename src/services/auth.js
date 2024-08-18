import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/register", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/login", payload);
};

export const apiLogout = async () => {
  clearDetails();
};

export const apiCheckUserNameExists = async (username) => {
  return apiClient.get();
};
