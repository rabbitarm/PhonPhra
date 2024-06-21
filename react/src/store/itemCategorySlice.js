import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemCategoryApi } from '../api/itemApi';

const initialState = {
  itemCategoryList: [],
  itemCategoryLoading: false,
  itemCategoryError: null
};

export const itemCategoryFetch = createAsyncThunk('itemCategoryList/itemCategoryFetch', async () => {
  const response = await axios.get(`${itemCategoryApi}/list`);
  return response.data;
});
export const itemCategoryCreate = createAsyncThunk('itemCategoryList/itemCategoryCreate', async (itemCategoryCreateTitle) => {
  const response = await axios.post(`${itemCategoryApi}/create`, itemCategoryCreateTitle);
  return response.data;
});
export const itemCategoryEdit = createAsyncThunk('itemCategoryList/itemCategoryEdit', async (itemCategoryFormContent) => {
  const response = await axios.put(`${itemCategoryApi}/edit/${itemCategoryFormContent?.item_category_id}`, itemCategoryFormContent);
  return response.data;
});
export const itemCategoryDelete = createAsyncThunk('itemCategoryList/itemCategoryDelete', async (item_category_id) => {
  await axios.delete(`${itemCategoryApi}/delete/${item_category_id}`);
  return item_category_id;
});

const itemCategorySlice = createSlice({
  name: 'itemCategoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(itemCategoryFetch.pending, (state) => {
        state.itemCategoryLoading = true;
        state.itemCategoryError = null;
      })
      .addCase(itemCategoryFetch.fulfilled, (state, action) => {
        state.itemCategoryLoading = false;
        state.itemCategoryList = action.payload;
      })
      .addCase(itemCategoryFetch.rejected, (state, action) => {
        state.itemCategoryLoading = false;
        state.itemCategoryError = action.error.message;
      })
      .addCase(itemCategoryCreate.fulfilled, (state, action) => {
        state.itemCategoryList.push(action.payload);
      })
      .addCase(itemCategoryEdit.fulfilled, (state, action) => {
        const itemCategoryUpdated = action.payload;
        state.itemCategoryList = state.itemCategoryList.map(itemCategory =>
          itemCategory.item_category_id === itemCategoryUpdated.item_category_id ? itemCategoryUpdated : itemCategory
        );
      })
      .addCase(itemCategoryDelete.fulfilled, (state, action) => {
        state.itemCategoryList = state.itemCategoryList.filter(itemCategory => itemCategory.item_category_id !== action.payload);
      });
  },
});

export default itemCategorySlice.reducer;