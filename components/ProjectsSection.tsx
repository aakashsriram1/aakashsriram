import React from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Flash Focus AI",
    description:
      "An AI-powered application that converts notes into flashcards for ADHD users, utilizing spaced repetition to improve memory and focus.",
    technologies: ["React", "Python", "OpenAI API", "Tailwind CSS"],
    image: "/flash_focus_ai.png", // Replace with actual image path
    github: "#",
    link: "#",
  },
  {
    name: "OrderBook Engine",
    description:
      "Built a high-performance order matching engine for trading, capable of handling millions of requests per second.",
    technologies: ["Node.js", "Redis", "MongoDB"],
    image: "/orderbook_engine.png", // Replace with actual image path
    github: "#",
    link: "#",
  },
  {
    name: "NBA Arbitrage",
    description:
      "Developed a Python-based arbitrage betting application for NBA games by analyzing player-proposition odds from multiple sportsbooks.",
    technologies: ["Python", "Pandas", "Sports API"],
    image: "/nba_arbitrage.png", // Replace with actual image path
    github: "#",
    link: "#",
  },
  {
    name: "LiveDrive",
    description:
      "A machine learning application that predicts whether an NFL play will be a run or pass based on live image tracking from a dataset of 1.5M+ entries. This project placed in the Data Science Project Initiative.",
    technologies: ["Machine Learning (Gradient Decent, Convolutional Neural Networks)", "Pandas, Scikit-learn, NumPy, OpenCV, PyTorch, TensorFlow", "Python, R"],
    image: "/livedrive.png", // Replace with actual image path
    github: "https://github.com/aakashsriram1/LiveDrive",
    link: "/livedrive.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:space-x-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Project Image */}
            <div className="md:w-1/3">
              <img
                src={project.image}
                alt={`${project.name} Image`}
                className="rounded-lg shadow-md object-cover w-full h-64"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
              <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="mb-4">
                <h2 className="font-semibold text-xl mb-2">Technologies Used:</h2>
                <ul className="list-disc ml-6 text-neutral-600 dark:text-neutral-400">
                  {project.technologies.map((tech, techIdx) => (
                    <li key={techIdx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row align-bottom space-x-4">
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
