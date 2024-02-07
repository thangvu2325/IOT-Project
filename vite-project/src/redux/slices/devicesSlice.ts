import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface DevicesState {}

// Define the initial state using that type
const initialState: DevicesState = {};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
});

// export const {  } = deviceSlice.actions;

export default deviceSlice.reducer;
