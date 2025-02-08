import Link from "next/link"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";


const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* left side */}
            <Link href="/" className="size-6">
                <HiMiniBars3CenterLeft />
            </Link>

            {/* right side */}
            <div> nav items</div>
        </nav>
    </header>
  )
}

export default Navbar