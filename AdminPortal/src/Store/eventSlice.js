// src/Store/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  formData : {
    eventName : "",
    image : null,
  },
  editingIndex : null,
  isFormVisible : false,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents : (state,action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action) => {
      const { index, updatedEvent } = action.payload;
      state.events[index] = updatedEvent;
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((_, i) => i !== action.payload);
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
      state.formData = { eventName: "", image: null };
      state.editingIndex = null;
    },
  },
});

export const { addEvent, updateEvent, deleteEvent, setEvents , setEditingIndex ,toggleFormVisibility,resetForm,setFormData} = eventSlice.actions;

export default eventSlice.reducer;
