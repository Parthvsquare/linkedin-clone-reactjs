import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
      user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.value= null;
    },
  },
});

export const {login, logout } = userSlice.actions;

//selectors
export const selectUser= (state) => state.user.value;


export default userSlice.reducer;