import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import fontSlice from './fontSlice';
import countSlice from './countSlice';

const store = configureStore({
  reducer: {
    itemList: itemSlice,
    fontSize: fontSlice,
    countNumber: countSlice
  }
});

export default store;