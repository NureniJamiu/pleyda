import Image from "next/image";
import React from "react";

import sectionImage from "../../public/DSC_8226.jpg";

const TeamCard = () => {
  return (
    <div>
      <Image src={sectionImage} height={300} width={300} alt="team" />
      <div>
        <h4>Mr. Ibrahim Olawuyi </h4>
        <p>Facilitator </p>
      </div>
    </div>
  );
};

export default TeamCard;
