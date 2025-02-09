import Link from "next/link"
import { HiOutlineUser } from "react-icons/hi";
import Search from "./Search";
import MenuIcon from "./MenuIcon";
import UserIcon from "./UserIcon";
import HeartButton from "./HeartButton";
import ShoppingCart from "./ShoppingCart";



const Navbar = () => {

    

    const currentUser = true;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* left side */}
            <section className="flex items-center md:gap-16 gap-4">
                {/* Menu icon */}
                < MenuIcon />
                {/* Search input */}
                <Search />
            </section>
            
            {/* right side */}
            <section className="relative flex items-center md:space-x-3 space-x-2"> 

                {/* User icon */}
                {currentUser ?
                <UserIcon currentUser = {currentUser}/> : 
                <Link href="/login" className="hidden sm:block" >
                    <HiOutlineUser className="size-6" />
                </Link>
                }
                
                {/* Heart icon */}
                <HeartButton />
                {/* Cart icon */}
                <ShoppingCart />
            </section>
        </nav>
    </header>
  )
}

export default Navbar