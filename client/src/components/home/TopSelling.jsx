'use client'
import { useState } from "react"
import {products} from '../../data/products'
import ProductCard from "@/components/ui/ProductCard"
import ProductSwiper from "./ProductSwiper"
import Title from "./Title"



const TopSelling = () => {

  const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure']
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre')

  const filteredProducts = selectedCategory === 'Choose a genre' ? products : products.filter(product => product.category === selectedCategory.toLowerCase())

  return (
    <section className="py-10">

        <Title title="Top Selling" />

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

        {/* product grid */}
        <ProductSwiper filteredProducts={filteredProducts} />

    </section>
  )
}

export default TopSelling