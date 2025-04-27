const Hero = () => {
  return (
    <div className="lg:mt-20 mt-15">
      <div className="flex justify-center">
        <div className="lg:w-[80%] w-full">
          <h1 className="lg:text-[80px] text-[30px] uppercase font-bold text-center">
            Transform your space with Sustainable Products
          </h1>
          <div className="flex lg:flex-nowrap flex-wrap justify-center gap-5 cursor-pointer pt-10">
            <img
              src="https://hogfurniture.co/cdn/shop/files/WhatsAppImage2023-06-13at4.25.51PM_1.jpg?v=1686735244&width=1500"
              className="rounded-full lg:h-40 h-20 w-40 object-cover object-top"
              alt=""
            />
            <img
              src="https://www.the-citizenry.com/cdn/shop/products/Mercado_Storage_Basket_Set_of_3_1.jpg?v=1656104909"
              className="rounded-full lg:h-40 h-20 w-40 object-cover object-top"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/71l+ZDK9IdL._AC_UF894,1000_QL80_.jpg"
              className="rounded-full lg:h-40 h-20 w-40 object-cover object-top"
              alt=""
            />
            <img
              src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/7547012/1.jpg?1683"
              className="rounded-full lg:h-40 h-20 w-40 object-cover object-top"
              alt=""
            />
            <img
              src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/71/5106183/1.jpg?6414"
              className="rounded-full lg:h-40 h-20 w-40 object-cover object-top"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
