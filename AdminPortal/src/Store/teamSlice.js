import { createSlice } from "@reduxjs/toolkit";

// Initial state for the team
const initialState = {
  members: [],
  isFormVisible: false,
  formData: { name: "", position: "", imgUrl: "" },
  editingIndex: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setFormVisibility: (state, action) => {
      state.isFormVisible = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setEditingIndex: (state, action) => {
      state.editingIndex = action.payload;
    },
    addMember: (state) => {
      const { name, position, imgUrl } = state.formData;
      if (name && position && imgUrl) {
        state.members.push(state.formData);
        state.formData = { name: "", position: "", imgUrl: "" }; // Reset formData
        state.isFormVisible = false;
        state.editingIndex = null;
      }
    },
    updateMember: (state) => {
      if (state.editingIndex !== null) {
        state.members[state.editingIndex] = state.formData;
        state.formData = { name: "", position: "", imgUrl: "" };
        state.isFormVisible = false;
        state.editingIndex = null;
      }
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter((_, i) => i !== action.payload);
    },
  },
});

export const {
  setFormVisibility,
  setFormData,
  setEditingIndex,
  addMember,
  updateMember,
  deleteMember,
} = teamSlice.actions;

export default teamSlice.reducer;
