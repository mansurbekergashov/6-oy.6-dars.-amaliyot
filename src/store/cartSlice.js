import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cart: [],
      totalAmount: 0,
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseAmount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decreaseAmount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    },
    calculateTotals: (state) => {
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, curVal) => {
          const { amount, price } = curVal;
          const itemTotal = amount * price;

          acc.totalAmount += amount;
          acc.totalPrice += itemTotal;

          return acc;
        },
        { totalAmount: 0, totalPrice: 0 }
      );
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseAmount,
  decreaseAmount,
  calculateTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
