import React from "react";

function Rcard(props) {
  return (
    <div className="lg:w-[400px] lg:h-[370px] sm:w-[85%] aspect-auto p-4 border-2 border-none bg-[#211047b2] rounded-lg hover:bg-[#21104754] hover:cursor-pointer">
      <button className="px-4 py-1 bg-[#C68EF3] rounded-lg mb-24">
        #{props.number}
      </button>
      <div className="align-middle">
        <h1 className=" text-2xl p-2 font-serif font-semibold text-white">
          {props.name}
        </h1>
        <p className=" font-sans text-[#767d8b]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptate
          facilis fugit earum accusantium repudiandae odio dolor perspiciatis
          consectetur deleniti, quod, distinctio possimus porro! Ipsa, minus.
          Deserunt iste id ea.
        </p>
      </div>
    </div>
  );
}

export default Rcard;
