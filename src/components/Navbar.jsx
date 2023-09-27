"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { links } from "@/mockDB";
import { Menu } from "lucide-react";

const Navbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <nav
      className={`relative px-10 md:px-20 lg:px-28 py-5 md:py-3 border-b mx-auto ${className}`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className=" font-clash text-xl md:text-2xl cursor-pointer"
        >
          <span className=" text-red-500 ">PLEYDA</span>
        </Link>

        <div className="flex items-center justify-between md:gap-12 lg:gap-20">
          <div className="hidden lg:flex gap-8">
            {links.map((_, index) => (
              <Link
                key={index}
                href={_.url}
                className="text-sm hover:text-red-600"
              >
                {_.title}
              </Link>
            ))}
          </div>

          <div>
            <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
              <span className="text-red-700">
                <Menu />
              </span>
            </div>

            <Link href="/register">
              <Button className="hidden lg:flex btn-gradient rounded px-10 text-sm">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile navItems fold */}
      {toggle && (
        <div
          className="lg:hidden fixed w-full h-screen top-0 left-0 bg-white px-10 py-3 z-50 "
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
        >
          {/* close menu icon */}
          <div
            className="float-right bg-gradient-to-b from-purple-500 to-pink-500 rounded-full p-[2px] cursor-pointer"
            onClick={handleToggle}
          >
            <div className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {/* end close menu icon */}
          <div className="mt-16 flex flex-col gap-8">
            {links.map((_, index) => (
              <Link
                key={index}
                href={_.url}
                className=""
                data-aos="fade-right"
                data-aos-duration={`1${index + 1}00`}
              >
                {_.title}
              </Link>
            ))}

            <Link href="/register">
              <Button
                className="w-32 btn-gradient rounded"
                data-aos="fade-right"
                data-aos-duration="1600"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
