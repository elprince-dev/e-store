//Vercel Code

"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon, ShoppingCartIcon, TrashIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Test() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Earbuds", price: 79.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Smartphone Case", price: 24.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Portable Charger", price: 49.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  ])

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Fixed shipping cost
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
           {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
               <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
               <div className="ml-4 flex-grow">
                 <h2 className="text-lg font-semibold">{item.name}</h2>
                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
                 <div className="flex items-center mt-2">
                   <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                     <MinusIcon className="h-4 w-4" />
                   </Button>
                   <span className="mx-2 w-8 text-center">{item.quantity}</span>
                   <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                     <PlusIcon className="h-4 w-4" />
                   </Button>
                   <Button variant="ghost" size="icon" className="ml-4 text-red-500" onClick={() => removeItem(item.id)}>
                     <TrashIcon className="h-4 w-4" />
                   </Button>
                 </div>
               </div>
               <div className="text-right">
                 <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
               </div>
             </div>
           ))}
         </div>
         <div className="md:col-span-1">
           <div className="bg-gray-50 rounded-lg p-6">
             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
             <div className="flex justify-between mb-2">
               <span>Subtotal</span>
               <span>${subtotal.toFixed(2)}</span>
             </div>
             <div className="flex justify-between mb-2">
               <span>Shipping</span>
               <span>${shipping.toFixed(2)}</span>
             </div>
             <div className="border-t border-gray-200 mt-4 pt-4">
               <div className="flex justify-between">
                 <span className="font-semibold">Total</span>
                 <span className="font-semibold">${total.toFixed(2)}</span>
               </div>
             </div>
             <Button className="w-full mt-6">
               <ShoppingCartIcon className="mr-2 h-4 w-4" /> Proceed to Checkout
             </Button>
           </div>
        </div>
      </div>
    </div>
  )
}