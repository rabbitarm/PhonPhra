import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countInitial: 0,
  countMaximum: 999,
  countIndex: 0
};

const countSlice = createSlice({
  name: 'countNumber',
  initialState,
  reducers: {
    countIncrease: (state) => {
      state.countIndex = state.countIndex < state.countMaximum ? state.countIndex + 1 : state.countIndex;
    },
    countDecrease: (state) => {
      state.countIndex = state.countIndex > 0 ? state.countIndex - 1 : state.countIndex;
    },
    countReset: (state) => {
      state.countIndex = state.countInitial;
    }
  }
});

export const { countIncrease, countDecrease, countReset } = countSlice.actions;
export default countSlice.reducer;