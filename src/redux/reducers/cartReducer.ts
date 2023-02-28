import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ItemType from "../../types/ItemType";

interface cartState {
  products: ItemType[];
}

const initialState: cartState = {
  products: [],
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ItemType>) => {
      let id = action.payload.id;
      let index = state.products.findIndex((item) => item.id === id);

      if (index >= 0) {
        state.products[index].qt += action.payload.qt;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addProduct } = slice.actions;
export default slice.reducer;
