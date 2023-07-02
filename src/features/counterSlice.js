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
    reset: () => initialState,
    multiplyByFour: (state) => {
      state.value *= 4;
    },
    divideByThree: (state) => {
      state.value /= 3;
    },
    exponentByTwo: (state) => {
      state.value **= 2;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  multiplyByFour,
  divideByThree,
  exponentByTwo,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
