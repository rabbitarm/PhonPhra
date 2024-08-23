import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { calendarBuddhismPath } from '../api/calendarApi';

const initialState = {
  calendarBuddhism: [],
  calendarBuddhismDateNext: null,
  calendarBuddhismLoading: false,
  calendarBuddhismError: null,
};

export const calendarBuddhismFetch = createAsyncThunk('calendarBuddhism/calendarBuddhismFetch', async () => {
  const response = await axios.get(`${calendarBuddhismPath}`);
  const dateAll = response.data;

  // Find the next Buddhism day
  const today = new Date();
  const dateNext = dateAll.find(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });

  return { dateAll, dateNext };
});

const calendarBuddhismSlice = createSlice({
  name: 'calendarBuddhism',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(calendarBuddhismFetch.pending, (state) => {
        state.calendarBuddhismLoading = true
        state.calendarBuddhismError = null
      })
      .addCase(calendarBuddhismFetch.fulfilled, (state, action) => {
        state.calendarBuddhismLoading = false
        state.calendarBuddhism = action.payload.dateAll
        state.calendarBuddhismDateNext = action.payload.dateNext
      })
      .addCase(calendarBuddhismFetch.rejected, (state, action) => {
        state.calendarBuddhismLoading = false
        state.calendarBuddhismError = action.error.message
      });
  },
});

export default calendarBuddhismSlice.reducer;