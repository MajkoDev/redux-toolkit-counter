import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => initialState,
    multiplyByFour: (state) => {
      state.value *= 4;
    },
    divideByThree: (state) => {
      state.value /= 3;
    },
    exponentByTwo: (state) => {
      state.value **= 2;
    }
  },
});

export const {
  increment,
  decrement,
  reset,
  multiplyByFour,
  divideByThree,
  exponentByTwo
} = counterSlice.actions;

export default counterSlice.reducer;
