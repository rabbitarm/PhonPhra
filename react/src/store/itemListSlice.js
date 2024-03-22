import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemApi } from '../api/itemApi';

const initialState = {
  itemList: [],
  loading: false,
  error: null
};

export const itemFetch = createAsyncThunk('itemList/itemFetch', async () => {
  const response = await axios.get(`${itemApi}/list`);
  return response.data;
});
export const itemCreate = createAsyncThunk('itemList/itemCreate', async (itemCreateContent) => {
  const response = await axios.post(`${itemApi}/create`, itemCreateContent);
  return response.data;
});
export const itemEdit = createAsyncThunk('itemList/itemEdit', async (itemData) => {
  const response = await axios.put(`${itemApi}/edit/${itemData?._id}`, itemData);
  return response.data;
});
export const itemDelete = createAsyncThunk('itemList/itemDelete', async (itemId) => {
  await axios.delete(`${itemApi}/delete/${itemId}`);
  return itemId;
});

const itemSlice = createSlice({
  name: 'itemList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(itemFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(itemFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.itemList = action.payload;
      })
      .addCase(itemFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(itemCreate.fulfilled, (state, action) => {
        state.itemList.push(action.payload);
      })
      .addCase(itemEdit.fulfilled, (state, action) => {
        const itemUpdated = action.payload;
        state.itemList = state.itemList.map(item =>
          item._id === itemUpdated._id ? itemUpdated : item
        );
      })
      .addCase(itemDelete.fulfilled, (state, action) => {
        state.itemList = state.itemList.filter(item => item._id !== action.payload);
      });
  },
});

export default itemSlice.reducer;