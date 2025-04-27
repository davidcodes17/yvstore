import Logo from "@/components/common/logo";
import { Facebook, Instagram, Sms, Whatsapp } from "iconsax-react";

const Footer = () => {
  return (
    <div className="p-10 bg-[#000] rounded-t-4xl mt-20">
      <div className="">
        <div className="flex flex-wrap gap-10 justify-center lg:flex-nowrap lg:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-white text-[20px]">Yemi Stores Ventures </h1>
          </div>
          <div className="flex gap-4">
            <a href="">
              <Facebook color="#fff" size={30} />
            </a>
            <a href="">
              <Whatsapp color="#fff" size={30} />
            </a>
            <a href="">
              <Instagram color="#fff" size={30} />
            </a>
            <a href="">
              <Sms color="#fff" size={30} />
            </a>
          </div>
        </div>
        <h1 className="text-center pt-10 text-white text-[20px]">
          &copy; All Rights Reserved 2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
