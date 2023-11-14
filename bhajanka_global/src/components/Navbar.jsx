import React from "react";
import lo from "../Imagef/lo.jpeg";

function Navbar() {
  return (
    <div className="pt-8 pl-24 pb-6 pr-24 flex justify-between">
      <div>
        <img className="border-[1px] p-[0.5px] rounded-lg -mt-2 w-[200px] h-[40px]" src={lo} alt="a" />
        {/* <h1 className="font-semibold text-white ">BHAJANKA GLOBALS.</h1> */}
      </div>

      <div className="flex space-x-6 text-[#767d8b] h-[18px] ">
        <div className="group relative">
          <h1 className="cursor-pointer text-[#af5252] ">About Us</h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white">
            Product & Services
          </h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white">Testimonials</h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
        <div className="group relative">
          <h1 className="cursor-pointer hover:text-white">Contact Us</h1>
          <div className="hidden group-hover:block w-6 h-1 bg-white"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
