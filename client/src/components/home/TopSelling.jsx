'use client'
import { useState } from "react"
import { IoBookSharp } from "react-icons/io5"
import {books} from '../../data/books'
import {motion} from 'framer-motion'
import ProductCard from "../ui/ProductCard"


const TopSelling = () => {

  const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure']
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre')

  const filteredBooks = selectedCategory === 'Choose a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  return (
    <section className="py-10">

        <h2 className="text-3xl font-semibold mb-6">Top Selling</h2>

        {/* category filtering */}
        <section className="flex items-center mb-8">
          <select 
          name="category" 
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>
        </section>

        {/* book grid */}
        {filteredBooks.map((book) =>(
          <ProductCard title={book.title} oldPrice={book.oldPrice} newPrice={book.newPrice} image={book.coverImage} />
              
        ))}
    </section>
  )
}

export default TopSelling