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
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-3 border border-white/5 shadow-2xl">
              {/* Outer glowing border indicator */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 opacity-30 group-hover:opacity-60 transition-opacity duration-500 rounded-[32px]" />
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                <Image
                  src="/images/saman.png"
                  alt="Saman Sunasara"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
            </div>
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
