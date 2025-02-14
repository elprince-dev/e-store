'use client'
import Title from "./Title"
// import { products } from "@/data/products"
import ProductSwiper from "./ProductSwiper"
import { useEffect, useState } from "react"


const Recommended = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('./products.json')
    .then(res => res.json())
    .then(products => setProducts(products))
  },[])

    const filteredProducts= products.slice(0,11)
  return (
    <section className="py-16">
        <Title title="Recommended for you" />
        {/* product grid */}
        <ProductSwiper filteredProducts={filteredProducts} />
    </section>
  )
}

export default Recommended