import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] text-gradient">Community</div>

            <Link href="https://github.com/VishvaAloka" passHref>
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-gray-800 transition-all duration-300">
                <RxGithubLogo className="text-gray-800" />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </p>
            </Link>

            <a
              href="https://discord.com/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-indigo-600 transition-all duration-300">
                <RxDiscordLogo className="text-indigo-600" />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-[20px]">
            <div className="font-bold text-[16px] text-gradient">
              Social Media
            </div>

            <a
              href="https://www.instagram.com/YourInstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-pink-500 transition-all duration-300">
                <FaYoutube className="text-pink-500" />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>

            <a
              href="https://x.com/rajeevaloka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-500 transition-all duration-300">
                <RxGithubLogo className="text-blue-500" />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/rajeev-aloka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300">
                <RxDiscordLogo className="text-blue-700" />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                rajeevaloka@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Rajeev Vishva Aloka 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
