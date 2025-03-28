import { ICart } from "@/types/types-file";
import { motion } from "framer-motion";
const CartItem = ({ cart }: { cart: ICart }) => {
  return (
    <motion.div>
      <motion.div className="bg-white shadow-sm lg:min-w-60 min-w-40 cursor-pointer rounded-sm lg:rounded-full lg:p-5">
        <motion.div className="flex justify-center p-5">
          <img
            src={cart?.image}
            alt="Product Image"
            className="lg:w-50 lg:h-50 h-20 object-cover lg:rounded-full rounded-xl"
          />
        </motion.div>
        <div className="text-center pb-5 lg:py-6 mb-4  text-lg">
          <h1 className="font-bold lg:text-2xl text-xl">{cart?.name}</h1>
          <h1>{cart?.des}</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartItem;
