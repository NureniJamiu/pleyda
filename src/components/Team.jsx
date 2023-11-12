import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="px-10 md:px-20 lg:px-28 border-b border-zinc-700 py-8">
      <div className="grid grid-cols-3 text-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
};

export default Team;
