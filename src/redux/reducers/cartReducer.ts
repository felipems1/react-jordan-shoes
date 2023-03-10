import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
    AddProduct: (state, action: PayloadAction<ItemType>) => {
      let id = action.payload.id;
      let index = state.products.findIndex((item) => item.id === id);

      if (index >= 0) {
        toast.info("Esse produto ja foi adicionado!");
        return;
      } else {
        state.products.push(action.payload);
        toast.success("Produto adicionado!");
      }
    },
    ChangeProduct: (
      state,
      action: PayloadAction<{ key: number; type: string }>
    ) => {
      if (state.products[action.payload.key]) {
        switch (action.payload.type) {
          case "-":
            state.products[action.payload.key].qt--;

            if (state.products[action.payload.key].qt <= 0) {
              state.products = state.products.filter(
                (item, index) => index !== action.payload.key
              );
            }
            break;
          case "+":
            state.products[action.payload.key].qt++;
            break;
        }
      }
    },
    Finish: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { AddProduct, ChangeProduct, Finish } = slice.actions;
export default slice.reducer;
