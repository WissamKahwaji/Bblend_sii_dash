import brandingSlice from "./brandingSlice";
import colorsSlice from "./colorsSlice";
import logoSlice from "./logoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    colorsSlice: colorsSlice,
    brandingSlice: brandingSlice,
    logoSlice: logoSlice,
  },
});

export default store;
