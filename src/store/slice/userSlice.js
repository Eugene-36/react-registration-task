import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'loginInfo',
  initialState: [],
  reducers: {
    addInfo: (state, action) => {
      const info = {
        text: action.payload,
      };

      return [...state, info];
    },
  },
});

// this is for dispatch
export const { addInfo } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
