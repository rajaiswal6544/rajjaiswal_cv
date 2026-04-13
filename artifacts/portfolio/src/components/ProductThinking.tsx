import { motion } from "framer-motion";

const principles = [
  {
    title: "Friction is a feature bug.",
    content: "Every extra click is a conversion risk. I map drop-off points before writing code."
  },
  {
    title: "Design for intent, not features.",
    content: "Features exist to serve user goals. I re-architect around what users are actually trying to do."
  },
  {
    title: "Measure, then move.",
    content: "UX improvements without metrics are guesses. I define success criteria before building."
  },
  {
    title: "Constraints are creative inputs.",
    content: "WebRTC latency limits? That's not a problem — it's the product design constraint that shaped everything."
  }
];

export function ProductThinking() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Sketchy dotted grid background */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-20 text-center"
        >
          <div className="inline-block bg-primary text-primary-foreground p-4 border-4 border-secondary transform rotate-2 mb-6">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Product Thinking</h2>
          </div>
        </motion.div>

        {/* Before / After Audit Flow */}
        <div className="mb-32">
          <div className="text-center mb-8">
            <span className="bg-foreground text-background font-mono text-sm font-bold px-4 py-1 uppercase tracking-widest inline-block transform -rotate-1 border-2 border-foreground">RECYCLARO UX AUDIT</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            
            {/* Before */}
            <div className="bg-muted p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-foreground opacity-80 filter grayscale">
              <h3 className="font-display text-3xl uppercase mb-8 text-muted-foreground tracking-tight">Before</h3>
              <div className="space-y-4 font-mono font-medium text-sm text-foreground">
                <div className="p-4 border-2 border-foreground bg-background">Feature-based navigation</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background">Users scan all options</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background">Cognitive overload</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background">Drop-off at 3rd step</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-destructive bg-destructive/10 text-destructive font-bold">35% task abandonment</div>
              </div>
            </div>

            {/* After */}
            <div className="bg-primary text-primary-foreground p-8 md:p-12">
              <h3 className="font-display text-3xl uppercase mb-8 tracking-tight">After</h3>
              <div className="space-y-4 font-mono font-bold text-sm">
                <div className="p-4 border-2 border-foreground bg-background text-foreground">Role-based entry (What are you here to do?)</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background text-foreground">Intent-driven IA</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background text-foreground">Reduced options per screen</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-background text-foreground">Single clear CTA per step</div>
                <div className="text-center text-xl">↓</div>
                <div className="p-4 border-2 border-foreground bg-foreground text-background font-bold">Navigation drop-offs reduced</div>
              </div>
            </div>

          </div>
        </div>

        {/* 2x2 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
              className="bg-background border-4 border-foreground p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <div className="font-display text-2xl uppercase tracking-tight mb-4 text-foreground group-hover:text-primary-foreground">
                {principle.title}
              </div>
              <p className="font-sans font-medium text-lg leading-relaxed text-muted-foreground group-hover:text-primary-foreground">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
