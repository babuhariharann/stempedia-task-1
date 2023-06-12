import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    addValue: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { addValue } = valueSlice.actions;
export default valueSlice.reducer;
