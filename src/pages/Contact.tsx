"use client";
import React from "react";
import { showSuccess } from "@/utils/toast";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submission delay
    setTimeout(() => {
      setLoading(false);
      showSuccess("Thanks! Your message has been captured.");
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Contact</h1>
        <p className="text-gray-700 mb-6">Have a project in mind? Let’s connect.</p>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}