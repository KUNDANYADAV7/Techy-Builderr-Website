// import React, { useEffect } from "react";

// const AboutUs = () => {
//   useEffect(() => {
//     // Ensure the page scrolls to the top when the component loads
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <section id="about-desc" className="py-15 bg-cover  bg-no-repeat bg-white ">
//       {/* Background Overlay */}
//       {/* <div className="absolute inset-0 bg-orange-100 opacity-40 z-0"></div> */}

//       <div className={`bg-[#F3F5F5] lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-center lg:px-20 px-6 py-20 gap-10`}>

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         // style={{ backgroundImage: `url(${aboutserv})` }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 text-white text-center">
//         <h2 className="text-[32px] font-bold uppercase tracking-wide text-[#000045] mb-6">
//           About Us
//         </h2>
//         <p className="text-xl max-w-3xl mx-auto text-[#000045] ">
//           At TECHY BUILDER We are
//           committed to delivering high-quality digital solutions, including
//           website & mobile app development, SEO optimization, UI/UX design, and
//           digital marketing. Our expert team ensures that your business stays
//           ahead in the competitive market by providing innovative, scalable, and
//           user-friendly services tailored to your needs. From SEO-optimized
//           content to seamless user experiences, we focus on driving growth,
//           engagement, and long-term success..
//         </p>
//       </div>

//       {/* Service Details */}
//       {/* <div className="relative z-10 mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//   {services.map((service, index) => (
//     <div
//       key={index}
//       className="bg-[#000045] hover:bg-[linear-gradient(135deg,#93a5cf_10%,#e4efe9_100%)] 
//                  group p-6 rounded-lg shadow-lg text-center transition-all duration-300"
//     >
//       <h3 className="text-[20px] font-semibold text-white group-hover:text-black transition-all duration-300">
//         {service.title}
//       </h3>
//       <p className="text-white text-lg mt-2 group-hover:text-black transition-all duration-300">
//         {service.description}
//       </p>
//     </div>
//   ))}
// </div> */}
// </div>
//     </section>
//   );
// };

// // Service Data with Font Awesome Icons
// const services = [
//   {
//     title: "Digital Marketing",
//     description:
//       "Boost your brand's online presence with targeted strategies that drive engagement and conversions.",
//   },
//   {
//     title: "Website Maintenance",
//     description:
//       "Keep your website secure, optimized, and up-to-date with our expert maintenance services.",
//   },
//   {
//     title: "Social Media Management",
//     description:
//       "Enhance your brand identity and audience engagement across various social media platforms.",
//   },
//   {
//     title: "Mobile & Web Development",
//     description:
//       "Build high-performance websites and mobile apps that deliver seamless user experiences.",
//   },
//   {
//     title: "SEO Services",
//     description:
//       "Improve search engine rankings with expert SEO strategies tailored to your business needs.",
//   },
//   {
//     title: "UI/UX Design",
//     description:
//       "Create stunning, user-friendly interfaces that improve customer interaction and retention.",
//   },
// ];

// export default AboutUs;





import React, { useEffect } from "react";

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
            src="https://th.bing.com/th/id/OIP.p5EQw1ICKaRGGCtYKlsg_AHaFV?rs=1&pid=ImgDetMain"
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
