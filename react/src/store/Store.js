import { configureStore } from '@reduxjs/toolkit';
import itemListSlice from './itemListSlice';
import itemCategorySlice from './itemCategorySlice';
import bookmarkListSlice from './bookmarkListSlice';
import fontSizeSlice from './fontSizeSlice';
import countNumberSlice from './countNumberSlice';

const store = configureStore({
  reducer: {
    itemList: itemListSlice,
    itemCategory: itemCategorySlice,
    bookmarkList: bookmarkListSlice,
    fontSize: fontSizeSlice,
    countNumber: countNumberSlice
  }
});

export default store;