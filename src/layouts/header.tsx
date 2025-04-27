import Logo from "@/components/common/logo";
import { SearchNormal1 } from "iconsax-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="lg:flex hidden gap-10">
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Our Store</a>
          <a href="#">Delivery</a>
          <a href="#">Contact Us</a>
          <a href="#">Customer Care</a>
        </div>
        <div className="lg:none">
          <SearchNormal1 size={30} color="#bbb" />
        </div>
        <div className="lg:flex hidden items-center gap-2 border-[1px] p-2 rounded-full px-5">
          <SearchNormal1 size={20} color="#bbb" />
          <input
            className="border-none outline-none"
            type="search"
            placeholder="Search Products"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
