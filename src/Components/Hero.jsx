import React from "react";
import image from "../assets/image.png";

const Hero = () => {
  return (
    <div className="px-20 py-30">
      <div
        className="bg-cover bg-center w-full h-150  flex flex-col justify-center pl-10 "
        style={{ backgroundImage: `url(${image})` }} >
            <div><h1 className=" text-7xl text-amber-300  font-rubik [text-shadow:2px_2px_0px_black]">Top 100 </h1>
            <h1 className=" text-white text-7xl font-rubik [text-shadow:2px_2px_0px_black]">Five-Ingredient Dinners</h1></div>
            
            <button className="bg-amber-300 rounded w-40 h-15 cursor-pointer">
                SEE THEM ALL
            </button>
      </div>
    </div>
  );
};

export default Hero;
