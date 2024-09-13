import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/BookMe website.png"
          title="Resource Booking System"
          key="https://github.com/"
          description="Welcome to Bookme Resource Booking—your ultimate solution for managing and booking resources effortlessly."
        />
        <ProjectCard
          src="/Deezer website.png"
          title="Online Music Website"          
          key="https://github.com/"
          description="Discover a world of endless music possibilities with Deezer, the premier online music streaming service that brings you closer to your favorite songs, artists, and genres."
        />
        <ProjectCard
          src="/Space Portfolio.png"
          title="Space Portfolio"          
          key="https://github.com/"
          description="This is my personal portfolio. The codebase is built with Vite JS, incorporating Three JS for a smooth user experience."
        />
        <ProjectCard
          src="/FilmLane website.png"
          title="Movie Booking System"          
          key="https://github.com/"
          description="At FilmLane, we’re dedicated to bringing you a seamless and enjoyable movie booking experience."
        />
      </div>
    </div>
  );
};

export default Projects;
