/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventI } from '../types/Event';

const initialState: EventI[] = [];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    set: (events, action: PayloadAction<EventI[]>) => {
      events = action.payload;

      return events;
    },
    add: (events, action: PayloadAction<EventI>) => {
      const doesEventExist = events.some(({ id }) => id === action.payload.id);

      if (doesEventExist) {
        events = events.map(event => (
          event.id === action.payload.id ? action.payload : event
        ));
      } else {
        events.push(action.payload);
      }
    },
    remove: (events, action: PayloadAction<number>)  => {
      events = events.filter(({ id }) => id !== action.payload);
    }
  },
});

export const { actions } = eventsSlice;
export const { reducer } = eventsSlice;
