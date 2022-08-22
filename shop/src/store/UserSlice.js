import { createSlice } from "@reduxjs/toolkit";

let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let idx = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[idx].count += 1;
    },
    deleteStock(state, action) {
      let idx = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(idx, 1);
    },
  },
});
export let { addCount, deleteStock } = stock.actions;
export default stock;
