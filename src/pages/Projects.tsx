"use client";
import React from "react";
import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [query, setQuery] = React.useState("");
  const filtered = projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Projects</h1>
        <p className="text-gray-600 mb-6">
          A curated list of personal projects and collaborations demonstrating design, UX and engineering excellence.
        </p>

        <div className="mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.excerpt ?? p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</span>
                  <Link to={`/projects/${p.slug}`} className="text-indigo-600 hover:underline text-sm font-medium">
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}