import React from "react";
import Carouselnew from "./Carouselnew";
import png1 from "../../assets/images/carousel/1.png";
import png2 from "../../assets/images/carousel/2.png";
import png3 from "../../assets/images/carousel/3.png";
import png4 from "../../assets/images/carousel/4.png";
// import png5 from "../../assets/images/carousel/5.png";
import pngnew from "../../assets/images/carousel/1n.png";


const images = [png1, png2, png3, png4, pngnew];

function Imagess() {
  return (
    <Carouselnew images={images} timing={4000} className="w-full">
      <h1
        className="text-white font-bold font-mono uppercase text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center"
        style={{ textShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Your Text Here */}
      </h1>
    </Carouselnew>
  );
}

export default Imagess;
