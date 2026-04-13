import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Star Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 2px, transparent 2px)', backgroundSize: '100px 100px' }} 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="font-display uppercase flex flex-col items-center">
          <div className="text-4xl md:text-6xl italic font-serif lowercase tracking-normal mb-2 text-foreground/80">
            If you're building real products,
          </div>
          <div className="text-[12vw] leading-[0.8] tracking-tighter text-background text-stroke-primary font-black my-4 cursor-none" style={{ WebkitTextStroke: '4px currentColor' }}>
            NOT JUST FEATURES —
          </div>
          <div className="text-6xl md:text-8xl leading-[0.8] tracking-tighter bg-background text-foreground px-6 py-2 border-8 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            we should talk.
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <p className="text-xl md:text-2xl font-sans font-medium max-w-3xl mb-16 p-6 border-4 border-foreground bg-background text-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            I join teams where engineering decisions are made with users in mind. Where 'done' means shipped, measured, and iterated — not just merged.
          </p>

          <div className="space-y-6 flex flex-col items-center w-full">
            <a 
              href="mailto:rajaiswaldev24@gmail.com"
              className="group relative inline-block font-display text-4xl md:text-6xl uppercase hover-target transition-all cursor-none overflow-hidden"
            >
              <span className="relative z-10 text-foreground group-hover:text-background transition-colors mix-blend-difference">rajaiswaldev24@gmail.com →</span>
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-foreground group-hover:h-full transition-all duration-300 ease-out z-0"></span>
            </a>
            
            <div className="flex gap-12 mt-8">
              <a 
                href="#"
                className="group relative inline-block font-display text-3xl uppercase hover-target transition-all cursor-none overflow-hidden"
              >
                <span className="relative z-10 text-foreground group-hover:text-background transition-colors mix-blend-difference">GitHub</span>
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-foreground group-hover:h-full transition-all duration-300 ease-out z-0"></span>
              </a>
              <a 
                href="#"
                className="group relative inline-block font-display text-3xl uppercase hover-target transition-all cursor-none overflow-hidden"
              >
                <span className="relative z-10 text-foreground group-hover:text-background transition-colors mix-blend-difference">LinkedIn</span>
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-foreground group-hover:h-full transition-all duration-300 ease-out z-0"></span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap bg-foreground text-background py-4 border-t-8 border-background z-20">
        <div className="animate-marquee inline-block font-mono text-xl tracking-widest uppercase font-bold">
          PRODUCT THINKING · SYSTEMS DESIGN · REAL-TIME AI · WEBRTC · OPENAI APIS · FRONTEND ENGINEERING · AVAILABLE FOR WORK · PRODUCT THINKING · SYSTEMS DESIGN · REAL-TIME AI · WEBRTC · OPENAI APIS · FRONTEND ENGINEERING · AVAILABLE FOR WORK · 
        </div>
      </div>
    </section>
  );
}
