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
