import React from "react";

import logo from "../assets/more/logo1.png";
import bg from "../assets/more/13.jpg";
import bottomBg from "../assets/more/24.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center pt-10 m-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        {/* LEFT SIDE */}
      <div className="space-y-4 text-center md:text-left">
  <img src={logo} alt="logo" className="w-20 mx-auto md:mx-0" />

  <h2 className="font-rancho">Espresso Emporium</h2>

  <p className="max-w-md text-gray-700 mx-auto md:mx-0">
    Always ready to be your friend. Come & Contact with us to share your
    memorable moments, to share with your best companion.
  </p>

  {/* Social Icons */}
  <div className="flex justify-center md:justify-start gap-4">
    <FaFacebook className="text-[40px] text-[#331A15] hover:text-[#331A15]/80 transition cursor-pointer" />
    <FaTwitter className="text-[40px] text-[#331A15] hover:text-[#331A15]/80 transition cursor-pointer" />
    <FaInstagramSquare className="text-[40px] text-[#331A15] hover:text-[#331A15]/80 transition cursor-pointer" />
    <FaLinkedin className="text-[40px] text-[#331A15] hover:text-[#331A15]/80 transition cursor-pointer" />
  </div>

  {/* Contact */}
  <div className="space-y-4 mt-4">
    <h3>Get in Touch</h3>

    <p className="flex items-center justify-center md:justify-start gap-5">
      <FaPhoneAlt />
      +88 01712345678
    </p>

    <p className="flex items-center justify-center md:justify-start gap-5">
      <FaMessage />
      info@gmail.com
    </p>

    <p className="flex items-center justify-center md:justify-start gap-5">
      <FaLocationDot />
      72, Wall street, King Road, Dhaka
    </p>
  </div>
</div>

        {/* RIGHT SIDE FORM */}
        <div className=" backdrop-blur-md p-6 rounded-xl">
          <h2 className="font-rancho mb-4 text-center">Connect with Us</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 bg-white/40 p-3 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 bg-white/40 p-3 rounded-md outline-none"
          />

          <textarea
            placeholder="Message"
            className="w-full mb-3 bg-white/40 p-3 rounded-md  outline-none h-32"
          ></textarea>

          <button className="border border-[#331A15] px-6 py-2 rounded-full font-rancho hover:bg-[#331A15] hover:text-white transition">
            Send Message
          </button>
        </div>
      </div>

      {/* Bottom bar with separate background */}
      <div
        className="text-center mt-12 text-white py-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bottomBg})` }}
      >
        Copyright Espresso Emporium ! All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
