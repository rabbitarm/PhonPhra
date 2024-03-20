import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemNumberLast: 999,
  itemNumberIndex: 1,
  itemNumberJumpIndex: ''
};

const itemNumberSlice = createSlice({
  name: 'itemNumber',
  initialState,
  reducers: {
    itemNumberPrev: (state) => {
      state.itemNumberIndex = state.itemNumberIndex > 1 ? state.itemNumberIndex - 1 : state.itemNumberIndex;
    },
    itemNumberNext: (state) => {
      state.itemNumberIndex = state.itemNumberIndex < state.itemNumberLast ? state.itemNumberIndex + 1 : state.itemNumberIndex;
    },
    itemNumberJumpChange: (state, action) => {
      state.itemNumberJumpIndex = parseInt(action.payload);
    },
    itemNumberJump: (state, action) => {
      state.itemNumberIndex = parseInt(action.payload);
    }
  },
});

export const { itemNumberPrev, itemNumberNext, itemNumberJumpChange, itemNumberJump } = itemNumberSlice.actions;
export default itemNumberSlice.reducer;