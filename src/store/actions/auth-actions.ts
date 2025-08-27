import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@services/api";


export const authLogin = createAsyncThunk("authLogin", async (credentials: { email: string; password: string }) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
});
