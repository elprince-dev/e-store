'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



import news1 from'@/../public/news/news-1.png'
import news2 from '@/../public/news/news-2.png'
import news3 from '@/../public/news/news-3.png'
import news4 from '@/../public/news/news-4.png'
import Link from 'next/link';
import Image from 'next/image';

const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Innovative New Smartphone Released by Leading Tech Company",
        "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
        "image": news2
    }
]

const NewsSwiper = ({filteredProducts}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {news.map(item => (
          <SwiperSlide key={item.id}>
            <div>
              {/* content */}
              <div className='py-4'>
                <Link href='/'>
                <h3 className='text-lg font-meduim hover:text-light-blue-500 mb-4'>{item.title}</h3>
                </Link>
                <div className='w-12 bg-primary h-[4px] mb-5'></div>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
              <div>
                {/* <Image src={} width={} height={} alt={item.title} /> */}
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default NewsSwiper