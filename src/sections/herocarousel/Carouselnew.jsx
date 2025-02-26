import React, { useEffect, useState } from "react";

function cx(...name) {
  return name.filter(Boolean).map(String).join(" ") || undefined;
}

function Carouselnew({ images, children, className, timing = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timing);

    return () => clearInterval(interval);
  }, [timing, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={cx("relative bg-white overflow-hidden sm:w-full", className)}>
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full shadow-md p-3 sm:p-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-full shadow-md p-3 sm:p-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Section with Zoom Effect */}
      <div className="relative w-full h-auto aspect-[16/9] overflow-hidden flex justify-center items-center mx-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[90%]">
        <img
          key={currentIndex}
          src={images[currentIndex].imageSrc}
          alt="Carousel Image"
          className="absolute w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out"
          style={{
            animation: "zoomEffect 6s ease-in-out forwards",
          }}
        />
        
        {/* Overlay Content */}
        <div className="absolute bottom-10 left-4 sm:left-8 lg:left-12 text-white text-left z-10 animate-slideInZoom">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{images[currentIndex].title}</h2>
          <p className="text-sm sm:text-base max-w-md">{images[currentIndex].description}</p>
        </div>
      </div>

      <style>
        {`
        @keyframes zoomEffect {
          0% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slideInZoom {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-slideInZoom {
          animation: slideInZoom 1s ease-out;
        }
        `}
      </style>
    </div>
  );
}

export default Carouselnew;
