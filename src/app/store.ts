import { configureStore } from '@reduxjs/toolkit';
import { reducer as selectedDateReducer } from '../features/selectedDate';

export const store = configureStore({
  reducer: {
    selectedDate: selectedDateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
