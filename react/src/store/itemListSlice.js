import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemApi } from '../api/itemApi';

const initialState = {
  itemList: [],
  itemLoading: false,
  itemError: null,
  pageCurrent: 1,
  pagePerItem: 20,
};

export const itemFetch = createAsyncThunk('itemList/itemFetch', async () => {
  const response = await axios.get(`${itemApi}/list`);
  return response.data;
});
export const itemCreate = createAsyncThunk('itemList/itemCreate', async (itemCreateContent) => {
  const response = await axios.post(`${itemApi}/create`, itemCreateContent);
  return response.data;
});
export const itemEdit = createAsyncThunk('itemList/itemEdit', async (itemEditContent) => {
  const response = await axios.put(`${itemApi}/edit/${itemEditContent?.item_id}`, itemEditContent);
  return response.data;
});
export const itemDelete = createAsyncThunk('itemList/itemDelete', async (itemDeleteNavId) => {
  await axios.delete(`${itemApi}/delete/${itemDeleteNavId}`);
  return itemDeleteNavId;
});

const itemSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {
    setPageCurrent: (state, action) => {
      state.pageCurrent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(itemFetch.pending, (state) => {
        state.itemLoading = true;
        state.itemError = null;
      })
      .addCase(itemFetch.fulfilled, (state, action) => {
        state.itemLoading = false;
        state.itemList = action.payload;
      })
      .addCase(itemFetch.rejected, (state, action) => {
        state.itemLoading = false;
        state.itemError = action.error.message;
      })
      .addCase(itemCreate.fulfilled, (state, action) => {
        state.itemList.push(action.payload);
      })
      .addCase(itemEdit.fulfilled, (state, action) => {
        const itemUpdated = action.payload;
        state.itemList = state.itemList.map(item => item.item_id === itemUpdated.item_id ? itemUpdated : item );
      })
      .addCase(itemDelete.fulfilled, (state, action) => {
        state.itemList = state.itemList.filter(item => item.item_id !== action.payload );
      });
  },
});

export const { setPageCurrent } = itemSlice.actions;
export default itemSlice.reducer;