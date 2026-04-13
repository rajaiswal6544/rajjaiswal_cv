import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Ambient glowing effect following cursor */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.08), transparent 40%)`
        }}
      />
      
      <div className="absolute top-8 left-6 md:left-12 lg:left-24 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm tracking-widest uppercase text-muted-foreground font-mono"
        >
          Raj Jaiswal
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8"
        >
          I build products, <br className="hidden md:block" />
          <span className="text-muted-foreground">not just interfaces.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Frontend engineer with a product mindset. I close the gap between design intention and engineering reality.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4 text-sm font-mono text-muted-foreground"
      >
        <div className="w-8 h-[1px] bg-border" />
        <span>Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
