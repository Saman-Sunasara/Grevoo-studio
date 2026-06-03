"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Web Design", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", projectType: "Web Design", message: "" });
    }, 4000);
  };

  const projectTypes = ["Web Design", "Web Development", "AI Integration", "E-Commerce", "Brand Strategy"];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-purple/5 glow-blur -z-10" />
      <div className="absolute top-0 left-0 w-[45vw] h-[45vw] rounded-full bg-brand-cyan/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text/Info Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4">
              Get In Touch
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
              Let's Build Something Exceptional
            </h2>
            <p className="text-zinc-400 font-medium text-lg leading-relaxed mb-12">
              Ready to create your brand's digital landmark? Fill out the form or reach out directly to set up an introductory consultation.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:studio@grevoo.com"
                className="flex items-center gap-4 group p-4 rounded-2xl glass-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300 w-fit"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Us</p>
                  <p className="text-sm font-semibold text-white group-hover:text-gradient-purple-cyan transition-colors">
                    studio@grevoo.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/5 relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white mb-2">Message Transmitted</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Thank you. We review inquiries within 24 hours. A digital experience architect will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="px-6 py-4 rounded-xl bg-black border border-white/10 text-white font-medium text-sm transition-all focus:border-brand-purple/40 focus:ring-1 focus:ring-brand-purple/20 focus:outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="px-6 py-4 rounded-xl bg-black border border-white/10 text-white font-medium text-sm transition-all focus:border-brand-purple/40 focus:ring-1 focus:ring-brand-purple/20 focus:outline-none"
                    />
                  </div>

                  {/* Project Type Grid */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`px-4 py-2.5 rounded-full border text-xs font-bold tracking-wider transition-all ${
                            formState.projectType === type
                              ? "bg-white text-black border-white"
                              : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your brand, timelines, and launch goals..."
                      className="px-6 py-4 rounded-xl bg-black border border-white/10 text-white font-medium text-sm transition-all focus:border-brand-purple/40 focus:ring-1 focus:ring-brand-purple/20 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full relative px-8 py-4 rounded-xl overflow-hidden group bg-transparent border border-white/20 text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-white"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-purple to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    Submit Inquiry
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
