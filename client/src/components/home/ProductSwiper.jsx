'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import ProductCard from '@/components/ui/ProductCard';
const ProductSwiper = ({filteredProducts}) => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {filteredProducts.length > 0 && filteredProducts.map((product) =>(
          <SwiperSlide key={product.title}>
            <ProductCard  product = {product} />
          </SwiperSlide>     
        ))}
      </Swiper>
  )
}

export default ProductSwiper