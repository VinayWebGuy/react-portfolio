import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../../data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const totalTestimonials = testimonials.length;
  const nextTestimonial = () => {
    setCurrent((current) => (current + 1) % totalTestimonials);
  };
  const prevTestimonial = () => {
    setCurrent(
      (current) => (current - 1 + totalTestimonials) % totalTestimonials
    );
  };

  return (
    <div className="restHeight flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:px-[60px]">
      <h2 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl page-heading">
        What others say about me
      </h2>
      <div className="testimonial-container mt-20 flex items-center justify-center relative">
        <div className="testimonial bg-white shadow-lg rounded-md p-6 w-full max-w-4xl mx-4">
          <FaQuoteLeft className="text-3xl text-gray-200  absolute top-0 left-0" />

          <p className="text-lg sm:text-xl">{testimonials[current].review}</p>
          <span className="text-xl sm:text-2xl font-bold mt-5 block">
            {testimonials[current].name}
          </span>
        </div>

        <button
          className="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={prevTestimonial}
        >
          <FaArrowLeft className="text-xl text-gray-600" />
        </button>
        <button
          className="next-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={nextTestimonial}
        >
          <FaArrowRight className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
