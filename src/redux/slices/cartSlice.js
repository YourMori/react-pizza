import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem.count > 0) {
        findItem.count--;
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.cartSlice.items;
export const selectItemsById = (id) => (state) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, deleteItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
