import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
