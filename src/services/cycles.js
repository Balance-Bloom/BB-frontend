import { apiClient } from "./config";

export const apiAddCycle = async (payload) => {
  return apiClient.post("/period", payload);
};

export const apiGetCycle = async () => {
  return apiClient.get("/nextperiod");
};
