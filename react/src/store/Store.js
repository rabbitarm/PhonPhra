import { configureStore } from '@reduxjs/toolkit';
import itemListSlice from './itemListSlice';
import bookmarkListSlice from './bookmarkListSlice';
import fontSizeSlice from './fontSizeSlice';
import countNumberSlice from './countNumberSlice';

const store = configureStore({
  reducer: {
    itemList: itemListSlice,
    bookmarkList: bookmarkListSlice,
    fontSize: fontSizeSlice,
    countNumber: countNumberSlice
  }
});

export default store;