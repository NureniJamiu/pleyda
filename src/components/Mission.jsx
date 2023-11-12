import Image from "next/image";
import React from "react";

import sectionImage from "../../public/DSC_8238.jpg";
import Subheader from "./Subheader";

const Mission = () => {
  return (
    <section
      className="relative text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8 lg:h-screen overflow-hidden md:flex md:items-center"
      id="mission"
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
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="Our Mission" subtitle="Statement" />
          <p className="my-5 text-left">
            The Purposeful Leadership for Empowerment and Youth Development
            Association (PLEYDA) was initiated in 2016 as the {"'"}Youth Impact
            Club{"'"} with a group of Secondary School Students most of whom are
            now graduates of various institutions across the country. Our
            mission is to create a world where immorality and social vices are
            seen as alien, whilst assisting youths realize and maximize their
            potentials has always been our goal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
