// common-slice.ts
import { STORAGE_KEYS } from "@core/constants/storage-keys";
import { createSlice } from "@reduxjs/toolkit";

const _isMenuCollapse: boolean = !!localStorage.getItem(STORAGE_KEYS.MENU_COLLAPSE_CLASS) || false;

// Ensure body class is synced with localStorage on startup
if (_isMenuCollapse && !document.body.classList.contains(STORAGE_KEYS.MENU_COLLAPSE_CLASS)) {
  document.body.classList.add(STORAGE_KEYS.MENU_COLLAPSE_CLASS);
}

interface CommonState {
  isMenuCollapse: boolean;
}

const initialState: CommonState = {
  isMenuCollapse: !!_isMenuCollapse,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleLeftMenu(state: CommonState) {
      if (state.isMenuCollapse) {
        document.body.classList.remove(STORAGE_KEYS.MENU_COLLAPSE_CLASS);
        localStorage.removeItem(STORAGE_KEYS.MENU_COLLAPSE_CLASS);
        state.isMenuCollapse = false;
      } else {
        document.body.classList.add(STORAGE_KEYS.MENU_COLLAPSE_CLASS);
        localStorage.setItem(STORAGE_KEYS.MENU_COLLAPSE_CLASS, "true");
        state.isMenuCollapse = true;
      }
    },
  },
});

export const { toggleLeftMenu } = commonSlice.actions;
export default commonSlice.reducer;
