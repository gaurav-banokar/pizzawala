import { configureStore } from "@reduxjs/toolkit";

import { createItemReducer } from "../redux/reducers/itemReducers"
import { cartReducer } from "../redux/reducers/cartReducers"
import { orderReducer } from "./reducers/orderReducers"
import { authReducer } from "./reducers/userReducers";

const store = configureStore({
    reducer: {
        item: createItemReducer,
        cart: cartReducer,
        order: orderReducer,
        auth: authReducer,

    }
})
export default store;

export const server = "http://localhost:4000/api/v1";