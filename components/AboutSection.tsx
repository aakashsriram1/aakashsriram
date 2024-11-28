"use client"; // this is a client component
import React from "react";

const skills = [
  { skill: "C++" },
  { skill: "HTML/CSS" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "R" },
  { skill: "SQL" },
  { skill: "TypeScript" },
  { skill: "AWS" },
  { skill: "Django" },
  { skill: "Docker" },
  { skill: "Flask" },
  { skill: "Git" },
  { skill: "Node.js" },
  { skill: "NumPy" },
  { skill: "MongoDB" },
  { skill: "Pandas" },
  { skill: "React.js" },
  { skill: "Redis" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-4"> {/* Reduced from py-6 to py-4 */}
      <h1 className="my-4 text-center font-bold text-4xl"> {/* Reduced my-6 to my-4 */}
        My Skills
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-4xl"> {/* Reduced gap-4 to gap-2 */}
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-200 px-4 py-2 rounded-lg shadow-md text-gray-700 font-semibold"
          >
            {item.skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
