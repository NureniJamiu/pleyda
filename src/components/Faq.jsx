import React from "react";
import sectionImage from "../../public/faq.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Subheader from "./Subheader";
import Image from "next/image";
import { accordionData } from "@/mockDB";

const Faq = () => {
  return (
    <section className="px-10 md:px-20 lg:px-28 py-12 border-b overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12 text-center md:text-left">
        {/* Left Column */}
        <div className="flex-1">
          <div>
            <Subheader
              title="Frequently Asked"
              subtitle="Questions"
              animateDirection="right"
            />
            <p
              className="my-5 text-sm"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Below, you{"'"}ll find a list of frequently asked questions that
              we commonly encounter. These questions cover a range of topics
              related to our organization, its mission, activities, and how
              individuals can get involved.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full text-xs">
              {accordionData.map((_, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <AccordionTrigger>{_?.title}</AccordionTrigger>
                  <AccordionContent>{_?.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        {/* Right Column */}
        <div
          className="md:flex-1 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src={sectionImage}
            alt="The Big Idea"
            width={500}
            height={500}
          />
          <div className="hidden md:block big-circle-gradient absolute w-32 h-32 top-20 right-20 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
