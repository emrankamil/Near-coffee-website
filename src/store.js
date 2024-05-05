import { configureStore } from "@reduxjs/toolkit";
import carouselContentReducer from '../src/features/carousel/carouselContentSlice'
import carouselReducer from '../src/features/carousel/carouselSlice'

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    content: carouselContentReducer
  },
});
