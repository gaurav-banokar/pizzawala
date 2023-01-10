import { createReducer } from "@reduxjs/toolkit";


export const createItemReducer = createReducer({}, {

    createItemRequest:(state) => {
        state.loading = true;
    },

    createItemSuccess:(state,action) => {
        state.loading = false;
        state.item = action.payload;
    },

    createItemFail:(state,action) => {
        state.loading = false;
        state.error = action.payload;
    }
});
