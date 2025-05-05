import Product from "@/components/common/product";
import { productsData } from "@/data";

const Products = () => {
  return (
    <div id="products">
      <div className="lg:pt-50 pt-20">
        <h1 className="lg:text-[50px] text-[30px] text-center uppercase font-bold">
          Our Best Quality Products
        </h1>
        {/* <div className="flex overflow-x-scroll gap-5 justify-center py-6">
          <h1 className="px-10 hover:bg-[#000] hover:text-white py-3 cursor-pointer border-[1px] border-[#000] rounded-full">
            All
          </h1>
          <h1 className="px-10 hover:bg-[#000] hover:text-white py-3 cursor-pointer border-[1px] border-[#000] rounded-full">
            Pots
          </h1>
          <h1 className="px-10 hover:bg-[#000] hover:text-white py-3 cursor-pointer border-[1px] border-[#000] rounded-full">
            Plates
          </h1>
          <h1 className="px-10 hover:bg-[#000] hover:text-white py-3 cursor-pointer border-[1px] border-[#000] rounded-full">
            Spoons
          </h1>
          <h1 className="px-10 hover:bg-[#000] hover:text-white py-3 cursor-pointer border-[1px] border-[#000] rounded-full">
            Knives
          </h1>
        </div> */}

        <div className="grid lg:gap-10 gap-5 py-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
          {productsData?.map((prd, key) => (
            <Product product={prd} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
