import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Call, HambergerMenu } from "iconsax-react";

const Header = () => {
  return (
    // <div className="flex justify-center w-full">
    <div className="flex justify-between py-5 cursor-pointer px-8 rounded-full items-center bg-white">
      <Logo />
      <div className="lg:flex gap-10 hidden">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Services</p>
      </div>
      <Button className="hidden lg:flex cursor-pointer w-[150px] py-6 rounded-full">
        <Call color="#fff" variant="Bulk" /> Call Us Now!
      </Button>
      <div className="bg-[#000] lg:hidden flex p-3 rounded-full">
        <HambergerMenu color="#fff" size={25} />
      </div>
    </div>
    // </div>
  );
};

export default Header;
