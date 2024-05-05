import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'bright',
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.value = 'dark';
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
