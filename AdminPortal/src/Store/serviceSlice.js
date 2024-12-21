import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  formData: {
    title: '',
    description: '',
    image: null,
  },
  editingIndex: null,
  isFormVisible: false,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const { index, updatedItem } = action.payload;
      state.items[index] = updatedItem;
    },
    deleteItem: (state, action) => {
      const index = action.payload;
      state.items = state.items.filter((_, i) => i !== index);
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
      state.formData = { title: '', description: '', image: null };
      state.editingIndex = null;
    },
  },
});

export const {
  setItems,
  addItem,
  updateItem,
  deleteItem,
  setFormData,
  setEditingIndex,
  toggleFormVisibility,
  resetForm,
} = serviceSlice.actions;

export default serviceSlice.reducer;
