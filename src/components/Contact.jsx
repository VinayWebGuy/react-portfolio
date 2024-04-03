import React from "react";
import { ADDRESS, EMAIL, MOBILE } from "../../data";

const Contact = () => {
  return (
    <div
      id="hire"
      className="restHeight flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:px-[60px] py-7"
    >
      <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl page-heading">
        Contact me
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 mt-24 w-full">
        <form action="" className="w-full flex-1">
          <div className="formGroup mb-4">
            <label
              htmlFor="email"
              className="block text-left text-lg font-medium"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-mainColor focus:border-mainColor"
            />
          </div>
          <div className="formGroup mb-4">
            <label
              htmlFor="mobile"
              className="text-left block text-lg font-medium"
            >
              Mobile
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-mainColor focus:border-mainColor"
            />
          </div>
          <div className="formGroup mb-4">
            <label
              htmlFor="requirement"
              className="text-left block text-lg font-medium"
            >
              Requirement
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-mainColor focus:border-mainColor"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-mainColor px-3 py-2 text-white rounded-[5px] hover:opacity-75 transition-all">
            Send
          </button>
        </form>
        <div className="contact-details w-full lg:w-[400px] flex gap-5 flex-col mt-4">
          <div className="flex flex-col justify-between text-lg">
            <span>Mobile</span>
            <span className="text-xl font-inter font-bold">{MOBILE}</span>
          </div>
          <div className="flex flex-col justify-between text-lg">
            <span>Email</span>
            <span className="text-xl font-inter font-bold">{EMAIL}</span>
          </div>
          <div className="flex flex-col justify-between text-lg">
            <span>Address</span>
            <span className="text-xl font-inter font-bold">{ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
