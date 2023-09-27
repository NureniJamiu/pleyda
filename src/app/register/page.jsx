import React from "react";
import Image from "next/image";
import sectionImage from "../../../public/register.png";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";

const Page = () => {
  return (
    <>
      <Navbar className="hidden md:block" />
      <main className="relative flex items-center justify-center px-12 md:px-22 lg:px-44 md:h-[calc(100vh-66px)] overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-8">
          {/* Flex one */}
          <div
            className="md:relative w-[800px] h-[500px] px-12 pt-5 md:px-0 md:pt-0 flex-1 bg-green-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="ml-14 md:ml-0 md:hidden font-clash text-xl text-red-500">
              Register
            </h2>
            <Image
              src={sectionImage}
              alt="Register"
              fill
              className="hidden md:block"
            />
            <Image
              src={sectionImage}
              alt="Register"
              width={400}
              height={400}
              className="md:hidden mx-auto"
            />
          </div>
          {/* Flex two */}
          <div
            className="flex-1 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <RegistrationForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
