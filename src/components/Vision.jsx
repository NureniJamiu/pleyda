import Image from "next/image";
import React from "react";

import sectionImage from "../../public/DSC_8235.jpg";
import whiteStar from "../../public/star-white.png";
import Subheader from "./Subheader";

const Vision = () => {
  return (
    <section
      className="relative text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8 lg:h-screen overflow-hidden md:flex md:items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 md:16">
        <div className="md:flex-1 relative">
          <Image
            src={sectionImage}
            alt="The Big Idea"
            width={500}
            height={500}
          />
          <Image
            src={whiteStar}
            width={12}
            height={12}
            alt="white star"
            className="absolute top-32 left-0 md:top-80 animate-ping"
          />
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="A Glimpse into" subtitle="Tomorrow" />
          <p className="my-5 text-left">
            Our vision is to cultivate a future where empowered youths, equipped
            with invaluable skills and guided by moral principles rise as
            exemplary leaders, fostering a society free from immorality and
            marked by the realization and development of hidden potentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
