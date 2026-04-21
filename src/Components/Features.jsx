import React from "react";
import coffee from "../assets/icons/1.png";
import  quality from "../assets/icons/2.png";
import grades from "../assets/icons/3.png";
import roasting from "../assets/icons/4.png";


const Features = () => {
  return (
    <div className="bg-[#eceae3] ">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-6 py-10 text-center md:text-left">
          <div>
                <div className="mb-4 flex md:justify-start justify-center">
              <img src={coffee} alt="coffee"  />
            </div>
            <h3 className="font-bold  mb-2">Awesome Aroma</h3>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
          <div>
                <div className="mb-4 flex md:justify-start justify-center">
              <img src={quality} alt="quality" />
            </div>
            <h3 className="font-bold mb-2">High Quality</h3>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div>
                <div className="mb-4 flex md:justify-start justify-center">
              <img src={grades} alt="grades" />
            </div>
            <h3 className="font-bold  mb-2">Pure Grades</h3>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
                <div className="mb-4 flex md:justify-start justify-center">
              <img src={roasting} alt="roasting" />
            </div>
            <h3 className="font-bold  mb-2">Proper Roasting</h3>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
