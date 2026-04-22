import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

// assets import
import bgLeft from "../assets/more/4.png";
import bgRight from "../assets/more/5.png";

const PopularProducts = () => {
  const loadedData = useLoaderData();
  const initialCoffees = Array.isArray(loadedData)
    ? loadedData
    : loadedData.data || [];

  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="relative py-16 overflow-hidden">
      <img
        src={bgLeft}
        className="absolute left-0 top-0 w-60 opacity-20 pointer-events-none"
        alt=""
      />

      <img
        src={bgRight}
        className="absolute right-0 bottom-0 w-60 opacity-20 pointer-events-none"
        alt=""
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-[#8c6a3d]">--- Sip & Savor ---</p>
          <h2 className="text-4xl font-bold font-rancho mb-4">
            Our Popular Products
          </h2>
          <Link to="/addCoffee">
            <button
              className="bg-[#c59d5f] text-white px-6 py-2 rounded-md font-semibold 
              hover:bg-black hover:text-white transition duration-300"
            >
              Add Coffee ☕
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coffees.map(
            (coffee) => (
              console.log(coffee),
              (
                <CoffeeCard
                  key={coffee._id}
                  coffees={coffees}
                  setCoffees={setCoffees}
                  coffee={coffee}
                />
              )
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
