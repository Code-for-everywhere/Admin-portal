// src/Store/careerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  careerSubmissions: [],
};

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    addCareerSubmission: (state, action) => {
      state.careerSubmissions.push(action.payload);
    },
    resetCareerForm: (state) => {
      state.careerSubmissions = [];
    },
  },
});

export const { addCareerSubmission, resetCareerForm } = careerSlice.actions;

export default careerSlice.reducer;
