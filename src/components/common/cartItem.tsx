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
      <motion.div className="bg-yellow-200 lg:min-w-60 min-w-40 cursor-pointer rounded-2xl lg:rounded-full p-5">
        <motion.div className="flex justify-center p-5">
          <img
            src={cart?.image}
            alt="Product Image"
            className="lg:w-50 lg:h-50 h-30 object-cover rounded-full"
          />
        </motion.div>
        <div className="text-center py-6 mb-4  text-lg">
          <h1 className="font-bold lg:text-2xl text-xl">{cart?.name}</h1>
          <h1>{cart?.des}</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartItem;
