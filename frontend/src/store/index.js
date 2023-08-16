import { configureStore } from "@reduxjs/toolkit";
import { testApiSlice } from "../api/testApiSlice.js";

export const store = configureStore({
  reducer: {
    [testApiSlice.reducerPath]: testApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testApiSlice.middleware),
});
