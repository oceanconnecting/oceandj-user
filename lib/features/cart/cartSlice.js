import { createSlice } from "@reduxjs/toolkit";

const initialState = { itemList: [], totalQuantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.itemList.push({
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price, // totalPrice is initially the item price
          id: newItem.id,
          quantity: 1,
          images: newItem.images, // Ensure images are added
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const findItem = state.itemList.find((item) => item.id === action.payload.id);
      if (findItem) {
        if (findItem.quantity === 1) {
          state.itemList = state.itemList.filter((item) => item.id !== action.payload.id);
        } else {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
        }
        state.totalQuantity--;
      }
    },
    incrementItem(state, action) {
      const existingItem = state.itemList.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalQuantity++;
      }
    },
    decrementItem(state, action) {
      const existingItem = state.itemList.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemList = state.itemList.filter(item => item.id !== action.payload.id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalQuantity--;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
