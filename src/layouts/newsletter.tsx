import { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const subject = "Newsletter Subscription";
    const body = `Hello,\n\nPlease subscribe ${email} to the newsletter.`;
    const mailtoLink = `mailto:lydiaadebayo064@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="flex justify-center lg:py-30">
      <div className="lg:w-[40%]">
        <h1 className="text-center text-[30px] lg:text-[40px]">
          Subscribe to our newsletter and get notifications about <b>PROMS</b>{" "}
          and <b>BONUSES</b>
        </h1>

        <div className="flex lg:gap-5 gap-1 mt-10">
          <input
            className="border-[1px] outline-none rounded-2xl p-5 w-full border-[#ddd]"
            placeholder="you@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            onClick={handleSubscribe}
            className="py-8 rounded-2xl px-10 cursor-pointer"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
