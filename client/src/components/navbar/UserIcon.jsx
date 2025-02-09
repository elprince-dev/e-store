'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserIcon = ({currentUser}) => {
    const [isDroppedDownOpen, setIsDroppedDownOpen] = useState(false);
    const navigation = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Orders', href: '/orders' },
        { name: 'Cart', href: '/cart' },
        { name: 'Checkout', href: '/checkout' },
    ]

  return (  
    <>
        <button onClick={() => setIsDroppedDownOpen(!isDroppedDownOpen)}>
        <Image src="/avatar.png" alt="avatar" width={30} height={30} className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ""}`} />
        </button>
        {/* show dropdown menu */}
        { isDroppedDownOpen && (
            <section className="absolute right-0 top-7 bg-white mt-2 w-36  shadow-lg rounded-md z-40">
                <ul className="py-2">
                    {navigation.map((item) => (
                        <li 
                        key={item.href} 
                        onClick={() => setIsDroppedDownOpen(false)}
                        >
                            <Link href={item.href} className="block py-2 px-4 hover:bg-gray-100 text-sm" >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        )}
    </>
  )
}

export default UserIcon