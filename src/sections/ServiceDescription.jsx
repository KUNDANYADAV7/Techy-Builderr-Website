import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { service } from "../components/export";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowLeft } from "react-icons/fi"; // Import back arrow icon
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceDescription = () => {
  const [expanded, setExpanded] = useState(null); // Track which card is expanded

  useEffect(() => {
    // Ensure the page scrolls to the top when the component loads
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index)); // Toggle expansion or collapse the card
  };

  return (
    <>
      <div className={`bg-blue-900 pb-20`}>
        <section
          id="services"
          className={`bg-[#000045] lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
        >
          <div className="flex flex-col justify-center items-start gap-4">
            {/* Back Button */}
            <Link
              to="/"
              className="flex items-center gap-2 mb-0 cursor-pointer hover:text-blue-500"
            >
              <FiArrowLeft className="text-[30px] text-red-600" />
              <span className="text-red-600 text-[18px]">Back</span>
            </Link>

            {/* Headings */}
            <h1
              data-aos="zoom-in"
              className="text-[30px] font-semibold leading-10 text-[#c9ffe5]"
            >
              OUR SERVICES
            </h1>
            <h1
              data-aos="zoom-in"
              className={`text-[40px] font-semibold leading-10 text-white`}
            >
              Our Best Services
            </h1>
          </div>

          <div
            id="service-box"
            className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
          >
            {service.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className={` bg-[#c9ffe5] text-black
               min-h-[350px] px-8 py-10 flex flex-col justify-between items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-[linear-gradient(135deg,#1f4037_10%,#99f2c8_100%)] transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div className="p-6 rounded-full bg-red-200">
                  <motion.div
                    animate={{
                      y: ["0%", "30%", "0%"], // Moves up and down
                    }}
                    transition={{
                      duration: 2, // Time for the animation
                      repeat: Infinity, // Repeat the animation infinitely
                      repeatType: "loop", // Repeat in a loop
                      ease: "easeInOut", // Smooth ease in and out
                    }}
                  >
                    <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                  </motion.div>
                </div>

                {/* Title */}
                <h1 className="text-[22px] font-semibold dark:text-white">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className={`text-lg dark:text-white transition-all duration-300 ${
                    expanded === index
                      ? "max-h-[500px]"
                      : "max-h-[60px] overflow-hidden"
                  }`}
                >
                  {item.desc}
                </p>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-auto border-b-2 border-red-600 text-red-600 font-semibold dark:text-white transition-colors duration-300 hover:text-black"
                >
                  {expanded === index ? "SHOW LESS" : "READ MORE"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDescription;
