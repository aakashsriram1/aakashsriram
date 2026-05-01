"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto flex max-w-7xl justify-end gap-2"
        aria-label="Social navigation"
      >
        <a
          href="https://github.com/aakashsriram1"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="GitHub profile"
        >
          <BsGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/aakashsriram"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
