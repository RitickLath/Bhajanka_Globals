import React from "react";
import Rcard from "./Rcard";

function Reason() {
  return (
    <div className=" bg-[#0E1628] lg:pl-24 lg:pr-24">
      <h1 className="text-center pt-24 pb-6 text-3xl font-serif text-white font-semibold">
        Reason to choose <span className="text-[#C68EF3]">Bhajanka Globals</span>
      </h1>
      <div className="flex md:flex-row md:items-center sm:flex-col sm:items-center lg:space-x-2 sm:space-y-4 md:space-y-4 pb-20">
        <Rcard name="Reliability" number="one" />
        <Rcard name="Transparency" number="two" />
        <Rcard name="Simplicity" number="three" />
      </div>
    </div>
  );
}

export default Reason;
