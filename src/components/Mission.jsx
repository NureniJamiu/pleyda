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
          <p className="text-left my-5">
            Our mission is to cultivate conscientious youths, equipping them
            with essential and diverse skill sets that foster holistic
            development. We aim to empower individuals who are poised to effect
            positive change and drive meaningful impact across all facets of
            society. Our commitment goes beyond the mere acquisition of valuable
            skills; we aspire to nurture character, resilience, and a profound
            sense of social responsibility. By doing so, we prepare our youth to
            navigate challenges effectively and contribute meaningfully to the
            creation of a better, more inclusive society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
