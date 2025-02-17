'use client'
import { useAppSelector } from "@/redux/lib/hooks"
import Link from "next/link"
import { HiOutlineShoppingCart } from "react-icons/hi2"


const ShoppingCart = () => {

  const cartItems = useAppSelector(state => state.cart.cartItems)

  return (
    <Link href='/cart' className="" >
        <section className="flex items-center bg-primary p-1 px-2 rounded-md  sm:px-4 cursor-pointer">
            <HiOutlineShoppingCart />
            {
              
                <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
            }
            {/* // <span className="text-sm font-semibold sm:ml-1">0</span> */}
        </section>
                    
    </Link>
  )
}

export default ShoppingCart