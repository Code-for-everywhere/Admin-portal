import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  galleryItems: {
    festival: [],
    event: [],
    hackathon: [],
  },
  formData: {
    image: null,
    type: null, // Determines if it's festival, event, or hackathon
  },
  editingIndex: null,
  isFormVisible: false,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGalleryItems: (state, action) => {
      const { type, items } = action.payload;
      state.galleryItems[type] = items;
    },
    addGalleryItem: (state, action) => {
      const { type, item } = action.payload;
      state.galleryItems[type].push(item);
    },
    updateGalleryItem: (state, action) => {
      const { type, index, updatedItem } = action.payload;
      state.galleryItems[type][index] = updatedItem;
    },
    deleteGalleryItem: (state, action) => {
      const { type, index } = action.payload;
      state.galleryItems[type] = state.galleryItems[type].filter((_, i) => i !== index);
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
      state.formData = { video: null, type: null };
    },
  },
});

export const {
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  setGalleryItems,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
  setFormData,
} = gallerySlice.actions;

export default gallerySlice.reducer;
