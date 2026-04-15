import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Recyclaro",
    role: "Product & UI/UX Intern",
    context:
      "The product had useful capabilities, but the experience asked users to think in features instead of goals.",
    constraint:
      "The challenge was not just visual design. It was understanding business workflows, user intent, and how information architecture was creating friction.",
    decision:
      "I audited the core journeys in Figma, reorganized the flows around user intent, and translated those ideas into UI patterns the team could scale.",
    tradeoffs:
      "I favored clarity over feature density. That meant reducing choices on each screen and making primary actions more explicit.",
    outcome_metrics: [
      "Improved discoverability across core journeys",
      "Reduced cognitive load by shifting to role-based, intent-driven flows",
      "Aligned product, engineering, and growth around a clearer UI system",
    ],
  },
  {
    id: "02",
    title: "Gatepax AI",
    role: "Frontend Developer",
    context:
      "The product needed a more reliable frontend and smoother user journeys, especially around payments and real-time interactions.",
    constraint:
      "The work spanned debugging interface inconsistencies, handling state-heavy UI, and designing for low-latency interaction patterns.",
    decision:
      "I resolved critical UI issues, improved checkout flows, and built a browser-based voice assistant interface using WebRTC and OpenAI APIs.",
    tradeoffs:
      "I prioritized responsiveness and reliability first, then layered in richer interaction. Shipping steady improvements mattered more than chasing complexity.",
    outcome_metrics: [
      "Improved consistency across filter and breadcrumb flows",
      "Enabled sub-second voice interaction patterns in the browser",
      "Reduced checkout friction through a simpler Stripe-based flow",
    ],
  },
  {
    id: "03",
    title: "Independent AI Builds",
    role: "Hands-on experimentation",
    context:
      "Outside internships, I build side projects to understand how modern interfaces behave under real product constraints.",
    constraint:
      "These systems combine UX decisions with compute, latency, state management, and media pipelines, so every feature has engineering tradeoffs behind it.",
    decision:
      "I built projects like an AI video editing assistant and a voice SDR workflow to learn how product ideas survive contact with real implementation details.",
    tradeoffs:
      "I use side projects as learning environments, so I optimize for depth of understanding and experimentation instead of polishing every edge for production.",
    outcome_metrics: [
      "Built end-to-end flows from interface to AI pipeline",
      "Practiced designing around latency, async work, and user feedback loops",
      "Strengthened systems thinking beyond surface-level frontend work",
    ],
  },
];

export function SelectedWork() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-6 py-32 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-10 inline-block -rotate-2 border-4 border-secondary bg-primary p-4 text-primary-foreground"
      >
        <h2 className="text-5xl tracking-tighter md:text-7xl">Experience Highlights</h2>
      </motion.div>

      <p className="mb-24 max-w-3xl font-sans text-lg font-medium leading-relaxed text-secondary-foreground/80 md:text-xl">
        A quick view of the kind of work I have done so far: simplifying product journeys, improving frontend
        reliability, and learning how systems behave when the experience has to work in the real world.
      </p>

      <div className="space-y-32">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -top-20 -left-10 z-0 -rotate-6 select-none text-[300px] leading-none tracking-tighter text-muted opacity-50 mix-blend-overlay md:text-[400px]">
              {project.id}
            </div>

            <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="border-4 border-secondary bg-background p-8 text-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:col-span-5">
                <h3 className="mb-4 text-4xl leading-none md:text-5xl">{project.title}</h3>
                <p className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-primary">{project.role}</p>

                <div className="mb-8">
                  <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Context
                  </h4>
                  <p className="font-sans text-xl font-medium leading-snug">{project.context}</p>
                </div>

                <button
                  onClick={() => toggleExpand(project.id)}
                  className="hover-target flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
                >
                  {expanded[project.id] ? (
                    <>
                      <ChevronUp size={16} /> Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} /> View Details
                    </>
                  )}
                </button>
              </div>

              <div className="font-sans lg:col-span-7">
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
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="border-l-4 border-secondary py-2 pl-6">
                          <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">Constraint</h4>
                          <p className="text-lg font-medium leading-relaxed">{project.constraint}</p>
                        </div>
                        <div className="border-l-4 border-primary py-2 pl-6">
                          <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest text-primary">
                            Decision
                          </h4>
                          <p className="text-lg font-medium leading-relaxed">{project.decision}</p>
                        </div>
                      </div>

                      <div className="border-4 border-secondary bg-primary p-6 text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">Trade-off</h4>
                        <p className="text-lg font-bold leading-relaxed">{project.tradeoffs}</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {project.outcome_metrics.map((metric, index) => (
                          <div key={metric} className="border-t-4 border-foreground pt-4">
                            <p className="mb-1 font-mono text-sm font-bold text-muted-foreground">
                              Outcome 0{index + 1}
                            </p>
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
                      className="border-l-4 border-primary py-2 pl-6"
                    >
                      <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">Key Outcome</h4>
                      <p className="text-2xl font-bold leading-relaxed">{project.outcome_metrics[0]}</p>
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
