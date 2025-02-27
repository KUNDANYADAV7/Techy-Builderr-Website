// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "@popmotion/popcorn";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { useAuth } from "../context/AuthProvider";
// import {IMAGES } from '../sections/herocarousel/Images'

// const sliderVariants = {
//   incoming: (direction) => ({
//     x: direction > 0 ? "100%" : "-100%",
//     opacity: 0,
//   }),
//   active: { x: 0, opacity: 1 },
//   exit: (direction) => ({
//     x: direction > 0 ? "-100%" : "100%",
//     opacity: 0,
//   }),
// };

// const sliderTransition = {
//   duration: 1,
//   ease: [0.56, 0.03, 0.12, 1.04],
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 1.5, ease: "easeOut" },
//   },
// };

// const loadingVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, repeat: Infinity, repeatType: "mirror" },
//   },
// };

// const Car = () => {
//   const { carousels } = useAuth();
//   const [[imageCount, direction], setImageCount] = useState([0, 0]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (carousels && carousels.length > 0) {
//       setLoading(false);
//     }
//   }, [carousels]);

//   const activeImageIndex = wrap(0, carousels.length, imageCount);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageCount([imageCount + 1, 1]);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [imageCount]);

//   const changeImage = (newIndex, newDirection) => {
//     setImageCount([newIndex, newDirection]);
//   };

//   return (
//     <main  id="car" className="relative w-full flex flex-col items-center bg-white text-white mb-0">
//       <div className="w-full flex items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
//         <button
//           onClick={() => changeImage(imageCount - 1, -1)}
//           className="absolute left-4 sm:left-8 z-10 bg-black text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-300"
//         >
//           <FiArrowLeft size={24} className="sm:size-6" />
//         </button>

//         {/* Loading Spinner */}
//         {loading ? (
//           <div className="flex justify-center items-center min-h-[35vh] sm:min-h-[75vh] lg:min-h-[85vh]">
//             <motion.div
//               className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent"
//               variants={loadingVariants}
//               initial="hidden"
//               animate="visible"
//             />
//           </div>
//         ) : (
//           <div className="relative w-full overflow-hidden flex justify-center items-center mx-auto max-w-[100%] sm:max-w-[85%] lg:max-w-[90%] min-h-[35vh] sm:min-h-[75vh] lg:min-h-[85vh]">
//             <AnimatePresence initial={false} custom={direction}>
//               <motion.div
//                 key={imageCount}
//                 style={{
//                   backgroundImage: `url(${carousels[activeImageIndex]?.image?.url})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//                 className="absolute inset-0 w-full h-full"
//                 custom={direction}
//                 variants={sliderVariants}
//                 initial="incoming"
//                 animate="active"
//                 exit="exit"
//                 transition={sliderTransition}
//               >
//                 <div className="absolute inset-0 bg-black/40 flex px-10 sm:px-20 lg:px-36 items-start sm:items-center pt-18 sm:pt-0">
//                   <motion.div
//                     className="text-white lg:max-w-xl max-w-[250px] w-full flex flex-col justify-center min-h-[100px]"
//                     initial="hidden"
//                     animate="visible"
//                     variants={textVariants}
//                   >
//                     <h2 className="font-bold text-[24px] sm:text-[50px] lg:text-[50px] xl:text-[50px] leading-[30px] sm:leading-[60px] lg:leading-[90px] xl:leading-[73px]">
//                       {carousels[activeImageIndex]?.title}
//                     </h2>
//                     <p className="mt-0 md:mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-5 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[48px] min-h-[60px] w-full">
//                       {carousels[activeImageIndex]?.description}
//                     </p>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         )}

//         <button
//           onClick={() => changeImage(imageCount + 1, 1)}
//           className="absolute right-4 sm:right-8 z-10 bg-black text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-500"
//         >
//           <FiArrowRight size={24} className="sm:size-6" />
//         </button>
//       </div>

//       {/* Thumbnail Navigation */}
//       {!loading && (
//         <div className="mt-6 flex justify-center gap-3 max-w-[90%] overflow-x-auto">
//           {carousels.map((image, index) => (
//             <div
//               key={image._id}
//               onClick={() =>
//                 setImageCount([index, index > activeImageIndex ? 1 : -1])
//               }
//               className="relative h-24 w-20 sm:h-16 sm:w-12 cursor-pointer"
//             >
//               <img
//                 src={image.image?.url}
//                 alt="Thumbnail"
//                 className="h-full w-full object-cover rounded-md border border-white"
//               />
//               <div
//                 className={`absolute top-0 left-0 h-full w-full bg-gray-800 transition-transform duration-1000 ease-in-out ${
//                   index === activeImageIndex ? "scale-x-100" : "scale-x-0"
//                 }`}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// };

// export default Car;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IMAGES } from "../sections/herocarousel/Images";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  active: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const textVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Car = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCount([imageCount + 1, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageCount]);

  const changeImage = (newIndex, newDirection) => {
    setImageCount([newIndex, newDirection]);
  };

  return (
    <main id="." className="relative w-full flex flex-col items-center bg-white text-white mb-0">
      <div className="w-full flex items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8">
        <button
          onClick={() => changeImage(imageCount - 1, -1)}
          className="absolute left-4 sm:left-8 z-10 bg-black text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-300"
        >
          <FiArrowLeft size={24} className="sm:size-6" />
        </button>
        

        <div className="relative w-full overflow-hidden flex justify-center items-center mx-auto max-w-[100%] sm:max-w-[85%] lg:max-w-[90%] min-h-[35vh]  sm:min-h-[75vh] lg:min-h-[85vh]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex]?.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="absolute inset-0 w-full h-full"
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
            >
              <div className="absolute inset-0 bg-black/40 flex px-10 sm:px-20 lg:px-36 items-start sm:items-center pt-18 sm:pt-0">
                <motion.div
                  className="text-white lg:max-w-xl max-w-[250px] w-full flex flex-col justify-center min-h-[100px]"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <h2 className="font-bold text-[24px] sm:text-[50px] lg:text-[50px] xl:text-[50px] leading-[30px] sm:leading-[60px] lg:leading-[90px] xl:leading-[73px]">
                    {IMAGES[activeImageIndex]?.title}
                  </h2>
                  <p className="mt-0 md:mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-5 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[48px] min-h-[60px] w-full">
                    {IMAGES[activeImageIndex]?.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => changeImage(imageCount + 1, 1)}
          className="absolute right-4 sm:right-8 z-10 bg-black text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-500"
        >
          <FiArrowRight size={24} className="sm:size-6" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex justify-center gap-3 max-w-[90%] overflow-x-auto">
        {IMAGES.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setImageCount([index, index > activeImageIndex ? 1 : -1])}
            className="relative h-24 w-20 sm:h-16 sm:w-12 cursor-pointer"
          >
            <img
              src={image.imageSrc}
              alt="Thumbnail"
              className="h-full w-full object-cover rounded-md border border-white"
            />
            <div
              className={`absolute top-0 left-0 h-full w-full bg-gray-800 transition-transform duration-1000 ease-in-out ${
                index === activeImageIndex ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Car;
