import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Gatepax AI",
    role: "Frontend Developer",
    problem: "Critical UI bugs breaking user flows (filter state bugs, breadcrumb mismatches). No voice-first UI.",
    thinking: "Identified root causes; designed WebRTC pipeline for voice; integrated Stripe payment flow.",
    solution: "Real-time voice assistant UI with sub-second response; cleaner state management; CI/CD with GitHub Actions.",
    impact: ["Sub-second voice interactions", "Zero filter state regressions", "Checkout friction reduced by redesigned Stripe flow"]
  },
  {
    id: "02",
    title: "Smart B-Roll Inserter",
    role: "AI Video Engineer",
    problem: "Manual B-roll selection in video editing is slow, subjective, and breaks creative flow.",
    thinking: "Multi-stage AI pipeline — Whisper for speech-to-text → GPT-4o vision for scene understanding → embeddings for semantic alignment.",
    solution: "AI-powered video editing assistant. FFmpeg for frame extraction. Heuristics for natural pacing (minimum clip gap).",
    impact: ["Automated B-roll suggestion from A-roll speech", "Context-aware semantic matching", "Full-stack UI for asset management"]
  },
  {
    id: "03",
    title: "AiVoiceSDR",
    role: "Full Stack AI Engineer",
    problem: "Sales outreach is repetitive; human SDRs are expensive and can't scale 24/7.",
    thinking: "Sub-second streaming pipeline → non-blocking I/O → conversation state management + intent detection.",
    solution: "End-to-end AI voice agent for real-time conversations and automated lead qualification.",
    impact: ["Sub-second streaming pipeline", "Structured lead data extraction", "Session tracking + contextual memory"]
  }
];

export function SelectedWork() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
        <div className="w-12 h-1 bg-primary" />
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:rtl' : ''}`}
          >
            {/* Number & Title */}
            <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
              <div className="text-8xl md:text-9xl font-bold text-muted/30 mb-6 leading-none">
                {project.id}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
              <p className="text-primary font-mono text-sm uppercase tracking-wider mb-8">{project.role}</p>
              
              <div className="space-y-2">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Impact</p>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-lg flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Details */}
            <div className={`lg:col-span-7 space-y-12 ${index % 2 !== 0 ? 'lg:ltr lg:pl-12' : 'lg:pr-12'}`}>
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-xl text-white/80 leading-relaxed border-l-2 border-border pl-6 py-2">
                  {project.problem}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">Thinking</h4>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.thinking}
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-card-border">
                <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Solution</h4>
                <p className="text-lg text-white/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
