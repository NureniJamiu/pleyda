"use client";

import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Services from "@/components/Services";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cta from "@/components/cta";
import Quote from "@/components/Quote";
import Team from "@/components/Team";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Quote />
      <Mission />
      <Vision />
      <Services />
      <Team />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
