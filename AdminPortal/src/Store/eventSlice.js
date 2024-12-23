// src/Store/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
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
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { addEvent, updateEvent, deleteEvent, setEvents } = eventSlice.actions;

export default eventSlice.reducer;
