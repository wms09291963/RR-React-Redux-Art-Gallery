import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  color1: '#ffffff',
  // other properties
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  // reducers and actions
});

export const { darkMode, lightMode } = modeSlice.actions;
export default modeSlice.reducer;
