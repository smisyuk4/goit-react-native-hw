import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  userId: null,
  email: '',
  stateChange: null,
  // password: '',
  // isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      login: payload.login,
      userId: payload.userId,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
  },
});

export const { updateUserProfile } = authSlice.actions;

export default authSlice.reducer;
