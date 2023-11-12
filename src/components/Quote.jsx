import { QuoteIcon } from "lucide-react";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = () => {
  return (
    <section className="btn-gradient lg:items-center px-10 md:px-20 lg:px-28 py-8 overflow-hidden lg:h-auto text-white">
      <div>
        <div className="md:w-96 mx-auto mb-8">
          <span>
            <FaQuoteLeft size={25} />
          </span>
          <p className="text-lg md:text-2xl">
            ...and after our death, don{"'"}t look for us at the tomb of our
            graves, but search for us in the hearts of those whom we{"'"}ve
            inspired.
          </p>
          <span className="float-right">
            <FaQuoteRight size={35} />
          </span>
        </div>
        <span className="float-right">- Jallaludeen</span>
      </div>
    </section>
  );
};

export default Quote;
