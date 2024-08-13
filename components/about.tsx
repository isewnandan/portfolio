"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView( "About");

  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
    scroll-mt-28"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
    

        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">web development</span>, I decided to expand my
        skills in programming. I had a teacher who introduced me to the profession of{" "}
        <span className="font-medium">data analyst</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Html, CSS, Python  
        </span>
        . I am also familiar with TypeScript and Varcel. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">work student position</span> as a Data
        analyst.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and going to the gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about Prisma, Pandas and Numphy
        </p>
    </motion.section>
  )
}
