import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feedback = () => {
  return (
    <div>
      <div className="bg-black p-10 rounded-full my-30">
        <div className="flex justify-center">
          <div className="w-[50%]">
            <h1 className="text-[40px] text-white text-center">
              Share your Feedback
            </h1>
            <p className="text-white text-center">
              We’d love to hear your thoughts! Share your feedback and help us
              improve." "Your opinion matters to us. Let us know how we can do
              better!" "Got feedback? We’re listening! Tell us what you think."
            </p>
            <div className="flex justify-center my-5">
              <div className="">
                <Input
                  className="w-fit rounded-full text-center text-lg text-white py-8"
                  size={50}
                  placeholder="Your Feedback"
                />
                <div className="flex cursor-pointer mt-5 justify-center">
                  <Button size={"lg"}>Share Feedback</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
