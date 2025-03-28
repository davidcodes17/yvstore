import Categories from "@/layouts/categories";
import Feedback from "@/layouts/feedback";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";
import Products from "@/layouts/products";

const Home = () => {
  return (
    <div className="">
      <div className="lg:bg-[url('/bgg.jpg')] h-[100vh] pt-5 px-5 lg:px-[50px] bg-cover bg-top">
        <Header />
        <Hero />
      </div>
      <div className="pt-5 px-5 lg:px-[50px]">
        <Categories />
        <Products />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
