import React, { useState } from "react";
import { motion } from "framer-motion";
import man1 from "../assets/images/man1.jpg";
import man2 from "../assets/images/man2.jpg";
import man3 from "../assets/images/man3.jpg";

const testimonials = [
  {
    name: "John Doe",
    text: "Hexnode Kiosk transformed our business! Easy to use and highly secure.",
    company: "Tech Solutions",
    image: man1,
  },
  {
    name: "David Smith",
    text: "A must-have for enterprise-level security. Remote management is excellent!",
    company: "Enterprise Corp",
    image: man2,
  },
  {
    name: "Michael Johnson",
    text: "Super simple to set up and deploy across our organization.",
    company: "Retail Solutions",
    image: man3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-blue-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-lg"
      >
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />
        <p className="text-lg">"{testimonials[currentIndex].text}"</p>
        <h3 className="mt-4 font-semibold">
          {testimonials[currentIndex].name}
        </h3>
        <p className="text-sm text-gray-500">
          {testimonials[currentIndex].company}
        </p>
      </motion.div>
      <button
        onClick={nextTestimonial}
        className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-md"
      >
        Next
      </button>
    </section>
  );
};

export default Testimonials;
