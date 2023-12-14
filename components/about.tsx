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
        Hey, I love to talk! Especially to you! <br /> I'm a Computer Science
        Grad currently pursuing my Masters from California State University.{" "}
        <br />
        Ex-Senior Software Engineer(Full-stack), Chargebee 🚀. Chargebee is a
        Subscription and billing software that ranks #1 in G2 spring 2021.{" "}
        <br /> Worked on Java, Vue, AWS Cloud, MySQL, TypeScript, MongoDB,
        ReactJS, Node.js & Python! <br />
        Ya! Javascript⚡️ and java☕️ enthusiast. I am open for work and am
        currently looking for Internship opportunities in Software Engineering,
        Web Development, Front-end or Back-end Engineer roles.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        ping pong, watching movies, and hiking.
      </p>
    </motion.section>
  );
}
