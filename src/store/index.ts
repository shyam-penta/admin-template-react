import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "@store/slices/common-slices";
import progressReducer from "@store/slices/progressSlice";
import AuthReducer from "@store/slices/authSlice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    progress: progressReducer,
    auth: AuthReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;