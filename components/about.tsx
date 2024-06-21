"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Experienced <span className="font-medium">Senior Full Stack Developer</span> with over 7 years in blockchain, full-stack web, and mobile application development, 
      specializing in Ethereum and Cosmos ecosystems. Successfully led projects at <span className="font-medium">Multiverse.ai.</span>  {" "}
      Holds a <span className="font-medium">Master's in Computer Science </span>from Tsinghua University and a notable <span className="font-medium">IEEE TDSC publication</span>. 
      Completed a four-year course in three years at the University of Denver. 
      Former U.S. Army service member with an honorable discharge and recipient of the <span className="font-medium">"Sky Master" </span>battalion award.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, 
        experienced saxophonist, taekwondo black belt, earned latin dance rewards{" "}
        <span className="font-medium">Enjoy playing</span> video games, and snowboarding, fishing, etc.
      </p>
    </motion.section>
  );
}
