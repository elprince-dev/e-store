import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard({ title, oldPrice, newPrice, image, description }) {
  return (
    <Card className="w-96" suppressHydrationWarning>
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={`./books/${image}`}
          alt={`${image} image`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <div className="flex items-center gap-2">
            {oldPrice ? <Typography color="gray" className="line-through text-sm">
              ${oldPrice}
            </Typography> : null}
            
            <Typography color="blue-gray" className="font-medium text-lg">
              ${newPrice}
            </Typography>
          </div>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
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
