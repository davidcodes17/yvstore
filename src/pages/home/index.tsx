// import About from "@/layouts/about";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";
import Newsletter from "@/layouts/newsletter";
// import NumberSide from "@/layouts/numberSide";
import Products from "@/layouts/products";

const Home = () => {
  return (
    <div className="lg:px-20 p-5 lg:pt-10">
      <Header />
      <Hero />
      {/* <NumberSide /> */}
      <Products />
      {/* <About /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
