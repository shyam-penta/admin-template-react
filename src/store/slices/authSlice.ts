import { STORAGE_KEYS } from "@core/constants/storage-keys";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { decryptTxt, encryptTxt, generateAuthToken } from "@utils/helper";

const storedUser = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
const storedToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
const storedMenu = localStorage.getItem(STORAGE_KEYS.AUTH_MENU);

let parsedUser = null;
let parsedMenu = null;

try {
  parsedUser = storedUser ? JSON.parse(decryptTxt(storedUser)) : null;
} catch (e) {
  parsedUser = null;
}

try {
  parsedMenu = storedMenu ? JSON.parse(decryptTxt(storedMenu)) : null;
} catch (e) {
  parsedMenu = null;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface UserInfo {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  userType?: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
  token: string | null;
  menuList: Array<any>;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: !!(parsedUser && storedToken),
  userInfo: parsedUser,
  menuList: parsedMenu,
  token: storedToken,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    login(state, action: PayloadAction<LoginPayload>) {
      state.menuList = [];
      state.isAuthenticated = true;
      state.token = generateAuthToken(64);
      // Set user info
      state.userInfo = {
        id: 1,
        email: "admin@example.com",
        firstName: "John",
        lastName: "Doe",
        role: "admin"
      };

      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, state.token);
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, encryptTxt(JSON.stringify(state.userInfo)));
    },
    updateUser(state: any, action: PayloadAction<any>) {
      state.userInfo = Object.keys(state.userInfo || {}).reduce((acc, key) => {
        acc[key] = action.payload?.[key] ?? state.userInfo?.[key];
        return acc;
      }, {} as typeof state.userInfo);
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(state.userInfo));
    },
    logout(state) {
      state.token = null;
      state.userInfo = null;
      state.isAuthenticated = false;
      state.loading = false;

      localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.AUTH_MENU);
    },
  }
})

export const { login, logout, updateUser, setLoading } = authSlice.actions;
export default authSlice.reducer;