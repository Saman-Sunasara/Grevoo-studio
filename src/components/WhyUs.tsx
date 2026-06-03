"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Award } from "lucide-react";

const metrics = [
  {
    value: "99%",
    label: "Client Satisfaction",
    desc: "Bespoke digital experiences tailored for luxury standards and elite performance.",
  },
  {
    value: "2.4x",
    label: "Conversion Boost",
    desc: "We align high-concept cinematic layouts directly with conversion funnel mechanics.",
  },
  {
    value: "100%",
    label: "Lighthouse Performance",
    desc: "Blazing fast, zero-delay static pages engineered using Next.js architectures.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Cutting-Edge Performance",
    description:
      "We build on React Server Components, server-side rendering, and asset pre-fetching to deliver near-instant loading times.",
  },
  {
    icon: Shield,
    title: "Enterprise Trust & Security",
    description:
      "Our clean TypeScript codebases are optimized for security, reliable scalability, and easy maintenance.",
  },
  {
    icon: Sparkles,
    title: "Creative Distinction",
    description:
      "No templates, ever. Every interaction is designed from scratch to highlight your brand's unique positioning.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "We design to compete at the highest tier of international design showcases (Awwwards, CSS Design Awards).",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function WhyUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-brand-purple/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4"
          >
            Why Grevoo Studio
          </motion.p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
            Engineered to Elevate Your Brand
          </h2>
          <p className="text-zinc-400 font-medium text-lg leading-relaxed">
            We don't build generic websites. We design interactive brand landmarks that stand out, drive conversions, and scale effortlessly.
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-zinc-900 pb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="font-display font-black text-6xl sm:text-7xl text-gradient-purple-cyan mb-3">
                {metric.value}
              </span>
              <span className="text-lg font-bold text-white mb-2">{metric.label}</span>
              <span className="text-zinc-500 text-sm leading-relaxed font-medium">
                {metric.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative flex gap-6 p-8 rounded-3xl glass-card border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-all duration-300">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
