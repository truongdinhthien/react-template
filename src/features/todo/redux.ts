import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {},
  reducers: {},
});

export const todoReducer = todoSlice.reducer;
