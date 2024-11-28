"use client";

import React from "react";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Naive Bayes Classifier",
    description:
      "Developed a Naive Bayes Classifier from scratch to predict NBA game outcomes (win or loss) based on team statistics, using Python for data preprocessing, probability calculations, and model evaluation without relying on libraries like scikit-learn.",
    technologies: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/aakashsriram1/NaiveBayesClassifier/",
  },
  {
    name: "OrderBook Engine",
    description:
      "Built an Orderbook Trading System in C++ from scratch to facilitate market simulations. Enhanced functionality to accurately manage order types (limit and market), track status, and execute orders.",
    technologies: ["C++"],
    github: "https://github.com/aakashsriram1/OrderBook",
  },
  {
    name: "NBA Arbitrage",
    description:
      "Developed a Python-based arbitrage betting application for NBA games by analyzing player-proposition odds from multiple sportsbooks.",
    technologies: ["Python", "Pandas", "Selenium", "Excel"],
    github: "https://github.com/aakashsriram1/NBAPlayerProparbitrage",
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
    github: "https://github.com/aakashsriram1/LiveDrive",
    link: "/livedrive.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded" />
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Project Name */}
            <h1 className="text-2xl font-bold">{project.name}</h1>

            {/* Project Description */}
            <p className="text-lg leading-7 mt-2 text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            {/* Technologies */}
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

            {/* Links */}
            <div className="flex flex-row align-bottom space-x-4 mt-4">
              {project.github && (
                <Link href={project.github} target="_blank">
                  <BsGithub
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              )}
              {project.link && idx === 3 && ( // Only for LiveDrive
                <Link href={project.link} target="_blank">
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
