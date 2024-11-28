"use client"; // This is a client component
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h1 className="text-center font-bold text-4xl">
        Reach Out!
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-900 border-0 rounded" />
      </h1>
      <div className="flex flex-col items-center space-y-6 text-xl mt-6">
        {/* Personal Email */}
        <a
          href="mailto:aakashgsriram@gmail.com"
          className="text-blue-600 hover:underline hover:scale-110 transition-transform"
        >
          Personal Email
        </a>

        {/* School Email */}
        <a
          href="mailto:aakashsriram@ucsb.edu"
          className="text-blue-600 hover:underline hover:scale-110 transition-transform"
        >
          School Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aakashsriram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:scale-110 transition-transform"
        >
          LinkedIn: <span className="font-semibold">in/aakashsriram</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/aakashsriram1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:scale-110 transition-transform"
        >
          GitHub: <span className="font-semibold">aakashsriram1</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
