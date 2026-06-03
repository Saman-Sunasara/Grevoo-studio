"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "aether",
    title: "Aether AI",
    category: "AI & Data Platform",
    tagline: "Enterprise intelligence engineered for scale.",
    image: "/images/aether.png",
    link: "#",
    metrics: "120% Performance Boost",
    roles: ["UX/UI Design", "Frontend Dev", "AI Integrations"],
  },
  {
    id: "quantum",
    title: "Quantum Wealth",
    category: "Financial Ecosystem",
    tagline: "Ultra-premium asset management hub.",
    image: "/images/quantum.png",
    link: "#",
    metrics: "$2.4B Volume Managed",
    roles: ["Full Stack Dev", "Interactive Charts", "Security System"],
  },
  {
    id: "solara",
    title: "Solara Yachts",
    category: "Luxury Clean Energy",
    tagline: "Eco-innovative branding and digital experience.",
    image: "/images/solara.png",
    link: "#",
    metrics: "48% Conversion Increase",
    roles: ["Brand Identity", "Next.js Store", "Cinematic Motion"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      {/* Dynamic Background mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] rounded-full bg-brand-purple/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white"
            >
              Crafting Digital Landmarks
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 max-w-sm font-medium leading-relaxed"
          >
            A curated selection of our latest digital products, luxury websites, and advanced systems built for high impact.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass-card p-6 h-[550px] border border-white/5 transition-all duration-500 hover:border-white/10"
              data-cursor="view"
            >
              {/* Image Container with Hover zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Card Header (Category / Icon) */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Footer (Content) */}
              <div className="relative z-10">
                <p className="text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2">
                  {project.metrics}
                </p>
                <h3 className="font-display font-black text-3xl text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm font-medium mb-6 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Technical Roles tags */}
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] font-semibold text-zinc-400 border border-zinc-800 bg-black/40 px-2.5 py-1 rounded-md"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
