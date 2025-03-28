import Product from "@/components/common/product";

const Products = () => {
  return (
    <div className="lg:mt-50 mt-20">
      <div className="">
        <h1 className="md:text-[40px] text-[30px] lg:text-[60px] text-center">
          Avaliable Products
        </h1>
        <div className="mt-10 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20 justify-items-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
