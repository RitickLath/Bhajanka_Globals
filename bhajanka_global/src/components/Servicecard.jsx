import React from "react";
import imga from "../Imagef/imga.jpg";

function Servicecard(props) {
  return (
    <div className="flex flex-row items-center lg:mx-[230px]  lg:space-x-20 md:space-x-6 sm:space-x-6 lg:w-[55%] sm:w-[90%] ">
      <div className="">
        <img className="w-[350px] rounded-lg" src={imga} alt="" />
      </div>

      <div className=" w-[450px]">
        <h1 className="text-4xl text-[#C68EF3] font-serif font-bold mb-6">
          Uniforms
        </h1>
        <div className="mb-4">
          <li className="text-[#767d8b]">
            Hello this is point 1st of ddwd mdczc
          </li>

          <li className="text-[#767d8b]">
            Hello this is point 2ndzcc ddfxced fxzceee
          </li>
          <li className="text-[#767d8b]">
            Hello this is point 3rddddd ddssss seeeee{" "}
          </li>
        </div>
        <button className="mt-4 px-4 py-2 border-2 border-none rounded-md bg-[#EB4A4A] hover:bg-[#af5252] text-white  ">
          Know More
        </button>
      </div>
    </div>
  );
}

export default Servicecard;
