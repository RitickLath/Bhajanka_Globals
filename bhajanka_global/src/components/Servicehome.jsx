import React from "react";
import Servicecard from "./Servicecard";
import imga from "../Imagef/imga.jpg";

function Servicehome() {
  return (
    <div className="flex flex-col items-center  px-14 bg-[#0E1628] text-white">
      <h1 className="text-lg font-serif font-bold pb-1">WHAT WE DO</h1>
      <h1 className="text-3xl font-serif font-semibold text-[#EB4A4A] ">
        Our Expertise & Services
      </h1>

      <div className="mt-10 text-[#B3BFBC] flex justify-center space-x-24 md:space-x-20 sm:space-x-8 text-xl pb-6">
        <div className="group relative sm:h-[70px]">
          <h1 className="hover:text-white hover:cursor-pointer lg:mb-2 sm:mb-10">
            Uniforms
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            Govt. Tenders
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            Accounting Software
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>

        <div className="group relative">
          <h1 className="hover:text-white hover:cursor-pointer mb-2">
            Website Dev.
          </h1>
          <div className="hidden group-hover:block w-[60%] h-1 bg-white"></div>
        </div>
      </div>

      <hr className="-mt-6 lg:w-[63%] md:w-[58%] sm:w-[100%] lg:mx-[230px] opacity-10" />
      <br />
      <Servicecard />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Servicehome;
