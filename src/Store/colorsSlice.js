const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    storeColors(state, action) {
      return action.payload;
    },
  },
});

export const colorsActions = colorSlice.actions;

export default colorSlice.reducer
