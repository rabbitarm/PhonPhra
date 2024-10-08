import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countNumberInitial: 0,
  countNumberMaximum: 999,
  countNumberIndex: 0
};

const countNumberSlice = createSlice({
  name: 'countNumber',
  initialState,
  reducers: {
    countNumberIncrease: (state) => {
      state.countNumberIndex = state.countNumberIndex < state.countNumberMaximum ? state.countNumberIndex + 1 : state.countNumberIndex;
    },
    countNumberDecrease: (state) => {
      state.countNumberIndex = state.countNumberIndex > 0 ? state.countNumberIndex - 1 : state.countNumberIndex;
    },
    countNumberReset: (state) => {
      state.countNumberIndex = state.countNumberInitial;
    },
    countNumberChange: (state, action) => {
      state.countNumberIndex = action.payload > state.countNumberMaximum ? state.countNumberMaximum : action.payload;
    }
  }
});

export const { countNumberIncrease, countNumberDecrease, countNumberReset, countNumberChange } = countNumberSlice.actions;
export default countNumberSlice.reducer;