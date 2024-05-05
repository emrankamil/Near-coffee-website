import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Option 1",
    subtitle: "Subtitle for Option 1",
    image: "image1.jpg",
  },
  {
    title: "Option 2",
    subtitle: "Subtitle for Option 2",
    image: "image2.jpg",
  },
  {
    title: "Option 3",
    subtitle: "Subtitle for Option 3",
    image: "image3.jpg",
  },
];


export const carouselContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
  },
});

export default carouselContentSlice.reducer;
