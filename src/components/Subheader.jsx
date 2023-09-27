import Image from "next/image";
import React from "react";

import purpleStar from "../../public/star-purple-light.png";

const Subheader = ({ title, subtitle, optional }) => {
  return (
    <>
      <div className="relative">
        <div className="font-clash text-2xl md:text-3xl">
          <h2 className="">{title}</h2>
          <span className="text-red-500">{subtitle}</span>
        </div>
      </div>
      <p className="md:my-8 text-sm text-gray-300">{optional}</p>
    </>
  );
};

export default Subheader;
