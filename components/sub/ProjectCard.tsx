import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className={url}>
          <Link href={url}>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
          </Link>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
