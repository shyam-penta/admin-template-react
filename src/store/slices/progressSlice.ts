import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  value: number;
  visible: boolean;
}

const initialState: ProgressState = {
  value: 0,
  visible: false,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    start: (state) => {
      state.visible = true;
      state.value = 0;
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = Math.min(100, action.payload);
    },
    finish: (state) => {
      state.value = 100;
      state.visible = false;
    },
    reset: (state) => {
      state.value = 0;
      state.visible = false;
    },
  },
});

export const { start, set, finish, reset } = progressSlice.actions;
export default progressSlice.reducer;
