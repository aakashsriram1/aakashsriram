import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-stone-900/10 px-4 py-8 text-sm text-stone-600 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© Aakash Sriram</p>
        <p>Built with Next.js, Tailwind CSS, and a bias toward useful tools.</p>
      </div>
    </footer>
  );
};

export default Footer;
