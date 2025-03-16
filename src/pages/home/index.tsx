import Categories from "@/layouts/categories";
import Feedback from "@/layouts/feedback";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";
import Products from "@/layouts/products";

const Home = () => {
  return (
    <div className="">
      <div className="pt-5 px-[50px]">
        <Header />
        <Hero />
        <Categories />
        <Products />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
