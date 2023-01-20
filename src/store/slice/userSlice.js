import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'loginInfo',
  initialState: [],
  reducers: {
    addInfo: (state, action) => {
      console.log('action', action.payload);
      const info = {
        login: action.payload.login,
        password: action.payload.password,
      };

      return [...state, info];
    },
  },
});

// this is for dispatch
export const { addInfo } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
