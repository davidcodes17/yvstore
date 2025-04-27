const Product = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative w-full">
        <img
          src="https://hogfurniture.co/cdn/shop/files/WhatsAppImage2023-06-13at4.25.51PM_1.jpg?v=1686735244&width=1500"
          className="rounded-2xl"
        />
        <div className="flex items-center justify-between pt-3">
          <h1 className="lg:text-[30px] text-md">Pot Set</h1>
          <h1 className="lg:text-[30px] text-md">₦40000</h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
