// src/redux/testimonialSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
  formData : {
    name : "" ,
    video : null,
  },
  editingIndex : null,
  isFormVisible : false,
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setTestimonial: (state,action) => {
      state.testimonials = action.payload;
    },
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
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setEditingIndex: (state, action) => {
      state.editingIndex = action.payload;
    },
    toggleFormVisibility: (state) => {
      state.isFormVisible = !state.isFormVisible;
    },
    resetForm: (state) => {
      state.formData = { name: "", video: null };
      state.editingIndex = null;
    },
  },
});

export const { addTestimonial, updateTestimonial, deleteTestimonial,setTestimonial,setEditingIndex,toggleFormVisibility,resetForm,setFormData } =
  testimonialSlice.actions;

export default testimonialSlice.reducer;
