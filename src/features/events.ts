/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventI } from '../types/Event';

type eventsState = {
  events: EventI[],
  selectedEvent: EventI | null,
};

const initialState: eventsState = {
  events: [],
  selectedEvent: null
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventI[]>) => {
      state.events = action.payload;

      return state;
    },
    setSelectedEvent: (state, action: PayloadAction<EventI>) => {
      state.selectedEvent = action.payload;

      return state;
    },
    resetSelectedEvent: (state) => {
      state.selectedEvent = null;

      return state;
    },
    add: (state, action: PayloadAction<EventI>) => {
      const isUpdating = state.selectedEvent?.id === action.payload.id;
     

      if (isUpdating) {
        state.events = state.events.map(event => (
          event.id === state.selectedEvent?.id ? action.payload : event
        ));
      } else {
        state.events.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>)  => {
      state.events = state.events.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { actions } = eventsSlice;
export const { reducer } = eventsSlice;
