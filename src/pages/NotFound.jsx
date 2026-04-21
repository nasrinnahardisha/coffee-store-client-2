import React from "react";
import { Link } from "react-router";
import errorBg from "../assets/404/404.gif";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Link
        to="/"
        className="text-center mx-auto text-[#331A15] text-[30px] font-rancho flex items-center gap-2 pt-10 pb-16"
      >
        <FaArrowLeft /> Back to home
      </Link>

      {/* MAIN CONTENT */}
   <div
  className="flex-1 w-full bg-no-repeat bg-center bg-contain flex items-center justify-center"
  style={{ backgroundImage: `url(${errorBg})` }}
></div>
    </div>
  );
};

export default NotFound;
