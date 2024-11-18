import React from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Flash Focus AI",
    description:
      "An AI-powered application that converts notes into flashcards for ADHD users, utilizing spaced repetition to improve memory and focus.",
    github: "#",
    link: "#",
  },
  {
    name: "OrderBook Engine",
    description:
      "Built a high-performance order matching engine for trading, capable of handling millions of requests per second.",
    github: "#",
    link: "#",
  },
  {
    name: "NBA Arbitrage",
    description:
      "Developed a Python-based arbitrage betting application for NBA games by analyzing player-proposition odds from multiple sportsbooks.",
    github: "#",
    link: "#",
  },
  {
    name: "LiveDrive",
    description:
      "A machine learning application that predicts whether an NFL play will be a run or pass based on live image tracking. This project placed in the Data Science Project Initiative.",
    github: "#",
    link: "#",
  },
];

const ProjectsSection = () => {
  console.log(projects); // Debugging: Check if all projects are passed correctly

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-12">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="mt-8 md:w-full">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
