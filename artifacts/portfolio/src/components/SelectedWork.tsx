import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Gatepax AI",
    role: "Frontend Developer",
    hook: "Sub-second voice interactions that feel like talking to a human.",
    problem: "Critical UI bugs breaking user flows. No voice-first UI existed.",
    thinking: "Identified root causes; designed WebRTC pipeline for voice; integrated Stripe payment flow seamlessly.",
    solution: "Real-time voice assistant UI with sub-second response; cleaner state management; CI/CD with GitHub Actions.",
    impact: ["Sub-second interactions", "Zero regressions", "Frictionless checkout"]
  },
  {
    id: "02",
    title: "Smart B-Roll",
    role: "AI Video Engineer",
    hook: "AI that understands pacing and semantic context in video editing.",
    problem: "Manual B-roll selection is slow, subjective, and breaks flow.",
    thinking: "Whisper for STT → GPT-4o vision for scene understanding → embeddings for semantic alignment.",
    solution: "AI-powered video assistant. FFmpeg for frame extraction. Heuristics for natural pacing.",
    impact: ["Automated suggestions", "Semantic matching", "Full-stack asset UI"]
  },
  {
    id: "03",
    title: "AiVoiceSDR",
    role: "Full Stack AI Engineer",
    hook: "A sales agent that actually listens and responds in real-time.",
    problem: "Sales outreach is repetitive; human SDRs can't scale 24/7.",
    thinking: "Sub-second streaming pipeline → non-blocking I/O → conversation state management + intent detection.",
    solution: "End-to-end AI voice agent for real-time conversations and automated lead qualification.",
    impact: ["Streaming pipeline", "Structured lead data", "Contextual memory"]
  }
];

export function SelectedWork() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-24 inline-block bg-primary text-primary-foreground p-4 border-4 border-secondary transform -rotate-2"
      >
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter hover-target">Selected Work</h2>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="relative"
          >
            {/* Massive Background Number */}
            <div className="absolute -top-20 -left-10 text-[300px] md:text-[400px] font-display font-black text-muted opacity-50 select-none z-0 pointer-events-none leading-none tracking-tighter mix-blend-overlay -rotate-6">
              {project.id}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* Title & Hook */}
              <div className="lg:col-span-5 bg-background text-foreground p-8 border-4 border-secondary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform transition-transform hover:-translate-y-2">
                <h3 className="text-4xl md:text-5xl font-display uppercase mb-4 leading-none">{project.title}</h3>
                <p className="text-primary font-mono text-sm uppercase tracking-wider mb-6 font-bold">{project.role}</p>
                <p className="text-xl italic font-sans font-medium mb-8 leading-snug">"{project.hook}"</p>
                
                <div className="space-y-2 border-t-4 border-secondary pt-4 mt-auto">
                  <p className="text-sm font-bold uppercase tracking-widest font-mono">Impact Highlights</p>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-mono font-medium">
                        <span className="text-primary">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Details - Typographic layout */}
              <div className="lg:col-span-7 space-y-8 font-sans">
                <div className="border-l-4 border-primary pl-6 py-2 transform rotate-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono text-primary">Problem</h4>
                  <p className="text-xl leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6 py-2 transform -rotate-1">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Thinking</h4>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {project.thinking}
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground p-6 border-4 border-secondary transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Solution</h4>
                  <p className="text-lg leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
