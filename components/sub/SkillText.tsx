"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-3 border border-transparent bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md opacity-90 hover:opacity-100 transition-opacity duration-300"
      >
        <SparklesIcon className="text-yellow-300 mr-3 h-5 w-5 animate-pulse" />
        <h1 className="Welcome-text text-[15px]">
          Think better with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[35px] text-white font-medium mt-[10px] text-center mb-[20px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[15px] text-center"
      >
        Innovation is the ability to see change as an opportunity, not a threat
      </motion.div>
    </div>
  );
};

export default SkillText;
