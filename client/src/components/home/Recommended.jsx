import Title from "./Title"
import { products } from "@/data/products"
import ProductSwiper from "./ProductSwiper"


const Recommended = () => {

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