import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Coffee Shop Discovery",
    subtitle:
      "The app allows users to browse through a curated list of nearby coffee shops.",
    image: "../../assets/HomeImg.png",
  },
  {
    title: "Title for Option 2",
    subtitle:
      "The app allows users to browse through a curated list of nearby coffee shops.",
    image: "../../assets/HomeImg.png",
  },
  {
    title: "Title for Option 3",
    subtitle:
      "The app allows users to browse through a curated list of nearby coffee shops.",
    image: "../../assets/HomeImg.png",
  },
];


export const carouselContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
  },
});

export default carouselContentSlice.reducer;
