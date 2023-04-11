import { createSlice } from '@reduxjs/toolkit';
import Data from '../data';

const initialState = {
    Data,
    checkedItems: [], 
    city:"delhi"
};

export const checkoutSlice = createSlice({

    name: 'checkout',

    initialState,

    reducers: {

        addItem: (state, action) => {

            let itemAdded = action.payload.item;

            let index = state.Data.findIndex(item => item.id === itemAdded.id);

            state.Data[index].quantity = action.payload.quantity;

            state.checkedItems = [...state.checkedItems, state.Data[index]];

        },

        removeItem: (state, action) => {

            let itemRemoved = action.payload;

            let index = state.checkedItems.findIndex(item => item.id === itemRemoved.id);

            state.checkedItems.splice(index, 1);

        },

        clearCheckedItems: (state) => {

            state.checkedItems.splice(0, state.checkedItems.length);

        }

    }

});


export const { addItem, removeItem, clearCheckedItems } = checkoutSlice.actions;

export default checkoutSlice.reducer;