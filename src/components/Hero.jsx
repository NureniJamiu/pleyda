"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import line from "../../public/line.png";
import heroImage from "../../public/DSC_8221.jpg";
// import heroImage from "../../public/hero.png
import grayStar from "../../public/star-gray.png";
import flare from "../../public/purple-flare.png";
import Star from "./Star";
import Link from "next/link";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  const seconds = timeLeft % 60;
  return (
    <section
      className="relative border-b overflow-hidden pb-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col lg:flex-row md:items-center">
        {/* flex one  */}
        <div className="flex-1 w-full text-center md:text-left lg:pl-28">
          <div className="relative my-5 lg:hidden w-64 md:w-[300px] mx-auto">
            <span className="italic font-semibold md:text-xl">
              Productivity our watchword
            </span>
            <Image
              src={line}
              alt="line"
              width={90}
              height={90}
              className="absolute -bottom-2 right-2"
            />
          </div>

          <div className="relative my-16 md:my-0">
            <Star name={grayStar} size={8} posOne="-top-10" posTwo="right-14" />
            <div className="relative mt-14">
              <div className="relative text-3xl font-clash md:text-5xl text-center lg:text-left md:leading-tight w-[350px] lg:mx-0 md:w-[500px] mx-auto">
                <span>
                  The Purposeful Leadership for Empowerment &{" "}
                  <span className="text-red-500">
                    Youth Development Association
                  </span>
                </span>
              </div>
            </div>
            <p className="relative my-3 text-center w-80 mx-auto lg:text-left lg:mx-0 md:w-[520px] md:text-xl lg:w-[500px]">
              Whether you are a student, young professional, or simply someone
              with a passion for leadership, there{"'"}s a place for you here.
            </p>

            <div className="relative text-center w-60 mx-auto lg:mx-0 lg:text-left">
              <Link href="/register">
                <Button className="btn-gradient rounded px-8 py-6 my-6 md:w-44">
                  Get Involved
                </Button>
              </Link>
              <Star
                name={grayStar}
                size={8}
                className="top-10 right-0 md:top-20 md:-right-20 animate-ping"
              />
            </div>
          </div>
        </div>

        {/* flex two  */}
        <div className="relative lg:flex-1">
          <div className="hidden lg:block my-5 md:my-2 w-[500px] mx-auto">
            <div className="relative italic md:text-lg font-semibold lg:text-xl text-right w-[450px]">
              <span>productivity our watchword</span>
              <Image
                src={line}
                alt="line"
                width={90}
                height={190}
                className="absolute -bottom-1 right-2"
              />
            </div>
          </div>
          <Image src={heroImage} alt="hackathon guy" width={800} height={800} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
