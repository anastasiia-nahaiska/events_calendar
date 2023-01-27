/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const selectedDateSlice = createSlice({
  name: 'selectedDate',
  initialState: new Date(),
  reducers: {
    set: (date, action: PayloadAction<Date>) => {
      date = action.payload;

      return date;
    },
    setNextMonth: (date) => {
      if (date.getMonth() === 11) {
        return new Date(date.getFullYear() + 1, 0, date.getDate());
      } else {
        return new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        );
      }
    },
    setPrevMonth: (date)  => {
      if (date.getMonth() === 0) {
        return date = new Date(date.getFullYear() - 1, 11, date.getDate());
      } else {
        return date = new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          date.getDate()
        );
      }
    }
  },
});

export const { actions } = selectedDateSlice;
export const { reducer } = selectedDateSlice;
