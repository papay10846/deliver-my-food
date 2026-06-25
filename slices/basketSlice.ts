import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { dish } from 'screens/types';

export interface CounterState {
  items: dish[];
}

const initialState: CounterState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id)
      const prevState = [...state.items];
      if (index >= 0) {
        // item exists in the basket, remove it
        prevState.splice(index, 1);
      }
      state.items = prevState;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: { basket: CounterState }) => state.basket.items;

export const selectBasketItemsById = (state: { basket: CounterState }, id: string) =>
  state.basket.items.filter((item) => item._id === id);

export const selectBasketTotal = (state: { basket: CounterState }) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
