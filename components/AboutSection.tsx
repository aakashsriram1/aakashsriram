"use client";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "R",
      "Java",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "FastAPI",
      "NestJS",
      "Express",
      "REST APIs",
      "GraphQL",
      "Auth",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    skills: [
      "Postgres",
      "Redis",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Prisma",
      "SQLAlchemy",
      "Vector DBs",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "LLMs",
      "RAG",
      "MCP",
      "Agents",
      "Prompt Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Data / Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Spark",
      "Airflow",
      "ETL Pipelines",
      "Data Modeling",
      "Statistics",
      "Experimentation",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "AWS",
      "GCP",
      "Azure",
      "Vercel",
      "CI/CD",
      "Linux",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Jupyter",
      "VS Code",
      "Cursor",
      "Claude Code",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article className="stack-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;