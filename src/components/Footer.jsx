import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-white h-auto px-10 md:px-20 lg:px-28 py-12 min-h-[180px] text-sm"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* flex one */}
        <div className="flex-1">
          <Link href="/" className=" font-clash text-xl md:text-2xl">
            <span className=" text-red-600 ">PLEYDA</span>
          </Link>
          <p className="mt-3 mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            itaque, autem similique commodi quaerat sapiente consequatur
            corporis, cum consectetur fugiat hic cupiditate facere ipsa magnam.
            Dolorem accusamus hic ex quia.
          </p>

          <p>
            Copyright <span className="text-red-600 font-bold">|</span> Privacy
            Policy
          </p>
        </div>
        {/* flex two  */}
        <div className="flex-1 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h5 className="text-red-600 font-semibold mb-3">Useful Links</h5>
            <ul className="flex flex-col  gap-3">
              <li>Mission</li>
              <li>Team</li>
              <li>Donate</li>
              <li>Contact</li>
            </ul>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-red-600">Follow us</span>
              <div className="flex items-center gap-2">
                <Link href="https://instagram.com">
                  <FaInstagram size={20} />
                </Link>
                <Link href="https://x.com">
                  <RiTwitterXFill size={20} />
                </Link>
                <Link href="https://facebook.com">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="https://linkedin.com">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-red-600 font-semibold mb-3">Contact Us</h5>
            <div className="mt-3 flex items-center gap-3">
              <PhoneCall size={20} />
              <span>+234 12345678</span>
            </div>
            <div className="mt-3 flex items-start gap-3">
              <LuMapPin size={22} />
              <p className="w-32"> 14, Ilori street, Isolo, Lagos. Nigeria</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-16 text-center">All rights reserved. © Pleyda.</p>
      <p className="mt-2 text-center">
        Made with love by{" "}
        <Link
          href="https://nurenijamiu.netlify.app"
          className="text-red-500 font-semibold"
        >
          dhulNurein
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
