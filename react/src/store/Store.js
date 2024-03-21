import { configureStore } from '@reduxjs/toolkit';
import itemListSlice from './itemListSlice';
import itemNumberSlice from './itemNumberSlice';
import fontSlice from './fontSlice';
import countSlice from './countSlice';

const store = configureStore({
  reducer: {
    itemList: itemListSlice,
    itemNumber: itemNumberSlice,
    fontSize: fontSlice,
    countNumber: countSlice
  }
});

export default store;