"use client";
import React from "react";
import { useParams, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

function ProjectDetail() {
  const { slug } = useParams({ from: "/" });
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>Project not found.</p>
          <Link to="/projects" className="text-indigo-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <Link to="/projects" className="text-indigo-600 hover:underline">Projects</Link> &nbsp;/&nbsp; <span className="text-gray-500">{project.title}</span>
        </nav>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={project.image} alt={project.title} className="w-full rounded-lg object-cover" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2">{project.title}</h1>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="mb-4">
              <strong>Technologies:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full bg-gray-100 text-sm text-gray-700">{t}</span>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">Date: {new Date(project.date).toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;