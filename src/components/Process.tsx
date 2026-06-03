"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01",
    title: "Discover",
    headline: "Strategy & Intelligence",
    description:
      "We dissect your vision, business goals, and technological requirements to build a bulletproof structural blueprint and technical roadmap.",
  },
  {
    num: "02",
    title: "Design",
    headline: "Aesthetics & Interaction",
    description:
      "We design cinematic visual worlds. Combining high-fashion typography, responsive layouts, and rich micro-interactions to create a luxury experience.",
  },
  {
    num: "03",
    title: "Develop",
    headline: "Advanced Engineering",
    description:
      "We build pixel-perfect interfaces utilizing the speed of Next.js, the safety of TypeScript, and the fluid rendering power of GSAP.",
  },
  {
    num: "04",
    title: "Launch",
    headline: "Optimization & Scale",
    description:
      "We run rigorous build audits, accessibility testing, and search engine optimization. Your site is deployed to high-performance servers worldwide.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const line = lineRef.current;
    const trigger = triggerRef.current;

    if (!line || !trigger) return;

    // Line scaling animation on scroll
    const lineAnim = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 25%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );

    // Fade and reveal steps
    const stepCards = gsap.utils.toArray(".process-card");
    stepCards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      lineAnim.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-28">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">
            Our Flow
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6">
            The Creation Path
          </h2>
          <p className="text-zinc-400 font-medium">
            How we translate high-concept design ideas into high-converting digital realities.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={triggerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 -translate-x-[1px]">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-brand-purple to-brand-cyan origin-top scale-y-0"
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Circle Indicator on the Line */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#030303] border-2 border-brand-purple -translate-x-1/2 z-10 hidden sm:block shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                  {/* Empty space for grid alignment on desktop */}
                  <div className="w-full md:w-1/2" />

                  {/* Card Block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16 md:pr-16 relative">
                    <div className="process-card glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300">
                      {/* Step Number */}
                      <span className="font-display font-black text-5xl md:text-6xl text-white/5 absolute top-4 right-8 select-none">
                        {step.num}
                      </span>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-purple px-2.5 py-1 rounded bg-brand-purple/5 border border-brand-purple/10">
                          Step {step.num}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-white">
                          {step.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <h4 className="font-display font-semibold text-lg text-zinc-300 mb-2">
                        {step.headline}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
