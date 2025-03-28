import CartItem from "@/components/common/cartItem";
import { ICart } from "@/types/types-file";

const Categories = () => {
  const data: ICart[] = [
    {
      des: "Food Tray",
      image: "/pack.jpg",
      name: "Food Cart",
    },
    {
      des: "Food Tray",
      image: "/pack.jpg",
      name: "Food Cart",
    },
    {
      des: "Food Tray",
      image: "/pack.jpg",
      name: "Food Cart",
    },
  ];
  return (
    <div className="lg:pt-30 pt-10">
      <div className="">
        <h1 className="md:text-[40px] text-[30px] lg:text-[60px] text-center">
          Featured Categories
        </h1>
        <div className="py-10">
          <div className="flex gap-10  justify-center overflow-x-scroll">
            {data?.map((cart, key) => (
              <CartItem cart={cart} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
