import Product from "@/components/common/product";

const Products = () => {
  return (
    <div className="mt-50">
      <div className="">
        <h1 className="text-[60px] text-center">Avaliable Products</h1>
        <div className="mt-20 flex gap-20 justify-center flex-wrap">
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
