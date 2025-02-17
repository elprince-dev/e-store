import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/lib/hooks";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useDispatch } from "react-redux";




export default function ProductCard({ product }) {

  // Handling cart state items --------------------------------
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addToCart(product));
  }
  //----------------------------------------------------------------
  return (
    <Card className="w-80 transition-shadow duration-300 rounded-lg ">
      <CardHeader shadow={false} floated={false} className="h-96 rounded-lg p-3">
        <Link href={`/product/${product._id}`}>
          <img
            src={`./books/${product.coverImage}`}
            alt={`${product.coverImage} image`}
            className="h-full w-full object-cover cursor-pointer hover:scale-105 transition-all duration-200  rounded-md"
          />
        </Link>
      </CardHeader>
      <CardBody className="h-44">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/product/${product._id}`}>
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
          </Link>
          <div className="flex items-center gap-2">
            {product.oldPrice ? <Typography color="gray" className="line-through text-sm">
              ${product.oldPrice}
            </Typography> : null}
            
            <Typography color="blue-gray" className="font-medium text-lg">
              ${product.newPrice}
            </Typography>
          </div>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product.description.length < 100 ? product.description : product.description.slice(0, 100) + ' ...'}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
        onClick={() => handleCart(product)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
