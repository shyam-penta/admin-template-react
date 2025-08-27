import axios from "axios";
import { toast } from "react-toastify";

import { store } from "@store/index";
import { logout } from "@store/slices/authSlice";
import { ROUTES } from "@core/routing/routes";
import { navigate } from "@utils/navigate";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

// Injecting authtoken if available
api.interceptors.request.use((config: any) => {
  const state: any = store.getState();
  if (state.auth?.token) {
    config.headers.Authorization = `Bearer ${state.auth.token}`
  }
  return config;
});

// Response interceptor for global error handling
api.interceptors.response.use(
  (response: any) => response.data,
  (error: any) => {
    const status = error?.response?.status;
    if (status === 401) {
      // Optional: clear auth store and localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("auth");
      store.dispatch(logout?.()); // only if using Redux auth
      toast?.error?.("Session expired. Please sign in again.");
      navigate(ROUTES.AUTH.SIGN_IN);
    } else {
      toast.error(error?.response?.data?.message || error?.message || "Something went wrong.");
    }
    return Promise.reject(error);
  }
);

export default api