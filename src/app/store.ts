import { configureStore } from '@reduxjs/toolkit';
import { reducer as eventsReducer } from '../features/events';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
