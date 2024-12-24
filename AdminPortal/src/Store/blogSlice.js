// src/Store/blogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  formData: {
    title: "",
    description: "",
    image: null,
  },
  editingIndex: null,
  isFormVisible: false,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { index, updatedBlog } = action.payload;
      state.blogs[index] = updatedBlog;
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((_, index) => index !== action.payload);
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
      state.formData = { title: "", description: "", image: null };
      state.editingIndex = null;
    },
  },
});

export const {
  addBlog,
  updateBlog,
  deleteBlog,
  setBlogs,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
  setFormData,
} = blogSlice.actions;

export default blogSlice.reducer;
