"use client";
import React from "react";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import LinkCard from "@/components/ui/button"; // fallback import hint; we'll implement a simple card-like link below

// Minimal inline card component for featured items
const FeaturedCard = ({ item }: { item: typeof projects[number] }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="h-48">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.excerpt ?? item.description}</p>
      <a href={`/projects/${item.slug}`} className="mt-2 inline-block text-indigo-600 hover:underline">
        View details
      </a>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Building thoughtful, accessible web experiences
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              I craft modern, responsive frontend applications with a focus on usability and performance. Explore a curated set of projects below.
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                View Projects
              </a>
              <a href="/about" className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
                About Me
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {projects.slice(0, 2).map((p) => (
              <FeaturedCard key={p.id} item={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p) => (
            <FeaturedCard key={p.id} item={p} />
          ))}
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;