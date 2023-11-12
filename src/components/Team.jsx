"use client";

import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TeamCard from "./TeamCard";
import Subheader from "./Subheader";

import chairman from "../../public/DSC_8239.jpg";
import secretary from "../../public/DSC_8226.jpg";
import member from "../../public/nimat.jpg";
import amana from "../../public/amana.jpg";
import badru from "../../public/badru.jpg";

const slides = [
  {
    name: "Mr. Ibrahim Olawuyi",
    position: "Chairman, Board of Trustees",
    image: chairman,
  },
  {
    name: "Mr. Qasim Yusuf",
    position: "Secretary, Board of Trustees",
    image: secretary,
  },
  {
    name: "Dr. Ni'mat Ibikunle",
    position: "Member, Board of Trustees",
    image: member,
  },
  {
    name: "Mr. Badrudeen Ajibola",
    position: "President",
    image: badru,
  },
  {
    name: "Miss. Amanah Alao Seneire",
    position: "Welfare Director",
    image: amana,
  },
];

const Team = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section
      className=" px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8"
      // data-aos="fade-up"
      // data-aos-duration="1500"
    >
      <div className="mt-5">
        <div className="text-center">
          <Subheader title="Some Distinguished" subtitle="Personalities" />
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          virtual
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <TeamCard
                image={slideContent.image}
                name={slideContent.name}
                position={slideContent.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
