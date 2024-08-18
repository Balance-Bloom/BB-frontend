import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseUrl,
});

export const getDetails = () => {
  const user = {};

  user.token = localStorage.getItem("accessToken");
  user.firstName = localStorage.getItem("firstName");
  user.lastName = localStorage.getItem("lastName");
  user.username = localStorage.getItem("username");

  return user;
};

export const clearDetails = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("userName");
};

// Interceptor to add token to authorization header for every request
apiClient.interceptors.request.use(
  (config) => {
    // Check if there is a token in localStorage
    const { token } = getDetails();
    if (token) {
      // Set the token in the authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If request error (eg network failure), handle it here
    return Promise.reject(error);
  }
);

// Another interceptor to handle response errors
apiClient.interceptors.response.use(
  (response) => {
    // If a response is received, just return it with unchanged
    return response;
  },
  (error) => {
    // If there is an error in the response (like 401) handle it here
    if (error.response.status === 401) {
      // remove accessToken from local storage
      clearDetails();
      // Handle 401 erroor(eg, logout user and redirect to login page)
      window.location.replace("/login");
    }
    if (error.response.status === 404) {
      toast.error("Not found");
    }
    // return the error so the promise is rejected
    return Promise.reject(error);
  }
);
