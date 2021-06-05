import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, setAddress, getUser, uploadAvatar, uploadBanner, updateSettings } from "../action";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: ""
  },
  reducers: {},
  extraReducers: {
    [setAddress.fulfilled]: (state, action) => {
      state.user.address = action.payload[0];
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.tokens.accessToken.token;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.tokens.accessToken.token;
    },
    [uploadAvatar.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [uploadBanner.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [updateSettings.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    
  },
});

export default AuthSlice.reducer;
