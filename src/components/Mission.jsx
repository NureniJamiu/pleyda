import Image from "next/image";
import React from "react";

import sectionImage from "../../public/mission.png";
import Subheader from "./Subheader";

const Mission = () => {
  return (
    <section
      className=" lg:flex lg:items-center text-center px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8 overflow-hidden lg:h-screen"
      id="mission"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex flex-col md:flex-row mx-auto md:items-center gap-16">
        <div className="relative md:flex-1 text-center mx-auto p-8">
          <div>
            <Image
              src={sectionImage}
              alt="The Big Idea"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="md:flex-1 text-center md:text-left">
          <Subheader title="Our Mission" subtitle="Statement" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            minima beatae quisquam reprehenderit exercitationem possimus, dicta
            laborum aperiam ullam voluptas recusandae cum rerum numquam itaque
            nemo ab, molestiae quod fugit. Dicta laborum aperiam ullam voluptas
            recusandae cum rerum numquam itaque nemo ab, molestiae quod fugit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
