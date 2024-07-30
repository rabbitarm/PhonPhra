import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userApi } from '../api/userApi';

const initialState = {
  userProfile: [],
  userLoading: false,
  userError: null,
};

/*
export const userFetch = createAsyncThunk('userProfile/userFetch', async () => {
  const response = await axios.get(`${userApi}/list`);
  return response.data;
});
*/
export const userFetch = createAsyncThunk('userProfile/userFetch', async (userID) => {
  const response = await axios.get(`${userApi}/id/${userID}`);
  return response.data;
});
export const userCreate = createAsyncThunk('userProfile/userCreate', async (userCreate) => {
  const response = await axios.post(`${userApi}/create`, userCreate);
  return response.data;
});
export const userEdit = createAsyncThunk('userProfile/userEdit', async (userProfile) => {
  const response = await axios.put(`${userApi}/edit/${userProfile?.user_id}`, userProfile);
  return response.data;
});
export const userDelete = createAsyncThunk('userProfile/userDelete', async (user_id) => {
  await axios.delete(`${userApi}/delete/${user_id}`);
  return user_id;
});

const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userFetch.pending, (state) => {
        state.userLoading = true;
        state.userError = null;
      })
      .addCase(userFetch.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(userFetch.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.error.message;
      })
      .addCase(userCreate.fulfilled, (state, action) => {
        state.userProfile.push(action.payload);
      })
      .addCase(userEdit.fulfilled, (state, action) => {
        const userUpdated = action.payload;
        state.userProfile = state.userProfile.map(user =>
          user.user_id === userUpdated.user_id ? userUpdated : user
        );
      })
      .addCase(userDelete.fulfilled, (state, action) => {
        state.userProfile = state.userProfile.filter(user => user.user_id !== action.payload);
      });
  },
});

export default userSlice.reducer;