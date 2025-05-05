import Logo from "@/components/common/logo";
import { Call, Sms, Whatsapp } from "iconsax-react";

const Footer = () => {
  return (
    <div id="footer" className="p-10 bg-[#000] rounded-t-4xl mt-20">
      <div>
        <div className="flex flex-wrap gap-10 justify-center lg:flex-nowrap lg:justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-white text-[20px]">Yemi Stores Ventures</h1>
          </div>
          <div className="flex gap-4">
            <a href="tel:+2348039266492">
              <Call color="#fff" size={30} />
            </a>
            <a
              href="https://wa.link/rowvn7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp color="#fff" size={30} />
            </a>
            <a href="mailto:lydiaadebayo064@gmail.com">
              <Sms color="#fff" size={30} />
            </a>
          </div>
        </div>
        <h1 className="text-center pt-10 text-white text-[20px]">
          Pick-up address: Road 15, Rehoboth Close, Resort Avenue, Redemption
          City, Mowe, Lagos.
        </h1>
        <h1 className="text-center pt-10 text-white text-[20px]">
          &copy; All Rights Reserved 2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
