"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background visual shapes */}
      <div className="absolute top-1/2 left-1/4 w-[35vw] h-[35vw] rounded-full bg-brand-purple/5 glow-blur -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative"
          >
            {/* Image Card */}
            <div className="relative group w-full max-w-[320px] aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-3 border border-white/5 shadow-2xl">
              {/* Outer glowing border indicator */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-[32px]" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src="/images/saman.jpg"
                  alt="Saman Sunasara"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
            </div>

            {/* Social Dock Beside Pic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-row sm:flex-col items-center gap-4 sm:gap-6 mt-4 sm:mt-0"
            >
              <span className="font-display font-black text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:[writing-mode:vertical-lr] sm:rotate-180 hover:text-white transition-colors duration-300">
                Saman Sunasara
              </span>
              
              <div className="hidden sm:block w-[1px] h-8 bg-zinc-800" />
              
              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-purple/50 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                aria-label="LinkedIn"
              >
                <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-cyan/50 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                aria-label="Instagram"
              >
                <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Text/Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-6">
              Leadership & Vision
            </p>

            {/* Founder Message Logo / Quote Icon */}
            <div className="text-brand-purple mb-6 opacity-80">
              <Quote size={48} className="transform scale-y-[-1]" />
            </div>

            {/* Core Message Quote */}
            <blockquote className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-8">
              "We design and build brands at the frontier of trust, innovation, and long-term business impact."
            </blockquote>

            {/* Bio paragraph */}
            <p className="text-zinc-400 text-base leading-relaxed font-medium mb-8">
              Saman Sunasara is an entrepreneur and founder focused on building innovative businesses at the intersection of technology, AI, cybersecurity, and digital transformation. Through Grevoo and its ventures, his vision is to create globally recognized brands that combine trust, innovation, and business impact.
            </p>

            {/* Author Block */}
            <div className="border-t border-zinc-950 pt-6">
              <h4 className="font-display font-black text-xl text-white">Saman Sunasara</h4>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mt-1">
                Founder & CEO, Grevoo
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
