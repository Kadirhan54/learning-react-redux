import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const clickSlice = createSlice({
  name: "clicker",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementClick: (state) => {
      state.value += 1;
    },
    decrementClick: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementClick, decrementClick } = clickSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectClickCount = (state: RootState) => state.clicker.value;

export default clickSlice.reducer;
