import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Importing logos
import logo1 from "../assets/images/Testimonials/1.png";
import logo2 from "../assets/images/Testimonials/2.png";
import logo3 from "../assets/images/Testimonials/3.png";
import logo4 from "../assets/images/Testimonials/4.png";
import logo5 from "../assets/images/Testimonials/5.png";
import logo6 from "../assets/images/Testimonials/6.png";
import logo7 from "../assets/images/Testimonials/7.png";
import logo8 from "../assets/images/Testimonials/8.png";
import logo9 from "../assets/images/Testimonials/9.png";
import logo10 from "../assets/images/Testimonials/10.png";
import logo11 from "../assets/images/Testimonials/11.png";
import logo12 from "../assets/images/Testimonials/12.png";
import logo13 from "../assets/images/Testimonials/13.png";
import logo14 from "../assets/images/Testimonials/14.png";
import logo15 from "../assets/images/Testimonials/15.png";
import logo16 from "../assets/images/Testimonials/16.png";
// import logo17 from "../assets/images/Testimonials/17.png";
import logo18 from "../assets/images/Testimonials/18.png";
import logo19 from "../assets/images/Testimonials/19.png";
import logo20 from "../assets/images/Testimonials/20.png";

// Company Logos Array
const companyLogos = [
  logo1,
  logo2,
  logo3,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo18,
  logo19,
  logo20,
];

// Testimonials Array
const testimonials = [
  { text: "Excellent service, highly recommended!", name: "John Doe" },
  { text: "Great experience, very professional!", name: "Emily Smith" },
  { text: "They delivered beyond expectations.", name: "Michael Johnson" },
  { text: "Best quality and amazing support!", name: "Sophia Brown" },
  { text: "Outstanding service, five stars!", name: "Daniel Williams" },
];

const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });

    // Change testimonial text every 5 seconds
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-15 bg-cover bg-no-repeat bg-white">
      <section
        id="clients"
        className="bg-white lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-start items-start lg:px-20 px-6 py-20 gap-10"
      >
        {/* Heading */}
        <div>
          <h1
            data-aos="zoom-in"
            className="text-[42px] font-semibold text-black transition-colors"
          >
            Hear from Our Happy Clients
          </h1>
        </div>

        {/* Marquee Section */}
        <div className="relative w-full flex flex-col gap-6 overflow-hidden">
          {/* First Row */}
          <div className="relative w-full">
            <Marquee speed={80} gradient={false} className="flex items-center">
              {companyLogos.slice(0, 10).map((logo, index) => (
                <div className="w-52 h-auto bg-white flex justify-center items-center  overflow-hidden" key={index}>
                  <img
                    src={logo}
                    alt={`Company ${index}`}
                    className="w-[150px]  h-auto max-h-[150px] object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second Row */}
          <div className="relative w-full">
            <Marquee
              speed={80}
              gradient={false}
              direction="right"
              className="flex items-center"
            >
              {companyLogos.slice(10, 20).map((logo, index) => (
                <div className="w-52 h-auto bg-white flex justify-center items-center overflow-hidden" key={index}>
                  <img
                    src={logo}
                    alt={`Company ${index}`}
                    className="w-[150px] h-auto max-h-[150px] object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
