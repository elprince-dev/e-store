'use client'
import { motion } from 'framer-motion'
const ProductCard = ({title, oldPrice, newPrice, image}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-72 h-96 bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all"
    >
      {/* Product Image */}
      <img
        src={`/books/${image}`}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-3 text-white">
        <h2 className="text-lg font-semibold tracking-wide">
          {title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-gray-300 line-through">${oldPrice}</span>
          <span className="text-yellow-400">${newPrice}</span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium shadow-md hover:bg-yellow-500 transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard