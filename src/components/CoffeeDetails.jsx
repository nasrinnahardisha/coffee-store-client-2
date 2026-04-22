import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const imageUrl = coffee.photo
    ? `https://coffee-store-server-2-jxtc.vercel.app/Images/${coffee.photo}`
    : "/default.png";

  return (
    <div className="bg-[#F4F3F0] py-16 flex justify-center items-center px-16">

      {/* CENTER WRAPPER */}
      <div className="w-full max-w-6xl">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="text-[#331A15] text-[30px] font-rancho flex items-center gap-2 mb-10"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* MAIN FLEX (IMPORTANT FIX) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt={coffee.name}
              className="w-[350px] h-[450px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-4 text-[#331A15] text-left">

            <h2 className="text-3xl font-bold mb-6">
              {coffee.name}
            </h2>

            <p><span className="font-bold">Name:</span> {coffee.name || "N/A"}</p>
            <p><span className="font-bold">Price:</span> {coffee.price || "N/A"}</p>
            <p><span className="font-bold">Quantity:</span> {coffee.quantity || "N/A"}</p>
            <p><span className="font-bold">Supplier:</span> {coffee.supplier || "N/A"}</p>
            <p><span className="font-bold">Taste:</span> {coffee.taste || "N/A"}</p>
            <p><span className="font-bold">Details:</span> {coffee.details || "N/A"}</p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;