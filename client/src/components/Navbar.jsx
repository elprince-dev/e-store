import Link from "next/link"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Image from "next/image";



const Navbar = () => {

    const currentUser = true;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* left side */}
            <section className="flex items-center md:gap-16 gap-4">

                <Link href="/" className="size-6" legacyBehavior>
                    <HiMiniBars3CenterLeft />
                </Link>

                {/* Search input */}
                <section className="relative w-72 space-x-2">
                    <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
                    <input type="text" placeholder="Search" 
                    className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" 
                    />
                </section>
            </section>
            

            {/* right side */}
            <section className="relative flex items-center md:space-x-3 space-x-2"> 

                {currentUser ? 
                 <button>
                    <Image src="/avatar.png" alt="avatar" width={30} height={30} className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ""}`} />
                 </button>
                 : 
                <Link href="/login" className="hidden sm:block" legacyBehavior>
                    <HiOutlineUser className="size-6" />
                </Link>
                }
                <button className="">
                    <RiHeartLine className="size-6" />
                </button>
                <Link href='/cart' className="" legacyBehavior>
                <section className="flex items-center bg-primary p-1 px-2 rounded-md  sm:px-4 cursor-pointer">
                    <HiOutlineShoppingCart />
                    <span className="text-sm font-semibold sm:ml-1">0</span>
                </section>
                    
                </Link>
            </section>
        </nav>
    </header>
  )
}

export default Navbar