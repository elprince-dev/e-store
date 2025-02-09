import { IoSearchOutline } from "react-icons/io5"

const Search = () => {
  return (
    <section className="relative w-72 space-x-2">
        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
        <input type="text" placeholder="Search" 
        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" 
        />
    </section>
  )
}

export default Search