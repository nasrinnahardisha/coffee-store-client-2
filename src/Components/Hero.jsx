import React from "react";
import banner from "../assets/more/3.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-200"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="container">
        <div className="grid grid-cols-12">
          {/* left empty space */}
          <div className="col-span-12 md:col-span-5"></div>
          <div className="hero-content col-span-12 md:col-span-7 text-neutral-content  text-center md:text-left">
            <div>
              <h1 className="mb-5 font-rancho text-[22px] sm:text-[28px] md:text-[40px] lg:text-[55px] leading-tight">
                Would you like a Cup of Delicious Coffee?
              </h1>

              <p className="mb-6 text-sm sm:text-base md:text-[16px] max-w-150 mx-auto md:mx-0 leading-7.5">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>

              <button className="btn font-rancho text-2xl  bg-[#c59d5f] text-white  border border-transparent  hover:bg-black hover:text-white hover:border-white  hover:scale-105 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
