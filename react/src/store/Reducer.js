import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const itemSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload
    }
  }
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;