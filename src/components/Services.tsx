"use client";

import { motion } from "framer-motion";
import { Compass, Code, Cpu, ShoppingBag, Search, BarChart } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Website Design",
    description:
      "Award-winning interfaces designed for luxury and maximum user engagement. We combine aesthetics with intuitive UX workflows.",
    features: ["Creative Art Direction", "Interactive UI Mockups", "Design Systems"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Ultra-fast, responsive web engineering utilizing modern architectures (Next.js, React) and sleek micro-animations.",
    features: ["React & Next.js Ecosystems", "TypeScript Stability", "High-Performance Assets"],
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    description:
      "Next-generation systems combining machine learning models, custom AI agents, and intelligent features directly inside your site.",
    features: ["LLM & Agent Pipelines", "Semantic Interface Tools", "Dynamic Personalization"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Custom, high-conversion headless e-commerce structures crafted for luxury brands looking to deliver bespoke shopping experiences.",
    features: ["Bespoke Checkout Flows", "Headless Integrations", "Secure Multi-currency Checkout"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical SEO structures, schema markup integration, and semantic audits built to drive target organic visibility on search systems.",
    features: ["Core Web Vitals Tuning", "Structured Semantic Metadata", "High Domain Audits"],
  },
  {
    icon: BarChart,
    title: "Conversion Optimization",
    description:
      "Continuous optimization through structured A/B tests, user flow analysis, and analytics tracking to maximize business impact.",
    features: ["Frictionless UX Audits", "Data-Driven Personalization", "Advanced Funnel Analytics"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-cyan/5 glow-blur -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] rounded-full bg-brand-purple/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6 leading-tight"
          >
            Digital Ecosystems We Shape
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 font-medium text-lg sm:text-xl leading-relaxed"
          >
            We deploy cutting-edge design, engineering, and artificial intelligence to design systems that outperform.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative flex flex-col justify-between rounded-3xl p-8 glass-card border border-white/5 transition-all duration-300 hover:border-brand-purple/30 hover:bg-white/[0.02]"
              >
                {/* Glowing subtle hover corner dot */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full blur-2xl pointer-events-none" />

                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-8 group-hover:scale-110 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-2xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="border-t border-zinc-900 pt-6 mt-auto">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs font-semibold text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mr-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
