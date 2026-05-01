"use client";

import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "AgentGiG",
    outcome: "$1,000 ByteDance sponsorship; 63% cost savings across 50 agents.",
    description:
      "Broker layer for agent work that routes tasks through MCP tool discovery, dynamic pricing, parallel bidding, and SLA-backed execution.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Postgres",
      "Redis",
      "MCP",
      "Claude SDK",
    ],
    portfolio: "https://spoon-hackathon.vercel.app/",
  },
  {
    name: "Naive Bayes Classifier",
    outcome: "From-scratch Gaussian Naive Bayes model for basketball predictions.",
    description:
      "Implemented a classifier to predict basketball game outcomes from recent team statistics, with custom preprocessing, probability calculations, and model evaluation.",
    technologies: ["Python", "Pandas", "NumPy", "Machine learning"],
    github: "https://github.com/aakashsriram1/NaiveBayesClassifier",
  },
  {
    name: "OrderBook",
    outcome: "C++ market simulation with price-time priority matching.",
    description:
      "Built a limit order book engine that manages buy and sell orders, tracks order state, and simulates matching behavior for trading workflows.",
    technologies: ["C++", "Market systems", "Order matching", "Simulation"],
    github: "https://github.com/aakashsriram1/OrderBook",
  },
  {
    name: "PRATE",
    outcome: "Published beta app with 100 users and 100+ daily image inferences.",
    description:
      "Mobile physique analytics product with image upload, FastAPI inference, PyTorch vision models, and real-time WebSocket feedback.",
    technologies: ["React Native", "FastAPI", "PyTorch", "Postgres", "WebSockets"],
    
  },
  {
    name: "LockIn",
    outcome: "90%+ completion verification accuracy across habit workflows.",
    description:
      "Accountability app that verifies image-based habit completion with CLIP embeddings, Weaviate search, streaks, challenges, and alerts.",
    technologies: ["Python", "React", "Node.js", "MongoDB", "Weaviate", "CLIP"],
    github: "https://github.com/aakashsriram1/sbHacks",
  },
  {
    name: "LiveDrive",
    outcome: "Modeled NFL play calls from a 1.5M+ row tracking dataset.",
    description:
      "Machine learning project predicting run/pass decisions from live tracking data using classical ML and computer vision workflows.",
    technologies: ["Python", "R", "OpenCV", "PyTorch", "TensorFlow"],
    github: "https://github.com/aakashsriram1/LiveDrive",
    link: "/livedrive.png",
  },
  {
    name: "Pet Tracker",
    outcome: "In progress: mobile-first pet health tracking system.",
    description:
      "Building a pet care app for medications, vaccinations, symptoms, diet, weight trends, reminders, and non-diagnostic AI health pattern flags.",
    technologies: ["Dart", "Flutter", "Mobile", "AI health flags"],
    github: "https://github.com/aakashsriram1/pet-tracker",
  },
  {
    name: "Basis",
    outcome: "In progress: crypto arbitrage research platform.",
    description:
      "Exploring cross-exchange price differences, mean reversion, and transaction-cost-adjusted profitability across live crypto venues.",
    technologies: ["Market data", "Crypto", "Arbitrage", "Research systems"],
    github: "https://github.com/aakashsriram1/Basis",
  },
  {
    name: "Redix",
    outcome: "In progress: Redis-compatible storage engine in C++.",
    description:
      "Implementing an in-memory data store from scratch with Redis-style commands, data structures, and systems-level performance concerns.",
    technologies: ["C++17", "Systems", "In-memory storage", "Redis protocol"],
    github: "https://github.com/aakashsriram1/cpp-redix",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Featured projects</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <p className="project-outcome">{project.outcome}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            <ul aria-label={`${project.name} technology stack`}>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.portfolio && (
                <Link
                  href={project.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} portfolio website`}
                >
                  <BsArrowUpRight aria-hidden="true" />
                  Sample Website
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                >
                  <BsGithub aria-hidden="true" />
                  Code
                </Link>
              )}

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} project preview`}
                >
                  <BsArrowUpRight aria-hidden="true" />
                  Preview
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
