import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  dataLength: 0,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setDataLength: (state, action) => {
      state.dataLength = action.payload;
    },
    nextSlide: (state) => {
      state.value = (state.value + 1) % state.dataLength;
    },
    prevSlide: (state) => {
      state.value = (state.value === 0 ? (state.dataLength-1):(state.value - 1)) ;
    },
    setSlide: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setDataLength, nextSlide, prevSlide } = carouselSlice.actions;

export default carouselSlice.reducer;
