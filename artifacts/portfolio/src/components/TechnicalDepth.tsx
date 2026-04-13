import { motion } from "framer-motion";

const Node = ({ label, tech, delay = 0, rotate = 0 }: { label: string, tech: string, delay?: number, rotate?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
    whileInView={{ opacity: 1, scale: 1, rotate }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
    className="relative z-10 flex flex-col items-center justify-center p-4 bg-background border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] w-40 text-center hover:bg-primary hover:text-primary-foreground transition-colors group"
  >
    <span className="font-display text-xl mb-1 group-hover:text-primary-foreground text-foreground uppercase">{label}</span>
    <span className="text-xs text-primary group-hover:text-foreground font-mono font-bold">{tech}</span>
  </motion.div>
);

const Edge = ({ delay = 0, horizontal = false, length = "w-16" }: { delay?: number, horizontal?: boolean, length?: string }) => (
  <div className={`relative ${horizontal ? `${length} h-1` : `h-16 w-1 mx-auto`} bg-foreground overflow-hidden rounded-full`}>
    <motion.div 
      initial={{ scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0, originX: 0, originY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "circOut" }}
      className={`absolute inset-0 bg-primary ${horizontal ? '' : 'origin-top'}`}
    />
  </div>
);

export function TechnicalDepth() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t-8 border-foreground relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 z-0 opacity-5" 
        style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-24 text-center"
        >
          <div className="inline-block bg-foreground text-background px-6 py-2 transform -rotate-2 mb-6">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Architecture</h2>
          </div>
          <p className="text-xl md:text-3xl font-sans font-medium text-foreground max-w-2xl mx-auto transform rotate-1">
            Systems over syntax. Sketches of how my apps actually work under the hood.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Pipeline 1 */}
          <div className="relative">
            <div className="absolute -left-4 -top-8 text-primary font-mono text-sm font-bold transform -rotate-12 border-2 border-primary px-2 py-1 rounded-full">
              FIG 1: Voice Loop
            </div>
            <h3 className="text-3xl font-display uppercase text-foreground mb-12 border-b-4 border-foreground pb-2 inline-block transform rotate-1">Real-time Voice Pipeline</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-start gap-2 relative">
              <Node label="Client" tech="Browser UI" delay={0} rotate={-2} />
              <Edge horizontal delay={0.2} length="w-8 md:w-16" />
              <Node label="Transport" tech="WebRTC" delay={0.4} rotate={3} />
              <Edge horizontal delay={0.6} length="w-8 md:w-16" />
              <Node label="Process" tech="Whisper" delay={0.8} rotate={-1} />
              <Edge horizontal delay={1.0} length="w-8 md:w-16" />
              <Node label="Output" tech="TTS Stream" delay={1.2} rotate={2} />

              {/* Hand-drawn arrow loop */}
              <motion.div 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="hidden md:block absolute w-full h-full pointer-events-none"
              >
                <svg className="absolute top-1/2 left-0 w-full h-32 overflow-visible" style={{ transform: 'translateY(20px)' }}>
                  <path d="M 680 0 Q 680 80, 340 80 T 80 0" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
                  <path d="M 70 -5 L 80 0 L 90 -5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 text-sm font-mono font-bold bg-background px-2 border-2 border-foreground transform -rotate-2">
                  Sub-second turn-around
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pipeline 2 */}
          <div className="relative">
             <div className="absolute -left-4 -top-8 text-primary font-mono text-sm font-bold transform rotate-6 border-2 border-primary px-2 py-1 rounded-full">
              FIG 2: Video Gen
            </div>
            <h3 className="text-3xl font-display uppercase text-foreground mb-12 border-b-4 border-foreground pb-2 inline-block transform -rotate-1">AI Video Pipeline</h3>
            
            <div className="hidden md:flex items-center justify-start gap-2 flex-wrap lg:flex-nowrap">
              <Node label="Input" tech="A-Roll Audio" delay={0} rotate={1} />
              <Edge horizontal delay={0.2} length="w-12" />
              <Node label="STT" tech="Whisper" delay={0.4} rotate={-2} />
              <Edge horizontal delay={0.6} length="w-12" />
              <Node label="Vision" tech="GPT-4o" delay={0.8} rotate={2} />
              <Edge horizontal delay={1.0} length="w-12" />
              <Node label="Align" tech="Embeddings" delay={1.2} rotate={-1} />
              <Edge horizontal delay={1.4} length="w-12" />
              <Node label="Render" tech="FFmpeg" delay={1.6} rotate={3} />
            </div>

            {/* Mobile Vertical View for Pipeline 2 */}
            <div className="flex flex-col md:hidden items-center gap-2">
              <Node label="Input" tech="A-Roll Audio" delay={0} rotate={1} />
              <Edge delay={0.2} />
              <Node label="STT" tech="Whisper" delay={0.4} rotate={-2} />
              <Edge delay={0.6} />
              <Node label="Vision" tech="GPT-4o" delay={0.8} rotate={2} />
              <Edge delay={1.0} />
              <Node label="Align" tech="Embeddings" delay={1.2} rotate={-1} />
              <Edge delay={1.4} />
              <Node label="Render" tech="FFmpeg" delay={1.6} rotate={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
