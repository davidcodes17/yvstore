import Logo from "@/components/common/logo";
import { Call, Sms } from "iconsax-react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex lg:justify-center flex-wrap lg:gap-20 gap-5 p-10">
        <div className="">
          <Logo />
          <h1 className="text-center py-5">
            All Rights Reserved &copy; YVStore
          </h1>
        </div>
        <div className=" space-y-6">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="space-y-4">
            {/* Email Section */}
            <div className="flex items-center space-x-3">
              <Sms color="#000" size={30} />
              <a
                href="mailto:lydiaomoyemi@gmail.com"
                className="hover:underline"
              >
                Email us: lydiaomoyemi@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-3">
              <Call color="#000" size={30} />
              <a href="tel:+2348039266492" className="hover:underline">
                Call us: +2348039266492
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
