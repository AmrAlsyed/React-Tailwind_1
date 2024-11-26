import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want some tips & tricks to optamize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md flex w-full p-3 text-black"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 my-6 px-6 py-3 text-black">
              Notify me
            </button>
          </div>
          <p>
            We can about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
