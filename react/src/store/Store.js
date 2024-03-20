import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import itemNumberSlice from './itemNumberSlice';
import fontSlice from './fontSlice';
import countSlice from './countSlice';

const store = configureStore({
  reducer: {
    itemList: itemSlice,
    itemNumber: itemNumberSlice,
    fontSize: fontSlice,
    countNumber: countSlice
  }
});

export default store;