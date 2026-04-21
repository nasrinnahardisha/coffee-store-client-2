import React from "react";  


import img1 from "../assets/cups/Rectangle 9.png";
import img2 from "../assets/cups/Rectangle 10.png";
import img3 from "../assets/cups/Rectangle 11.png";
import img4 from "../assets/cups/Rectangle 12.png";
import img5 from "../assets/cups/Rectangle 13.png";
import img6 from "../assets/cups/Rectangle 14.png";
import img7 from "../assets/cups/Rectangle 15.png";
import img8 from "../assets/cups/Rectangle 16.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Instagram = () => {
  return (


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
  {images.map((img, i) => (
    <div
      key={i}
      className="relative overflow-hidden rounded-lg group cursor-pointer"
    >
      <img
        src={img}
        className="w-full h-full object-cover 
        transition duration-300 ease-in-out 
        group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/0 
      group-hover:bg-black/30 
      transition duration-300 flex items-center justify-center">

        <div className="text-white text-2xl opacity-0 
        group-hover:opacity-100 transition duration-300" />
        
      </div>
    </div>
  ))}
</div>
  );
};

export default Instagram;
