import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './Reducer';

export default configureStore({
  reducer: {
    itemList: itemSlice
  }
});