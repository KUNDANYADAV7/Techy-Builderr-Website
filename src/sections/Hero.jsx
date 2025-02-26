import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one from "../assets/images/carousel/1.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white w-full overflow-hidden">
      <section
        id="hero"
        className="w-full max-w-[1740px] h-auto aspect-[16/9] m-auto mt-1 bg-no-repeat bg-contain bg-center rounded-xl flex justify-center flex-col items-start px-4 sm:px-10 lg:px-28 gap-7 z-20"
        style={{
          backgroundImage: `url(${one})`,
        }}
      ></section>
    </div>
  );
};

export default Hero;
