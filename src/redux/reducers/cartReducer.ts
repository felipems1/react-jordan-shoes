import { createSlice } from "@reduxjs/toolkit";
import ItemType from "../../types/ItemType";

type cartState = {
  products: ItemType[];
};

interface AddProductAction extends Pick<ItemType, "id"> {}

const initialState: cartState = {
  products: [],
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let id = action.payload.item.id;
      let index = state.products.findIndex((item) => item.id === id);

      if (index >= 0) {
        state.products[index].qt += action.payload.qt;
      } else {
        state.products.push({
          ...action.payload.item,
          qt: action.payload.qt,
        });
      }
    },
  },
});

export const { addProduct } = slice.actions;
export default slice.reducer;
