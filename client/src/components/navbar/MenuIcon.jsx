import Link from "next/link"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"

const MenuIcon = () => {
  return (
    <Link href="/" className="size-6" legacyBehavior>
        <HiMiniBars3CenterLeft />
    </Link>
  )
}

export default MenuIcon