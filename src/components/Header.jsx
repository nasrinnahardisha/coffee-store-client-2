import React from "react";
import { Link } from "react-router";
import logo from "../assets/more/logo1.png";

const Header = () => {
  return (
    <div className="bg-[#3b2f2f] text-white py-4">
      <div className="container flex justify-center items-center gap-4">
        
        {/* Logo + Text clickable */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-15 h-17.5 md:w-18.75 md:h-22.5 object-contain"
          />

          <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-rancho font-semibold">
            Espresso Emporium
          </span>
        </Link>

      </div>
    </div>
  );
};

export default Header;