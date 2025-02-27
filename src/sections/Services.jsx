import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { service } from "../components/export";
import { motion } from "framer-motion";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded card by its index

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });

    // Scroll to the top when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse the card if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked card
    }
  };

  return (
    <div
      className="py-15 bg-cover  bg-no-repeat bg-white"
      // style={{ backgroundImage: `url(${bgimg})` }}
    >
      <section
        id="services"
        className={`bg-[#F3F5F5] lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4 cursor-pointer">
          <h1
            data-aos="zoom-in"
            className="text-[32px] font-bold uppercase tracking-wide text-[#000045]"
          >
            OUR SERVICES
          </h1>
          <h2
            data-aos="zoom-in"
            className="text-[42px] font-semibold leading-[1.4]"
          >
            Discover Our Expertise
          </h2>
        </div>

        {/* Marquee with Increased Speed & Pause on Hover */}
  

        <Marquee speed={120} gradient={false} pauseOnHover={true}>
  <div id="service-box" className="flex flex-nowrap gap-x-4 px-2 md:px-4">
    {service.map((item, index) => (
      <div
        key={index}
        className={`bg-[#000045] text-white min-h-[320px] w-full max-w-[270px] md:max-w-[400px] lg:max-w-[440px] 
                    px-4 md:px-6 py-6 flex-shrink-0 flex flex-col justify-between items-start 
                    rounded-xl border-b-[4px] border-red-600 transition-all duration-300 cursor-pointer mx-2 md:mx-4 
                    hover:bg-[linear-gradient(135deg,#93a5cf_10%,#e4efe9_100%)] hover:text-black`}
        style={{
          height: expandedIndex === index ? "auto" : "320px",
        }}
      >
        {/* Icon */}
        <div className="p-4 md:p-6 rounded-full bg-white">
          <motion.div
            animate={{ y: ["0%", "30%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <item.icon className="text-red-600 size-8 md:size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </motion.div>
        </div>

        {/* Title */}
        <h1 className="text-[20px] md:text-[20px] font-semibold">{item.title}</h1>

        {/* Description */}
        <p
          className="xl:text-xl md:text-base flex-grow min-h-[80px]"
          style={{
            maxHeight: expandedIndex === index ? "500px" : "80px",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          {expandedIndex === index ? item.desc : `${item.desc.slice(0, 94)}...`}
        </p>

        {/* Toggle Button */}
        <div className="mt-2 self-start">
          <button
            onClick={() => toggleExpand(index)}
            className="text-blue-500 hover:underline"
          >
            {expandedIndex === index ? "SHOW LESS" : "READ MORE"}
          </button>
        </div>
      </div>
    ))}
  </div>
</Marquee>




        
      </section>
    </div>
  );
};

export default Services;
