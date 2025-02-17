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
            if (existingItem) {
                // existingItem.quantity += action.payload.quantity
                Swal.fire({
                    title: "Product already in cart",
                    // text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                })
            } else {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;