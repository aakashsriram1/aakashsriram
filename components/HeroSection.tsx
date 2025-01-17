"use client"; // this is a client component
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    company: "Clay Finance",
    role: "Lead Developer",
    logo: "/clay.png",
    dates: "October 2024 - Present",
    details: [
      "Leading the development of an AI agent to automate financial statements, streamline reconciliations, and simplify auditing processes."
    ],
  },
  {
    company: "Amazon",
    role: "Data Engineering Intern",
    logo: "/amazon.png",
    dates: "June 2024 - September 2024",
    details: [
      "Built a real-time metrics dashboard on AWS Quicksight for the Operational Expense team, leveraging AWS services to reduce team's manual effort."
    ],
  },
  {
    company: "YouROK",
    role: "Software Engineering Intern",
    logo: "/yourok.png",
    dates: "June 2023 - September 2023",
    details: [
      "Contributed to the Generative AI team by developing a chatbot that serves as a virtual therapist for children, helping them understand emotions and providing support."
    ],
  },
  {
    company: "UCSB Conference and Hospitality",
    role: "Financial Analyst",
    logo: "/ucsb.png",
    dates: "May 2023 - Present",
    details: [
      "Managed hotel query datasets, generated financial reports, and supported operational tasks as a part-time financial analyst.",
    ],
  },
  {
    company: "Springer Capital",
    role: "Data Engineering Intern",
    logo: "/springer.png",
    dates: "February 2023 - April 2023",
    details: [
      "Designed ETL pipelines and analyzed large datasets for the Private Equity team to identify trends and optimize investment strategies.",
    ],
  },
];

const HeroSection = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDetails = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index)); 
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 my-6 py-10 sm:py-20 md:py-28">
        {/* Profile Image */}
        <div className="relative flex justify-center">
          <Image
            src="/headshot.png"
            alt="Aakash's headshot"
            width={200}
            height={200}
            className="rounded-full shadow-2xl"
          />
        </div>

        {/* Main Section */}
        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold md:text-6xl">
            Hi, I&#39;m Aakash!
          </h1>
          <p className="text-base mt-2 mb-4 md:text-lg">
            I am an aspiring developer & love complex problem-solving.
          </p>
        </div>

        {/* About Section */}
        <div id="about" className="mt-6 w-full">
          <h1 className="my-10 text-center font-bold text-4xl">
            About
            <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
          </h1>
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-base md:text-lg text-left text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I am a 3rd-year student at the University of California, Santa Barbara.
              My coursework spans a diverse range of disciplines, including computer science, advanced data science, statistical modeling, and mathematics, providing me with a strong foundation in both analytical and technical skills.
            </p>
            <p className="mt-4 text-base md:text-lg text-left text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Through my experiences, I have cultivated a problem-solving mindset and a passion for leveraging technology to address complex real-world challenges. Outside of academics, I am actively involved in campus organizations such as 
               180 Degrees Consulting where I provide strategic consulting advice to nonprofits, and the 
              Investment Advisory Committee where I serve in the Fixed Income sector managing a subset of a $270,000 portfolio and developing data-driven strategies to maximize returns.
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div id="work-experience" className="mt-16 w-full">
          <h1 className="my-10 text-center font-bold text-4xl">
            Work Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
          </h1>
          <div className="flex flex-col space-y-8 mx-auto max-w-3xl">
            {experiences.map((experience, index) => (
              <div key={index} className="border-b pb-4">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {experience.company}
                      </h3>
                      <p className="text-sm text-gray-600">{experience.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500">{experience.dates}</p>
                    <button onClick={() => toggleDetails(index)}>
                      {openIndices.includes(index) ? (
                        <FaChevronUp className="text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
                {/* Details Section*/}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndices.includes(index)
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-4 list-disc pl-8 text-sm text-gray-600">
                    {experience.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
