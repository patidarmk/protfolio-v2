"use client";

import React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

// Simple logo with gradient
const Logo = () => (
  <div className={cn("h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center")}>
    <span className="text-white font-semibold">P</span>
  </div>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <Logo />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-rose-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
            Applaa Portfo
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link to="/projects" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}