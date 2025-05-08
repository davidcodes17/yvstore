import { IProduct } from "@/types/types-file";
import { Button } from "../ui/button";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <a href="https://wa.link/rowvn7">
      <div className="cursor-pointer">
        <div className="relative w-full">
          <img
            src={product?.img}
            // onError={() => setImgSrc(placeholderImg)}
            className="rounded-2xl w-full h-100 object-cover"
            // alt={product.name}
          />
          <h1 className="lg:text-[20px] text-md mt-2 text-center">
            {product.name}
          </h1>
          <Button className="lg:text-[20px] w-full py-6 text-md ">
            ₦{product.price}
          </Button>
        </div>
      </div>
    </a>
  );
};
export default Product;
