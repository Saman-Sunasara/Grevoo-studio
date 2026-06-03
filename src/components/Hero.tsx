"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Interactive Grid Canvas Animation
  useEffect(() => {
    // Disable canvas grid logic on mobile to save CPU and load speed
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dots: { x: number; y: number; originX: number; originY: number }[] = [];
    const spacing = 45;
    const mouse = { x: -1000, y: -1000, radius: 120 };

    // Initialize dots
    const initDots = () => {
      dots.length = 0;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({ x, y, originX: x, originY: y });
        }
      }
    };

    initDots();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDots();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const dx = mouse.x - dot.originX;
        const dy = mouse.y - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Apply interactive force
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius; // 0 to 1
          const angle = Math.atan2(dy, dx);
          // Push dots away from mouse
          dot.x = dot.originX - Math.cos(angle) * force * 15;
          dot.y = dot.originY - Math.sin(angle) * force * 15;
        } else {
          // Return to origin with ease
          dot.x += (dot.originX - dot.x) * 0.1;
          dot.y += (dot.originY - dot.y) * 0.1;
        }

        // Draw dot
        const opacity = dist < mouse.radius ? 0.35 + (1 - dist / mouse.radius) * 0.45 : 0.08;
        const size = dist < mouse.radius ? 1.5 + (1 - dist / mouse.radius) * 1.5 : 1;

        ctx.fillStyle = dist < mouse.radius 
          ? `rgba(139, 92, 246, ${opacity})` // Glowing purple when hovered
          : `rgba(255, 255, 255, ${opacity})`;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add a subtle vignette gradient glow in center
      const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 1.5);
      grad.addColorStop(0, "rgba(3,3,3,0)");
      grad.addColorStop(1, "rgba(3,3,3,0.85)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP Cinematic Entrances
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Split words or apply staggered character animation
    if (titleRef.current) {
      const titleWords = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = titleWords
        .map((word) => `<span class="inline-block overflow-hidden pb-1"><span class="inline-block transform translate-y-full">${word}</span></span>`)
        .join(" ");

      tl.to(titleRef.current.querySelectorAll("span > span"), {
        y: "0%",
        duration: 1.4,
        stagger: 0.08,
      });
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=1.0"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.querySelectorAll("a"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.15 },
        "-=0.8"
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030303] flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 pt-[160px] pb-16 md:pt-[280px] md:pb-24 select-none"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-brand-purple/10 glow-blur -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-brand-cyan/5 glow-blur -z-10" />

      {/* Background Watermark Logo with 12% Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[750px] aspect-[16/10] pointer-events-none z-0 opacity-12 select-none">
        <Image
          src="/images/logo.png"
          alt="Grevoo Studio Watermark"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center justify-center">
        {/* Cinematic pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-zinc-400 flex items-center gap-2 hover:border-white/20 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          The Web & Digital Studio of Grevoo
        </motion.div>

        {/* Large bold typography headline */}
        <h1
          ref={titleRef}
          className="font-display font-black text-4xl sm:text-6xl md:text-8xl tracking-tight text-white leading-[1.05] max-w-4xl"
        >
          Building Digital Experiences That Move Business Forward
        </h1>

        {/* Subheadline with subtle styling */}
        <p
          ref={subtitleRef}
          className="mt-8 font-sans font-medium text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          We design and develop premium websites, digital products, and AI-powered experiences for ambitious brands.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide shadow-lg shadow-white/5 hover:scale-105 hover:bg-zinc-200 transition-all duration-300"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/15 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-zinc-700 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-zinc-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
