"use client";

import Image from "next/image";

const experiences = [
  {
    company: "Rakuten",
    role: "Machine Learning Engineer Intern",
    period: "June 2025 - Sep. 2025",
    location: "San Mateo, CA",
    details: [
      "Engineered a Python ML inference pipeline to analyze 10,000+ session replays for UX signal extraction.",
      "Increased labeling accuracy 25% through LLM eval workflows, A/B prompt optimization, and feedback loops.",
      "Reduced inference cost 50% by optimizing ingestion, batching, and concurrency in a GCP pipeline.",
    ],
  },
  {
    company: "Pasal",
    role: "Software Engineer Intern",
    period: "Sep. 2024 - Jan. 2025",
    location: "San Jose, CA",
    details: [
      "Built a Node.js backend to ingest 500+ financial documents and improve retrieval latency by 30%.",
      "Integrated NLP parsing to structure financial fields with 98%+ accuracy.",
      "Deployed containerized FastAPI services on Azure, reducing setup time 60% across the team.",
    ],
  },
  {
    company: "Amazon",
    role: "Data Analytics Intern",
    period: "June 2024 - Sep. 2024",
    location: "Seattle, WA",
    details: [
      "Built Python pipelines moving SharePoint data into AWS stores and processing 10,000+ records monthly.",
      "Implemented AWS ETL workflows that saved 30 hours quarterly of data ingestion work.",
      "Developed three QuickSight dashboards for real-time financial metrics across stakeholders.",
    ],
  },
  {
    company: "YouROK",
    role: "Software Engineer Intern",
    period: "Feb. 2024 - June 2024",
    location: "Menlo Park, CA",
    details: [
      "Deployed a full-stack mental health platform serving 2,800+ users.",
      "Integrated OpenAI-backed sentiment analysis across 5,000+ chats.",
      "Reduced API latency 30% through SQL indexing and query refactors.",
    ],
  },
];

const education = [
  {
    school: "Carnegie Mellon University",
    degree: "MS Artificial Intelligence",
    period: "May 2027",
    location: "Pittsburgh, PA",
    logo: "/cmu-logo.png",
  },
  {
    school: "University of California, Santa Barbara",
    degree: "BS Data Science and Statistics, Mathematics minor",
    period: "Dec. 2025",
    location: "Goleta, CA",
    logo: "/ucsb-seal.png",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.company}>
              <div>
                <p>{experience.period}</p>
                <span>{experience.location}</span>
              </div>
              <div>
                <h3>{experience.company}</h3>
                <p className="role">{experience.role}</p>
                <ul>
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="education-card" aria-label="Education">
          <p className="eyebrow">Education</p>
          <div className="mt-5 space-y-4">
            {education.map((item) => (
              <article
                className="rounded-2xl border border-stone-900/10 bg-[#fbf7f0]/70 p-4"
                key={item.school}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-stone-900/10 bg-white shadow-sm">
                    <Image
                      src={item.logo}
                      alt={`${item.school} logo`}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold leading-6 text-stone-950">
                      {item.school}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-stone-700">
                      {item.degree}
                    </p>
                    <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#9f5d45]">
                      {item.period} · {item.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-stone-600">
            Coursework spans AI systems, data structures, machine learning,
            probability, linear algebra, and statistical modeling.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default ExperienceSection;
