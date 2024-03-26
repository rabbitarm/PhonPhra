import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { itemApi } from '../api/itemApi';

const initialState = {
  bookmarkList: [],
  loading: false,
  error: null
};

export const bookmarkFetch = createAsyncThunk('bookmarkList/bookmarkFetch', async () => {
  const response = await axios.get(`${itemApi}/list`);
  return response.data;
});
export const bookmarkCreate = createAsyncThunk('bookmarkList/bookmarkCreate', async (bookmarkCreateContent) => {
  const response = await axios.post(`${itemApi}/create`, bookmarkCreateContent);
  return response.data;
});
export const bookmarkEdit = createAsyncThunk('bookmarkList/bookmarkEdit', async (bookmarkEditContent) => {
  const response = await axios.put(`${itemApi}/edit/${bookmarkEditContent?.bookmark_id}`, bookmarkEditContent);
  return response.data;
});
export const bookmarkDelete = createAsyncThunk('bookmarkList/bookmarkDelete', async (bookmarkDeleteNavId) => {
  await axios.delete(`${itemApi}/delete/${bookmarkDeleteNavId}`);
  return bookmarkDeleteNavId;
});

const bookmarkSlice = createSlice({
  name: 'bookmarkList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookmarkFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookmarkFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.bookmarkList = action.payload;
      })
      .addCase(itemFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(bookmarkCreate.fulfilled, (state, action) => {
        state.bookmarkList.push(action.payload);
      })
      .addCase(bookmarkEdit.fulfilled, (state, action) => {
        const bookmarkUpdated = action.payload;
        state.bookmarkList = state.bookmarkList.map(bookmark =>
          bookmark.bookmark_id === bookmarkUpdated.bookmark_id ? bookmarkUpdated : bookmark
        );
      })
      .addCase(bookmarkDelete.fulfilled, (state, action) => {
        state.bookmarkList = state.bookmarkList.filter(bookmark => bookmark.bookmark_id !== action.payload);
      });
  },
});

export default bookmarkSlice.reducer;