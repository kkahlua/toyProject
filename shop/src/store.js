import { configureStore } from "@reduxjs/toolkit";
import stock from "./store/UserSlice";

export default configureStore({
  reducer: {
    stock: stock.reducer,
  },
});
