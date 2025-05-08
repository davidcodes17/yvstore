import { IProduct } from "@/types/types-file";
import { useState } from "react";

// const placeholderImg =
//   "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const getTrimmedName = (name: string) => {
  return name.split(" ").slice(0, 3).join(" ");
};

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
          <div className="flex items-center justify-between pt-3">
            <h1 className="lg:text-[20px] text-md truncate max-w-[70%]">
              {getTrimmedName(product.name)}
            </h1>
            <h1 className="lg:text-[20px] text-md whitespace-nowrap">
              ₦{product.price}
            </h1>
          </div>
        </div>
      </div>
    </a>
  );
};
export default Product;
