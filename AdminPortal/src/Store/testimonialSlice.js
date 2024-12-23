// src/redux/testimonialSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const { index, updatedTestimonial } = action.payload;
      state.testimonials[index] = updatedTestimonial;
    },
    deleteTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { addTestimonial, updateTestimonial, deleteTestimonial } =
  testimonialSlice.actions;

export default testimonialSlice.reducer;
