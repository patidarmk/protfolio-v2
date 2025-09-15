"use client";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h1>
        <p className="text-gray-700 mb-6">
          I’m a product-minded frontend engineer focused on building delightful, accessible web experiences with crisp UX and pragmatic architectures.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p className="text-gray-700">
              6+ years crafting responsive interfaces, design systems, and performant web apps for startups and enterprises.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>React, TypeScript, Tailwind CSS</li>
              <li>UI/UX, accessibility, performance</li>
              <li>Design systems, component-driven development</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;