import { createSlice } from "@reduxjs/toolkit";

// Initial state for the team
const initialState = {
  members: [],

  formData: {
    name: "",
    position: "",
    image: null,
  },
  editingIndex: null,
  isFormVisible: false,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },

    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    updateMember: (state, action) => {
      const { index, updatedMember } = action.payload;
      state.members[index] = updatedMember;
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter((_, i) => i !== action.payload);
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
  addMember,
  updateMember,
  deleteMember,
  setEditingIndex,
  setMembers,
  toggleFormVisibility,
  resetForm,
  setFormData,
} = teamSlice.actions;

export default teamSlice.reducer;
