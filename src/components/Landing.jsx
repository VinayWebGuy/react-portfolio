import React from "react";
import { DEV_NAME, LOCATION, MOBILE } from "../../data";

const Landing = () => {
  return (
    <div className="restHeight flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:px-[60px]">
      <p className="text-lg sm:text-xl">Hello👋, I’m {DEV_NAME} and I’m a</p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold font-inter mt-2">
        Website Developer <br /> based in {LOCATION}
      </h1>
      <p className="text-base sm:text-lg lg:text-xl w-full sm:w-[500px] lg:w-[600px] mt-4">
        I love designing personal, professional and ecommerce websites, doing
        freelance work and focusing on designing web applications products that
        are easy on users and customers.
      </p>
      <div className="buttons mt-5 flex gap-5">
        <a
          href={`tel:${MOBILE}`}
          className="bg-mainColor px-3 py-2 text-white rounded-[5px] hover:opacity-75 transition-all"
        >
          Call me
        </a>
        <a
          href="#hire"
          className="border border-mainColor font-bold px-3 py-2 text-mainColor rounded-[5px] transition-all hover:bg-mainColor hover:text-white"
        >
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Landing;
