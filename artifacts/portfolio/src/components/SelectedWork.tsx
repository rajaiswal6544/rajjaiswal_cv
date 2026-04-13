import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Gatepax AI",
    role: "Frontend Developer, Mar–Nov 2025",
    context: "Sales and support teams needed real-time voice AI — but no browser-native, sub-second voice interface existed.",
    constraint: "WebRTC requires careful ICE negotiation and audio buffer management. OpenAI streaming has latency cliffs at 500ms.",
    decision: "Built a direct WebRTC → Whisper streaming pipeline, skipping traditional REST round-trips. Used WebSocket for state sync.",
    tradeoffs: "Sacrificed offline capability for real-time fidelity. Chose sub-second UX over battery efficiency on mobile.",
    outcome_metrics: ["<500ms average voice round-trip", "0 filter-state regressions after refactor", "Stripe checkout redesign reduced drop-off by removing 2 unnecessary steps"]
  },
  {
    id: "02",
    title: "Smart B-Roll Inserter",
    role: "AI Video Editing, Jan 2026",
    context: "Video editors spend 40–60% of their time on B-roll selection — a repetitive, subjective task that breaks creative flow.",
    constraint: "Semantic alignment between spoken words and visual footage is a hard AI problem. FFmpeg timing precision required frame-perfect inserts.",
    decision: "Used a 3-stage pipeline: Whisper for transcript → GPT-4o Vision for scene intent → vector embeddings for semantic match. Minimum-gap heuristic to maintain pacing.",
    tradeoffs: "GPT-4o adds latency. Chose accuracy over speed for the suggestion pass. Built async UI so editors don't block while AI processes.",
    outcome_metrics: ["3-stage AI pipeline with semantic B-roll matching", "Minimum clip gap heuristic ensures natural pacing", "Full-stack UI: upload → process → review → export"]
  },
  {
    id: "03",
    title: "AiVoiceSDR",
    role: "AI Voice Sales Agent, May 2025",
    context: "SDR teams spend 70% of their time on calls that never convert. Scaling human SDRs linearly is expensive.",
    constraint: "Voice AI must feel natural — latency above 800ms destroys conversational flow. Intent detection must work in noisy audio.",
    decision: "Sub-second streaming: Whisper STT → Llama3 inference → Piper TTS, all in a non-blocking async pipeline. State machine for conversation flow.",
    tradeoffs: "Used local Piper TTS instead of cloud TTS — traded voice quality for zero latency. Conversation depth limited by context window.",
    outcome_metrics: ["<800ms voice pipeline end-to-end", "Structured lead data extracted per conversation", "Session context tracking across full call duration"]
  }
];

export function SelectedWork() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-24 inline-block bg-primary text-primary-foreground p-4 border-4 border-secondary transform -rotate-2"
      >
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter hover-target">Selected Work</h2>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="relative"
          >
            {/* Massive Background Number */}
            <div className="absolute -top-20 -left-10 text-[300px] md:text-[400px] font-display font-black text-muted opacity-50 select-none z-0 pointer-events-none leading-none tracking-tighter mix-blend-overlay -rotate-6">
              {project.id}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* Left Side: Title & Context */}
              <div className="lg:col-span-5 bg-background text-foreground p-8 border-4 border-secondary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <h3 className="text-4xl md:text-5xl font-display uppercase mb-4 leading-none">{project.title}</h3>
                <p className="text-primary font-mono text-sm uppercase tracking-wider mb-6 font-bold">{project.role}</p>
                
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-muted-foreground">Context</h4>
                  <p className="text-xl font-sans font-medium leading-snug">{project.context}</p>
                </div>
                
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest font-mono text-primary hover:text-foreground transition-colors hover-target"
                >
                  {expanded[project.id] ? <><ChevronUp size={16} /> Hide Deep Dive</> : <><ChevronDown size={16} /> Deep Dive</>}
                </button>
              </div>

              {/* Details - Expandable */}
              <div className="lg:col-span-7 font-sans">
                <AnimatePresence initial={false}>
                  {expanded[project.id] ? (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border-l-4 border-secondary pl-6 py-2">
                          <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Constraint</h4>
                          <p className="text-lg leading-relaxed font-medium">
                            {project.constraint}
                          </p>
                        </div>
                        <div className="border-l-4 border-primary pl-6 py-2">
                          <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono text-primary">Decision</h4>
                          <p className="text-lg leading-relaxed font-medium">
                            {project.decision}
                          </p>
                        </div>
                      </div>

                      <div className="bg-primary text-primary-foreground p-6 border-4 border-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Trade-offs</h4>
                        <p className="text-lg leading-relaxed font-bold">
                          {project.tradeoffs}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.outcome_metrics.map((metric, i) => (
                          <div key={i} className="border-t-4 border-foreground pt-4">
                            <p className="text-sm font-bold font-mono text-muted-foreground mb-1">Metric 0{i + 1}</p>
                            <p className="font-bold leading-tight">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-l-4 border-primary pl-6 py-2"
                    >
                       <h4 className="text-sm font-bold uppercase tracking-widest mb-2 font-mono">Key Outcome</h4>
                       <p className="text-2xl leading-relaxed font-bold">
                         {project.outcome_metrics[0]}
                       </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
