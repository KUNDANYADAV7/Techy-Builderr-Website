import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutimg from "../assets/images/about/about.jpg";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      id="about"
      className="bg-white text-black w-full py-20 flex flex-col lg:flex-row items-center gap-0 px-15 overflow-hidden"
    >
      {/* Image Animation */}
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-center w-full lg:w-2/3" // Increased width
      >
        <img
          src={aboutimg}
          alt="About Techy Builder"
          className="rounded-md w-full max-w-[900px] h-auto lg:h-[500px] shadow-lg"
        />
      </motion.div>

      {/* Text Animation */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-0  px-6 lg:px-20"
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
         <h1 className="text-[32px] md:text-[32px] font-bold uppercase text-[#000045] mt-10 md:mt-5">
          About Techy Builder
        </h1>


        <h2 className="text-[36px] font-semibold leading-[1.4] md:mt-4 mt-4">
          Empowering Businesses with Cutting-Edge Digital Solutions
        </h2>
        <p className="text-xl text-black md:mt-5 mt-4">
          At Techy Builder, we specialize in providing top-notch digital
          services to help businesses thrive in the online world. Our expertise
          spans Website Development, Mobile App Development, UI/UX Design,
          Social Media Management, SEO, Digital Marketing, and Website
          Maintenance. With a focus on innovation and excellence, we transform
          your vision into reality.
        </p>
        <Link to="/aboutdescription">
          <button
            className="bg-[#2a52be] text-lg py-3 px-6 font-semibold rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 text-white md:mt-5 mt-5"
            // onClick={navigate('/aboutdesc')}
          >
            Learn More
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
