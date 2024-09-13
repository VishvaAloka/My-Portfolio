"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-transparent bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          <SparklesIcon className="text-yellow-300 mr-3 h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-white text-sm md:text-base font-medium tracking-wide">
            UI/UX Designer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Rajeev
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Vishva Aloka{" "}
            </span>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[35px] lg:text-[58px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-3">I am a</span>
              <TypeAnimation
                sequence={[
                  "UI/UX Designer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Website Designer",
                  2000,
                  "Creative Coder",
                  2000,
                  "Innovator",
                  2000,
                ]}
                speed={50}
                deletionSpeed={30}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-6xl font-bold animate-fadeIn"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            About
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hello! I'm Vishva Aloka, an undergraduate student at the SriLanka
          Information Institute of Technology, specializing in Information
          Technology. I approach my assignments with creativity and attention to
          detail since I am passionate about remaining up to date in the field
          of web development design. Excited to collaborate with fellow
          professionals and contribute to innovative initiatives in the IT
          industry.
        </motion.p>
        <motion.a
          href="/CV.pdf"
          download="CV.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 px-4 text-center text-white cursor-pointer rounded-lg max-w-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          Download CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full h-full  justify-center hidden md:flex items-center grow mt-10"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          className="w-10/12 h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
