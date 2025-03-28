import { motion } from "framer-motion";
import { ArrowDown } from "iconsax-react";
const Hero = () => {
  return (
    <div className="my-15 ">
      <div className="flex items-center justify-center">
        <div className="w-full lg:w-[60%] md:w-[80%] my-[30px] lg:my-[60px] text-center">
          <motion.h1
            initial={{
              opacity: 0,
              translateY: -30,
            }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              damping: 3,
            }}
            className="md:text-[40px] text-[30px] lg:text-[60px] mb-5 md:leading-20 leading-15 lg:leading-26"
          >
            Welcome to{" "}
            <span className="bg-purple-300 px-10 py-2 rounded-full">Yemza</span>{" "}
            Varieties Store –{" "}
            <span className="bg-yellow-200 px-10 py-2 rounded-full">
              Your One-Stop Shop
            </span>{" "}
            for Quality & Affordability!
          </motion.h1>
          <motion.h1
            className="text-sm lg:text-[20px] lg:px-5"
            initial={{
              opacity: 0,
              translateY: 30,
            }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              type: "tween",
              // damping: 3,
            }}
          >
            At Yemza Varieties Store, we bring you a diverse selection of
            top-quality products at unbeatable prices. Whether you're looking
            for fashion, home essentials, beauty products, electronics, or
            everyday necessities, we’ve got you covered!
          </motion.h1>
        </div>

        {/* <img
          src="/hero.jpg"
          alt="Hero Image"
          className="w-[40%] rounded-[40px]"
          /> */}
      </div>
      <motion.div
        initial={{
          opacity: 0,
          translateY: -30,
        }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "spring",
          damping: 3,
        }}
        className="flex justify-center pt-5"
      >
        <motion.div
          whileHover={{
            translateY: 20,
          }}
          transition={{
            // duration: 0.6,
            type: "spring",
            damping: 3,
          }}
          className="border-[0.6px] border-[#ddd] cursor-pointer w-fit lg:p-8 p-5 text-[#aaa] text-center rounded-full"
        >
          <p>Explore</p>
          <p>Products</p>
          <div className="flex justify-center pt-3">
            <ArrowDown color="#000" size={25} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
