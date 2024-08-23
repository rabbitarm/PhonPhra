import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import itemListSlice from './itemListSlice';
import itemCategorySlice from './itemCategorySlice';
import bookmarkListSlice from './bookmarkListSlice';
import fontSizeSlice from './fontSizeSlice';
import countNumberSlice from './countNumberSlice';
import calendarBuddhismSlice from './calendarBuddhismSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    itemList: itemListSlice,
    itemCategory: itemCategorySlice,
    bookmarkList: bookmarkListSlice,
    fontSize: fontSizeSlice,
    countNumber: countNumberSlice,
    calendarBuddhism: calendarBuddhismSlice,
  },
});

export default store;