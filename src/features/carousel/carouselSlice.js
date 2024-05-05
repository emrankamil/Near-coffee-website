import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.value = (state.value + 1) % state.carouselDataLength;
    },
    prevSlide: (state) => {
      console.log(state.carouselDataLength)
      state.value = (state.value - 1) % state.carouselDataLength;
    },
  },
});

export const { nextSlide, prevSlide } = carouselSlice.actions;

export default carouselSlice.reducer;
