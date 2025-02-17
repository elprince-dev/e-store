import { addedToCartAlert, alreadyInCartAlert } from '@/utilities/alerts'
import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [] 
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            //Item is already in cart
            if (existingItem) {
                // existingItem.quantity += action.payload.quantity
                alreadyInCartAlert()
            } else {
                // Add new item to cart
                state.cartItems.push(action.payload)
                addedToCartAlert()
            }
        }
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;