import Image from "next/image";
import React from "react";

import sectionImage from "../../public/DSC_8226.jpg";

const TeamCard = ({ image, name, position }) => {
  return (
    <div>
      <Image src={image} height={300} width={300} alt="team" />
      <div className="">
        <h4 className="font-semibold">{name} </h4>
        <span className="text-sm">{position} </span>
      </div>
    </div>
  );
};

export default TeamCard;
