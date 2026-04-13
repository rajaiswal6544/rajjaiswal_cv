import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Star Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 2px, transparent 2px)', backgroundSize: '100px 100px' }} 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="font-display font-black uppercase flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="text-[12vw] leading-[0.8] tracking-tighter hover-target cursor-none mb-4"
          >
            LET'S BUILD
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="text-[15vw] leading-[0.8] tracking-tighter text-background text-stroke-primary hover-target cursor-none mb-4"
            style={{ WebkitTextStroke: '4px currentColor' }}
          >
            SOMETHING
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="text-[14vw] leading-[0.8] tracking-tighter bg-background text-foreground px-4 border-8 border-foreground hover-target cursor-none shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)]"
          >
            IMPACTFUL.
          </motion.div>
        </div>

        <div className="mt-24 space-y-8 flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-sans font-medium max-w-2xl bg-foreground text-background p-4 transform -rotate-1">
            Open to frontend, full-stack, and product engineering roles.
          </p>

          <a 
            href="mailto:rajaiswaldev24@gmail.com"
            className="group relative inline-flex items-center justify-center gap-4 bg-background text-foreground px-12 py-6 border-8 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] font-display text-4xl uppercase hover-target transform rotate-2 transition-all hover:rotate-0 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-none"
          >
            Email Me <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Footer Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-foreground text-background py-4 border-t-8 border-background z-20">
        <div className="animate-marquee inline-block font-mono text-xl tracking-widest uppercase font-bold">
          AVAILABLE FOR WORK · BASED IN INDIA · RAJ JAISWAL © 2024 · AVAILABLE FOR WORK · BASED IN INDIA · RAJ JAISWAL © 2024 · AVAILABLE FOR WORK · BASED IN INDIA · RAJ JAISWAL © 2024 ·
        </div>
      </div>
    </section>
  );
}
