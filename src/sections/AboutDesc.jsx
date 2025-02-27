import React, { useEffect } from "react";
import ad from './../assets/ad.jpg'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative py-20 bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,teamwork')` }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 lg:w-[85%] w-full mx-auto bg-[#F3F5F5] rounded-xl flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 py-20 shadow-xl">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={ad}
            alt="About Us"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-[36px] font-extrabold uppercase tracking-wide text-[#000045] mb-6">
            About Us
          </h2>
          <p className="text-lg text-[#000045] leading-relaxed">
            At <strong>TECHY BUILDER</strong>, we are committed to delivering
            high-quality digital solutions, including website & mobile app
            development, SEO optimization, UI/UX design, and digital marketing.
            Our expert team ensures that your business stays ahead in the
            competitive market by providing innovative, scalable, and
            user-friendly services tailored to your needs.
          </p>
          <p className="mt-4 text-lg text-[#000045] leading-relaxed">
            From SEO-optimized content to seamless user experiences, we focus on
            driving growth, engagement, and long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
