import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    cartSlice,
  },
});
