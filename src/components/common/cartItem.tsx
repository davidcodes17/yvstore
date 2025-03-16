import { ICart } from "@/types/types-file";
import { motion } from "framer-motion";
const CartItem = ({ cart }: { cart: ICart }) => {
  return (
    <motion.div
      initial={{
        translateY: 40,
      }}
      whileInView={{
        translateY: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        whileHover={{
          translateY: -40,
        }}
        className="bg-yellow-200 min-w-60 cursor-pointer rounded-full p-5"
      >
        <motion.div className="flex justify-center">
          <img
            src={cart?.image}
            alt="Product Image"
            className="w-50 h-50 object-cover rounded-full"
          />
        </motion.div>
        <div className="text-center py-6 mb-4  text-lg">
          <h1 className="font-bold text-2xl">{cart?.name}</h1>
          <h1>{cart?.des}</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartItem;
