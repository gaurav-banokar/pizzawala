import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    tomatoPizza: {
      quantity: 1,
      price: 200
    },
    vegMasalaPizza: {
      quantity: 1,
      price: 250
    },
    spicyPizza: {
      quantity: 1,
      price: 300
    }
  },

  subTotal: 200 + 250 + 300,
  tax: (200 + 250 + 300) * 0.18,
  shippingCharges: 200,
  total: (200 + 250 + 300) + (200 + 250 + 300) * 0.18 + 200,
  shippingInfo: {},
}

export const cartReducer = createReducer(initialState,
  {
    tomatoPizzaIncrement: (state) => {
      state.cartItems.tomatoPizza.quantity += 1;
    },
    vegMasalaPizzaIncrement: (state) => {
      state.cartItems.vegMasalaPizza.quantity += 1;
    },
    spicyPizzaIncrement: (state) => {
      state.cartItems.spicyPizza.quantity += 1;
    },
    tomatoPizzaDecrement: (state) => {
      state.cartItems.tomatoPizza.quantity -= 1;
    },
    vegMasalaPizzaDecrement: (state) => {
      state.cartItems.vegMasalaPizza.quantity -= 1;
    },
    spicyPizzaDecrement: (state) => {
      state.cartItems.spicyPizza.quantity -= 1;
    },

    calculatePrice: (state) => {

      state.subTotal =
        state.subTotal =
        state.cartItems.tomatoPizza.price *
        state.cartItems.tomatoPizza.quantity +
        state.cartItems.vegMasalaPizza.price *
        state.cartItems.vegMasalaPizza.quantity +
        state.cartItems.spicyPizza.price *
        state.cartItems.spicyPizza.quantity;

      state.tax = state.subTotal * 0.18;
      state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
      state.total = state.subTotal + state.tax + state.shippingCharges;
    },

    tomatoPizzaZeroState: (state) => {
      state.cartItems.tomatoPizza.quantity = 0;
      state.cartItems.tomatoPizza.price = 0;

    },
    vegMasalaPizzaZeroState:(state) => {
      state.cartItems.vegMasalaPizza.quantity = 0;
      state.cartItems.vegMasalaPizza.price = 0;
    },
    spicyPizzaZeroState:(state) => {
      state.cartItems.spicyPizza.quantity = 0;
      state.cartItems.spicyPizza.price = 0;
    },

    emptyState: (state) => {
      state.cartItems = {
        tomatoPizza: {
          quantity: 0,
          price: 0,
        },
        vegMasalaPizza: {
          quantity: 0,
          price: 0,
        },
        spicyPizza: {
          quantity: 0,
          price: 0,
        },
      };

      state.subTotal = 0;
      state.shippingCharges = 0;
      state.tax = 0;
      state.total = 0;
    },

    addShippingInfo: (state, action) => {
      state.shippingInfo = {
        hNo: action.payload.hNo,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
        pinCode: action.payload.pinCode,
        phoneNo: action.payload.phoneNo,
      };
    },
  }
)
