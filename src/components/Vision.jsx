import Image from "next/image";
import React from "react";

import lady from "../../public/vision.png";
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
          <Image src={lady} alt="The Big Idea" width={500} height={500} />
          <Image
            src={whiteStar}
            width={12}
            height={12}
            alt="white star"
            className="absolute top-32 left-0 md:top-80 animate-ping"
          />
          <div className="hidden md:block big-circle-gradient absolute w-32 h-32 top-20 right-20 -z-10 rounded-full"></div>
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="A Glimpse into" subtitle="Tomorrow" />
          <p className="my-5 text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            libero quisquam error quos sequi enim natus, pariatur quae deserunt,
            aliquam dolores ex consequatur iusto. Asperiores, enim? Voluptas
            expedita suscipit ratione? pariatur quae deserunt, aliquam dolores
            ex consequatur iusto. Asperiores, enim? Voluptas expedita suscipit
            ratione?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
