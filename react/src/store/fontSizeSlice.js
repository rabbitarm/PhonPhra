import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fontSizes: ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'],
  fontSizeIndex: 0,
};

const fontSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    fontSizeIncrease: (state) => {
      state.fontSizeIndex = state.fontSizeIndex < state.fontSizes.length - 1 ? state.fontSizeIndex + 1 : state.fontSizeIndex;
    },
    fontSizeDecrease: (state) => {
      state.fontSizeIndex = state.fontSizeIndex > 0 ? state.fontSizeIndex - 1 : state.fontSizeIndex;
    }
  }
});

export const { fontSizeIncrease, fontSizeDecrease } = fontSlice.actions;
export default fontSlice.reducer;