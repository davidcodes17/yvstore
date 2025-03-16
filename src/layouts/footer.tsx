import Logo from "@/components/common/logo";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-center p-10">
        <div className="">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="text-center py-5">
            All Rights Reserved &copy; YVStore
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
