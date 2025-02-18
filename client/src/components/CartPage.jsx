'use client';
import { clearCart, removeFromCart } from '@/redux/features/cart/cartSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiTrash } from 'react-icons/fi';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.newPrice, 0).toFixed(2);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Cart Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((product) => (
              <li key={product._id} className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={`./books/${product.coverImage}`}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <h2 className="text-md font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg font-medium text-gray-900">${product.newPrice}</p>
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FiTrash className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
        )}

        {/* Cart Summary */}
        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between text-lg font-medium text-gray-800">
            <p>Subtotal</p>
            <p>${totalPrice ? totalPrice : 0}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link
              href="/checkout"
              className="block w-full text-center bg-light-blue-900 text-white py-3 rounded-lg shadow-md hover:bg-light-blue-800 transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-light-blue-900 hover:text-light-blue-800 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

//Vercel Code

// "use client"

// import { useState } from "react"
// import { MinusIcon, PlusIcon, ShoppingCartIcon, TrashIcon } from "lucide-react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Wireless Earbuds", price: 79.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
//     { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
//     { id: 3, name: "Portable Charger", price: 49.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
//   ])

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)))
//   }

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id))
//   }

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const shipping = 10 // Fixed shipping cost
//   const total = subtotal + shipping

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
//               <Image
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.name}
//                 width={100}
//                 height={100}
//                 className="rounded-md"
//               />
//               <div className="ml-4 flex-grow">
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 <div className="flex items-center mt-2">
//                   <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
//                     <MinusIcon className="h-4 w-4" />
//                   </Button>
//                   <span className="mx-2 w-8 text-center">{item.quantity}</span>
//                   <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                     <PlusIcon className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="icon" className="ml-4 text-red-500" onClick={() => removeItem(item.id)}>
//                     <TrashIcon className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="md:col-span-1">
//           <div className="bg-gray-50 rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className="border-t border-gray-200 mt-4 pt-4">
//               <div className="flex justify-between">
//                 <span className="font-semibold">Total</span>
//                 <span className="font-semibold">${total.toFixed(2)}</span>
//               </div>
//             </div>
//             <Button className="w-full mt-6">
//               <ShoppingCartIcon className="mr-2 h-4 w-4" /> Proceed to Checkout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


