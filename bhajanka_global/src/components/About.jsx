import React from "react";
import imga from "../Imagef/imga.jpg";

function About() {
  return (
    <div className="lg:pl-24 mt-12 flex lg:flex-row sm:flex-col sm:items-center sm:space-y-4 sm:align-middle bg-[#0E1628]">
      <div className="w-[600px]">
        <h1 className=" text-[#C68EF3] text-4xl font-sans font-bold">
          Pioneering <span className="text-white">Excellence,</span>
        </h1>
        <h1 className="text-5xl  text-white font-sans font-bold">
          Focused on <span className="text-[#C68EF3]">you</span>
        </h1>
        <p className="text-[#B3BFBC] mt-6">
          At Bhajanka Global, we are dedicated to transforming your business
          dreams into reality. Share with us the challenges you face, your
          business objectives, and the unique requirements that define your
          journey. Together, let's unlock the full potential of your business
          and pave the way for unparalleled success.
        </p>
        {/*  */}
        <button className="mt-4 px-4 py-2 border-2 border-none rounded-md bg-[#EB4A4A] hover:bg-[#af5252] text-white  ">
          Who are we!
        </button>
      </div>
      <div>
        <img
          className="w-[550px] h-[400px] rounded-lg pb-"
          src={imga}
          alt="img-1"
        />
        
      </div>
    </div>
  );
}

export default About;
