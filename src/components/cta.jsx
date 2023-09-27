import React from "react";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="flex items-center justify-center py-28 px-12 border-b border-zinc-300 bg-gray-100">
      <div className="w-[500px] font-clash text-center">
        <h2 className="text-3xl mb-6">
          Ready to start your journey towards purposeful leadership?
        </h2>
        <Button className="btn-gradient px-10 w-full text-xl py-6">
          Get Involved
        </Button>
      </div>
    </section>
  );
};

export default Cta;
