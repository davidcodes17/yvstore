import Logo from "@/components/common/logo";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="lg:flex hidden gap-10">
          <a href="#products">Products</a>
          <a href="#footer">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
