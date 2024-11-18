"use client"; // this is a client component
import React from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Clay Finance",
    role: "Lead Developer",
    logo: "/clay.png",
    dates: "October 2024 - Present",
  },
  {
    company: "Amazon",
    role: "Data Engineering Intern",
    logo: "/amazon.png",
    dates: "June 2024 - September 2024",
  },
  {
    company: "YouROK",
    role: "Software Engineering Intern",
    logo: "/yourok.png",
    dates: "June 2023 - September 2023",
  },
  {
    company: "UCSB Conference and Hospitality",
    role: "Financial Analyst",
    logo: "/ucsb.png",
    dates: "May 2023 - Present",
  },
  {
    company: "Springer Capital",
    role: "Data Engineering Intern",
    logo: "/springer.png",
    dates: "February 2023 - April 2023",
  },
];

const HeroSection = () => {
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

        {/* Main Text Section */}
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
          <p className="text-base mt-2 md:text-lg text-center md:text-left mx-auto max-w-3xl">
          I am a 3rd-year student at UCSB majoring in Data Science, Statistics, and Applied Mathematics.
          My coursework spans a diverse range of disciplines, including computer science, advanced data science, statistical modeling, and mathematics, providing me with a strong foundation in both analytical and technical skills.
          Through my experiences, I have cultivated a problem-solving mindset and a passion for leveraging technology to address complex real-world challenges.
          Outside of academics, I am actively involved in campus organizations such as 180 Degrees Consulting and the Investment Advisory Committee, where I have honed my collaboration and communication skills.


          </p>
        </div>

        {/* Work Experience Section */}
        <div id="work-experience" className="mt-16 w-full">
          <h1 className="my-10 text-center font-bold text-4xl">
            Work Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
          </h1>
          <div className="flex flex-col space-y-8 mx-auto max-w-3xl">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                {/* Left Section: Logo, Company Name, Role */}
                <div className="flex items-center space-x-4">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{experience.company}</h3>
                    <p className="text-sm text-gray-600">{experience.role}</p>
                  </div>
                </div>
                {/* Right Section: Dates */}
                <p className="text-sm text-gray-500">{experience.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
