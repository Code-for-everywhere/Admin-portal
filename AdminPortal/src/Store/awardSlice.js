// src/redux/awardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  awards: [],
};

const awardSlice = createSlice({
  name: "awards",
  initialState,
  reducers: {
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
  },
});

export const { addAward, updateAward, deleteAward } = awardSlice.actions;

export default awardSlice.reducer;
