import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 py-20 bg-background text-foreground">
      
      {/* Background Marquee Top */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none rotate-2 select-none z-0">
        <div className="animate-marquee inline-block font-display text-4xl tracking-widest text-primary">
          FRONTEND ENGINEER · PRODUCT THINKER · WEBRTC · OPENAI APIS · REAL-TIME SYSTEMS · CODEFORCES SPECIALIST · 
          FRONTEND ENGINEER · PRODUCT THINKER · WEBRTC · OPENAI APIS · REAL-TIME SYSTEMS · CODEFORCES SPECIALIST ·
        </div>
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center w-full relative z-20"
        >
          <h1 className="text-[18vw] md:text-[15vw] leading-[0.8] font-display tracking-tighter uppercase mix-blend-difference hover-target text-white">
            RAJ
            <br />
            <span className="text-stroke-primary text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--primary))' }}>JAISWAL</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-primary inline-block ml-4"
            >_</motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
          className="mt-12 z-30"
        >
          <p className="text-xl md:text-3xl font-sans font-medium max-w-2xl text-center border-4 border-foreground p-4 bg-primary text-primary-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            I build products, not just interfaces.
          </p>
        </motion.div>
      </div>

      {/* Orbiting Tags */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border-4 border-foreground/10 rounded-full border-dashed"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background text-foreground border-4 border-foreground px-6 py-2 font-mono text-sm md:text-lg font-bold uppercase transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">WebRTC</div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background border-4 border-background px-6 py-2 font-mono text-sm md:text-lg font-bold uppercase transform -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">React</div>
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-primary text-primary-foreground border-4 border-foreground px-6 py-2 font-mono text-sm md:text-lg font-bold uppercase transform rotate-90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">OpenAI</div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-background text-foreground border-4 border-foreground px-6 py-2 font-mono text-sm md:text-lg font-bold uppercase transform -rotate-90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">Product</div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
