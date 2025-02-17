// // pages/product/[id].js
// 'use client'
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/redux/features/cart/cartSlice';
// import {
//   Typography,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Carousel,
//   IconButton,
// } from '@material-tailwind/react';

// export default function ProductPage({params}) {
//   const { id } = params;
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     if (id) {
//     fetch('./products.json')
//     .then(res => res.json())
//     .then(products => setProduct(products.find(product => product._id === id)))
//     }
//   },[])
//   console.log(product)
//   setProduct({
//       "_id": 1,
//       "title": "How to Grow Your Online Store",
//       "description": "Learn the best strategies to grow your online store in today's competitive market.",
//       "category": "business",
//       "trending": true,
//       "coverImage": "book-1.png",
//       "oldPrice": 29.99,
//       "newPrice": 19.99
//     })


//   if (!product) {
//     return <Typography>Loading...</Typography>;
//   }

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Images Carousel */}
//         <Card className="w-full">
//           <CardHeader shadow={false} floated={false} className="h-96">
//             <Carousel
//               className="rounded-xl"
//               navigation={({ setActiveIndex, activeIndex, length }) => (
//                 <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                   {new Array(length).fill("").map((_, i) => (
//                     <span
//                       key={i}
//                       className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                         activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//                       }`}
//                       onClick={() => setActiveIndex(i)}
//                     />
//                   ))}
//                 </div>
//               )}
//             >
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={`./books/${image}`}
//                   alt={`${product.title} image ${index + 1}`}
//                   className="h-full w-full object-cover"
//                 />
//               ))}
//             </Carousel>
//           </CardHeader>
//         </Card>

//         {/* Product Details */}
//         <div className="flex flex-col space-y-6">
//           <Typography variant="h2" className="font-bold">
//             {product.title}
//           </Typography>
//           <Typography variant="h4" color="blue-gray" className="font-medium">
//             ${product.newPrice}
//             {product.oldPrice && (
//               <Typography color="gray" className="line-through text-sm ml-2">
//                 ${product.oldPrice}
//               </Typography>
//             )}
//           </Typography>
//           <Typography variant="paragraph" className="text-gray-700">
//             {product.description}
//           </Typography>

//           {/* Add to Cart Button */}
//           <Button
//             onClick={handleAddToCart}
//             ripple={false}
//             fullWidth={true}
//             className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//           >
//             Add to Cart
//           </Button>

//           {/* Additional Information */}
//           <div className="mt-6">
//             <Typography variant="h6" className="font-semibold">
//               Product Details
//             </Typography>
//             <Typography variant="small" color="gray" className="font-normal">
//               {product.details}
//             </Typography>
//           </div>

//           {/* Reviews Section */}
//           <div className="mt-6">
//             <Typography variant="h6" className="font-semibold">
//               Customer Reviews
//             </Typography>
//             {product.reviews.map((review, index) => (
//               <div key={index} className="mt-4">
//                 <Typography variant="small" color="blue-gray" className="font-medium">
//                   {review.user}
//                 </Typography>
//                 <Typography variant="small" color="gray" className="font-normal">
//                   {review.comment}
//                 </Typography>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }