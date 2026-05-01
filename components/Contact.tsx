"use client";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have an AI product, data system, or engineering role in mind?</h2>
          <p>
            I am always open to ambitious teams, thoughtful collaborators, and
            work where strong engineering makes the product feel simpler.
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:aakashsriram4@gmail.com" className="button-primary">
            Email me
            <BsArrowRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/aakashsriram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aakash Sriram LinkedIn"
          >
            <BsLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/aakashsriram1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aakash Sriram GitHub"
          >
            <BsGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
