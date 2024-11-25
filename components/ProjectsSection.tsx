"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    name: "Flash Focus AI",
    description:
      "An AI-powered application that converts notes into flashcards for ADHD users, utilizing spaced repetition to improve memory and focus. Currently in development and in waitlist stage.",
    technologies: ["React", "Python", "OpenAI API", "Tailwind CSS"],
    details:
      "This project was inspired by a need to help ADHD users manage their learning. It includes features such as automatic flashcard generation and a spaced repetition algorithm to boost focus and memory.",
    image: "/flash_focus_ai.png",
    github: "#",
    link: "#",
  },
  {
    name: "OrderBook Engine",
    description:
      "Built a high-performance order matching engine for trading, capable of handling millions of requests per second.",
    technologies: ["C++"],
    details:
      "This project simulated a live trading platform with highly optimized algorithms for matching orders and handling real-time data.",
    image: "/orderbook_engine.png",
    github: "#",
    link: "#",
  },
  {
    name: "NBA Arbitrage",
    description:
      "Developed a Python-based arbitrage betting application for NBA games by analyzing player-proposition odds from multiple sportsbooks.",
    technologies: ["Python", "Pandas, Selenium", "Excel"],
    details:
      "The app scans multiple sportsbooks in real-time, calculates discrepancies in odds, and provides betting opportunities to maximize profit.",
    image: "/nba_arbitrage.png",
    github: "#",
    link: "#",
  },
  {
    name: "LiveDrive",
    description:
      "A machine learning application that predicts whether an NFL play will be a run or pass based on live image tracking from a dataset of 1.5M+ entries. This project placed in the Data Science Project Initiative.",
    technologies: [
      "Machine Learning (Gradient Descent, Convolutional Neural Networks)",
      "Pandas, Scikit-learn, NumPy, OpenCV, PyTorch, TensorFlow",
      "Python, R",
    ],
    details:
      "LiveDrive leverages computer vision to analyze plays in real-time and predict outcomes, helping teams strategize effectively.",
    image: "/livedrive.png",
    github: "https://github.com/aakashsriram1/LiveDrive",
    link: "/livedrive.png",
  },
];

const ProjectsSection = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDetails = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index)); // Close the section
    } else {
      setOpenIndices([...openIndices, index]); // Open the section
    }
  };

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded" />
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
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
                <button
                  onClick={() => toggleDetails(idx)}
                  className="text-xl focus:outline-none"
                >
                  {openIndices.includes(idx) ? (
                    <FaChevronUp className="text-neutral-600 dark:text-neutral-300" />
                  ) : (
                    <FaChevronDown className="text-neutral-600 dark:text-neutral-300" />
                  )}
                </button>
              </div>
              <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              {openIndices.includes(idx) && (
                <div className="mt-4">
                  <p className="text-neutral-700 dark:text-neutral-400">
                    {project.details}
                  </p>
                  <div className="mt-4">
                    <h2 className="font-semibold text-xl mb-2">
                      Technologies / Languages Used:
                    </h2>
                    <ul className="list-disc ml-6 text-neutral-600 dark:text-neutral-400">
                      {project.technologies.map((tech, techIdx) => (
                        <li key={techIdx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <div className="flex flex-row align-bottom space-x-4 mt-4">
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
