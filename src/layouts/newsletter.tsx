import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <div className="flex justify-center lg:py-30">
      <div className="lg:w-[40%]">
        <h1 className="text-center text-[30px] lg:text-[40px]">
          Subscribe to our newsletter and get notifications about <b>PROMS</b>
          and <b>BONUSES</b>
        </h1>

        <div className="flex lg:gap-5 gap-1 mt-10">
          <input
            className="border-[1px] outline-none rounded-2xl p-5 w-full border-[#ddd]"
            placeholder="you@gmail.com"
            type="email"
          />
          <Button className="py-8 rounded-2xl px-10 cursor-pointer">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
