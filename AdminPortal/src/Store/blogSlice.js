// src/Store/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
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
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
