import { motion } from "framer-motion";
const Product = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        damping: 10,
      }}
      className="lg:w-100 md:w-50 "
    >
      <div className="cursor-pointer">
        <img
          src="/micro.avif"
          className="w-100 lg:h-100 lg:rounded-2xl rounded-sm"
          alt="Product Image"
        />
        <div className="py-2 flex flex-wrap items-center justify-between">
          <h1 className="font-bold">Microwave & Electric Cooker</h1>
          <h1 className="bg-yellow-200 text-sm px-5 p-2 rounded-full">
            Avaliable
          </h1>
        </div>
        <h1>₦{Number(180000).toLocaleString()}</h1>
      </div>
    </motion.div>
  );
};

export default Product;
