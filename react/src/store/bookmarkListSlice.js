import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { bookmarkApi } from '../api/bookmarkApi';

const initialState = {
  bookmarkList: [],
  bookmarkLoading: false,
  bookmarkError: null
};

export const bookmarkFetch = createAsyncThunk('bookmarkList/bookmarkFetch', async () => {
  const response = await axios.get(`${bookmarkApi}/list`);
  return response.data;
});
export const bookmarkCreate = createAsyncThunk('bookmarkList/bookmarkCreate', async (bookmarkCreateTitle) => {
  const response = await axios.post(`${bookmarkApi}/create`, bookmarkCreateTitle);
  return response.data;
});
export const bookmarkEdit = createAsyncThunk('bookmarkList/bookmarkEdit', async (bookmarkEditContent) => {
  const response = await axios.put(`${bookmarkApi}/edit/${bookmarkEditContent?.bookmark_id}`, bookmarkEditContent);
  return response.data;
});
export const bookmarkDelete = createAsyncThunk('bookmarkList/bookmarkDelete', async (bookmarkSelectId) => {
  await axios.delete(`${bookmarkApi}/delete/${bookmarkSelectId}`);
  return bookmarkSelectId;
});

const bookmarkSlice = createSlice({
  name: 'bookmarkList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookmarkFetch.pending, (state) => {
        state.bookmarkLoading = true;
        state.bookmarkError = null;
      })
      .addCase(bookmarkFetch.fulfilled, (state, action) => {
        state.bookmarkLoading = false;
        state.bookmarkList = action.payload;
      })
      .addCase(bookmarkFetch.rejected, (state, action) => {
        state.bookmarkLoading = false;
        state.bookmarkError = action.error.message;
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