// src/Store/gallerySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  galleryItems: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    addGalleryItem: (state, action) => {
      state.galleryItems.push(action.payload);
    },
    updateGalleryItem: (state, action) => {
      const { index, updatedItem } = action.payload;
      state.galleryItems[index] = updatedItem;
    },
    deleteGalleryItem: (state, action) => {
      state.galleryItems = state.galleryItems.filter((_, i) => i !== action.payload);
    },
    setGalleryItems: (state, action) => {
      state.galleryItems = action.payload;
    },
  },
});

export const { addGalleryItem, updateGalleryItem, deleteGalleryItem, setGalleryItems } = gallerySlice.actions;

export default gallerySlice.reducer;
