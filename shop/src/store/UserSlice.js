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
      state[idx].count++;
    },
    deleteStock(state, action) {
      let idx = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(idx, 1);
    },
    addStock(state, action) {
      let idx = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (idx === -1) state.push(action.payload);
      else state[idx].count += Number(action.payload.count);
    },
  },
});
export let { addCount, deleteStock, addStock } = stock.actions;
export default stock;
