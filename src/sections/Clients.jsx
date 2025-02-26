import React, { useEffect, useState } from "react";
import { client } from "../components/export";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {

  // State to track the currently expanded client index
  const [expandedClient, setExpandedClient] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  // Toggle expanded state for a specific client
  const toggleExpand = (index) => {
    setExpandedClient((prevIndex) => (prevIndex === index ? null : index)); // Collapse if the same card is clicked
  };

  return (
    <div className={"light bg-white"}>
      <section
        id="testimonials"
        className="lg:w-[95%] w-full h-fit  m-auto bg-cover bg-[#F3F5F5] bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            className="text-[32px] font-semibold leading-10 text-[#000045]"
          >
            TESTIMONIALS
          </h1>
          <h2
            data-aos="zoom-in"
            className="text-[42px] font-semibold leading-[1.4]"
          >
            What our clients say
          </h2>
        </div>

        <div
          id="clients-box"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full"
        >
          {client.map((item, index) => {
            const isExpanded = expandedClient === index;

            return (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className={`bg-[#000045] text-white hover:bg-[linear-gradient(135deg,#93a5cf_10%,#e4efe9_100%)] hover:text-black cursor-pointer p-8 flex flex-col justify-between items-center gap-4 rounded-xl w-full h-full`}
              >
                <div className="flex justify-start items-center w-full gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[70px] transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h1 className="text-[20px] font-semibold">{item.name}</h1>
                    <h1>{item.text}</h1>
                  </div>
                </div>

                {/* Read More Functionality */}
                <p className="text-lg text-justify">
                  {isExpanded
                    ? item.feedback
                    : `${item.feedback.substring(0, 100)}...`}
                  {item.feedback.length > 100 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-500 hover:underline ml-2"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>

                {/* Star Ratings */}
                <div className="flex justify-start items-start gap-2 w-full">
                  {[...Array(index === 2 || index === 4 ? 4 : 5)].map(
                    (_, i) => (
                      <FaStar key={i} className="size-4 text-yellow-400" />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Clients;
