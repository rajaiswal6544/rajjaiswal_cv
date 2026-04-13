import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-secondary text-secondary-foreground border-y-8 border-foreground relative overflow-hidden">
      
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-background wave-divider z-10" />

      <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
        
        {/* Left Column: Abstract Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative flex justify-center items-center aspect-square max-w-md mx-auto w-full"
        >
          {/* Layered Geometric Shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-dashed border-primary rounded-full opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border-4 border-secondary-foreground rounded-full"
          />
          
          {/* Main Portrait Shape */}
          <div className="absolute inset-16 bg-primary transform rotate-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] border-8 border-foreground flex items-center justify-center overflow-hidden hover-target">
            <span className="text-[120px] font-display font-black text-foreground leading-none tracking-tighter">RJ</span>
          </div>

          {/* Floating Stickers */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="absolute top-0 right-0 bg-background text-foreground px-4 py-2 font-display text-2xl uppercase transform rotate-12 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-none z-30"
          >
            Rank 1891
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -20 }}
            className="absolute bottom-10 left-0 bg-primary text-primary-foreground px-4 py-2 font-display text-2xl uppercase transform -rotate-12 border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-none z-30"
          >
            CF: 1425
          </motion.div>

        </motion.div>

        {/* Right Column: Text & Achievements */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <div className="bg-background text-foreground p-8 md:p-12 border-8 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transform -rotate-1">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-8 leading-[0.9]">
              I think like a product owner, build like an engineer.
            </h2>
            
            <div className="space-y-6 font-sans text-xl font-medium leading-relaxed">
              <p>
                My approach bridges design thinking and engineering precision. I don't believe in silos between frontend, backend, and product. A great feature isn't just one that compiles without errors—it's one that solves a real user problem seamlessly.
              </p>
              <p>
                Graduating in 2025 with a B.Tech in CS from RCCIIT (CGPA 7.79). I spend my time building real-time AI applications and elegant, high-performance interfaces.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-primary text-primary-foreground p-4 border-4 border-foreground font-mono text-sm font-bold uppercase flex flex-col justify-center items-center transform rotate-2">
                <span className="text-3xl font-display mb-1 block text-center w-full border-b-2 border-foreground pb-1">350+</span>
                LeetCode Solved
              </div>
              <div className="flex-1 bg-foreground text-background p-4 border-4 border-background font-mono text-sm font-bold uppercase flex flex-col justify-center items-center transform -rotate-1">
                <span className="text-3xl font-display mb-1 block text-center w-full border-b-2 border-background pb-1">FINALIST</span>
                Smart Bengal Hackathon
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
