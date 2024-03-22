import { configureStore } from '@reduxjs/toolkit';
import itemListSlice from './itemListSlice';
import fontSizeSlice from './fontSizeSlice';
import countNumberSlice from './countNumberSlice';

const store = configureStore({
  reducer: {
    itemList: itemListSlice,
    fontSize: fontSizeSlice,
    countNumber: countNumberSlice
  }
});

export default store;