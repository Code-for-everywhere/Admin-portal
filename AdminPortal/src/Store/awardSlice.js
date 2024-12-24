// src/redux/awardSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  awards: [],
  formData : {
    title : "",
    description : "",
    image : null,
  },
  editingIndex : null,
  isFormVisible:false,

};

const awardSlice = createSlice({
  name: "awards",
  initialState,
  reducers: {
    setAwards : (state,action) => {
      state.awards = action.payload;
    },
    addAward: (state, action) => {
      state.awards.push(action.payload);
    },
    updateAward: (state, action) => {
      const { index, updatedAward } = action.payload;
      state.awards[index] = updatedAward;
    },
    deleteAward: (state, action) => {
      state.awards = state.awards.filter((_, index) => index !== action.payload);
    },
    setFormData : (state , action) => {
      state.formData = action.payload;
    },
    setEditingIndex : (state,action) => {
      state.editingIndex = action.payload;
    },
    toggleFormVisibility : (state) => {
      state.isFormVisible = !state.isFormVisible;
    },
    resetForm : (state) => {
      state.formData = { title: "",description : "",image:null}
      state.editingIndex = null;
    }

  },
});

export const { setAwards,setFormData,setEditingIndex,toggleFormVisibility,resetForm, addAward, updateAward, deleteAward } = awardSlice.actions;

export default awardSlice.reducer;
