import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Info } from "lucide-react";

type NodeData = {
  label: string;
  tech: string;
  reasoning: string;
  hasBottleneck?: string;
  bottleneckTooltip?: string;
};

const pipeline1: NodeData[] = [
  {
    label: "Discover",
    tech: "Audit + Notes",
    reasoning: "I start by understanding where users get stuck and where the product is doing too much work in the wrong place.",
  },
  {
    label: "Map",
    tech: "Flows",
    reasoning: "User journeys help me align screens with intent instead of isolated UI components.",
  },
  {
    label: "Build",
    tech: "React UI",
    reasoning: "I care about implementation details because product quality often breaks in state, async handling, and edge cases.",
    hasBottleneck: "right",
    bottleneckTooltip: "Most UX issues become state and feedback issues in code.",
  },
  {
    label: "Ship",
    tech: "Deploy + Iterate",
    reasoning: "A feature only becomes useful after it reaches users and we learn what still feels rough.",
  },
];

const pipeline2: NodeData[] = [
  {
    label: "Input",
    tech: "Browser UI",
    reasoning: "Good real-time experiences begin with a clear interface that reacts fast and communicates state clearly.",
  },
  {
    label: "Transport",
    tech: "WebRTC / WS",
    reasoning: "For low-latency interaction, transport decisions shape the user experience as much as the UI design does.",
  },
  {
    label: "Process",
    tech: "AI Services",
    reasoning: "Speech, vision, or language models are useful only when their latency and failure states are handled deliberately.",
    hasBottleneck: "right",
    bottleneckTooltip: "Latency is usually the experience bottleneck in AI features.",
  },
  {
    label: "Feedback",
    tech: "Streaming UI",
    reasoning: "Users should feel progress immediately. Async feedback is often what makes advanced systems usable.",
  },
  {
    label: "Learn",
    tech: "Iteration",
    reasoning: "The implementation is not complete until the interaction feels understandable and dependable for users.",
  },
];

const Node = ({
  data,
  delay = 0,
  onClick,
  isActive,
  showAll,
}: {
  data: NodeData;
  delay?: number;
  onClick: () => void;
  isActive: boolean;
  showAll: boolean;
}) => {
  const showTooltip = isActive || showAll;

  return (
    <div className="relative flex flex-col items-center group/node">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
        onClick={onClick}
        className={`hover-target relative z-10 flex w-32 flex-col items-center justify-center border-4 bg-background p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors md:w-40 ${
          isActive ? "border-primary" : "border-foreground"
        } hover:bg-primary hover:text-primary-foreground`}
      >
        <span className="mb-1 text-lg uppercase text-foreground md:text-xl">{data.label}</span>
        <span className={`font-mono text-[10px] font-bold md:text-xs ${isActive ? "text-foreground" : "text-primary"}`}>
          {data.tech}
        </span>

        {data.hasBottleneck && (
          <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full border-2 border-background bg-destructive transition-transform group-hover/node:scale-125">
            <div className="pointer-events-none absolute top-6 right-0 z-50 w-max bg-destructive p-2 text-[10px] text-destructive-foreground opacity-0 transition-opacity group-hover/node:opacity-100">
              {data.bottleneckTooltip}
            </div>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-none absolute top-full z-20 mt-2 w-64 border-l-4 border-primary bg-foreground p-4 text-sm font-medium text-background shadow-xl"
          >
            <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-primary">Why it matters</p>
            {data.reasoning}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Edge = ({
  delay = 0,
  horizontal = false,
  length = "w-8 md:w-16",
}: {
  delay?: number;
  horizontal?: boolean;
  length?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-full bg-foreground shrink-0 ${
      horizontal ? `${length} h-1` : "mx-auto h-8 w-1"
    }`}
  >
    <motion.div
      initial={{ scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0, originX: 0, originY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "circOut" }}
      className={`absolute inset-0 bg-primary ${horizontal ? "" : "origin-top"}`}
    />
  </div>
);

export function TechnicalDepth() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [showAllReasoning, setShowAllReasoning] = useState(false);

  return (
    <section className="relative overflow-hidden border-t-8 border-foreground bg-background px-6 py-32 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-24 flex flex-col items-end justify-between gap-8 border-b-4 border-foreground pb-8 md:flex-row"
        >
          <div>
            <div className="mb-4 inline-block bg-foreground px-6 py-2 text-background">
              <h2 className="text-5xl tracking-tighter md:text-7xl">How I Build</h2>
            </div>
            <p className="max-w-xl font-sans text-xl font-medium text-foreground">
              Two ways I usually think about execution: improving a product journey and designing an interaction
              that still feels good when the system behind it gets complex.
            </p>
          </div>

          <button
            onClick={() => {
              setShowAllReasoning(!showAllReasoning);
              setActiveNode(null);
            }}
            className="hover-target flex items-center gap-2 border-4 border-foreground bg-primary px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground"
          >
            <Info size={16} />
            {showAllReasoning ? "Hide Notes" : "Show Notes"}
          </button>
        </motion.div>

        <div className="space-y-48">
          <div className="relative">
            <div className="absolute -top-8 -left-4 rounded-full border-2 border-primary bg-background px-2 py-1 font-mono text-sm font-bold text-primary">
              FIG 1: Product work
            </div>
            <h3 className="mb-12 text-3xl text-foreground">From friction to shipped interface</h3>

            <div className="relative flex min-h-[160px] flex-col items-center justify-start gap-2 md:flex-row">
              {pipeline1.map((node, index) => (
                <div key={node.label} className="flex flex-col items-center md:flex-row">
                  <Node
                    data={node}
                    delay={index * 0.2}
                    onClick={() => setActiveNode(activeNode === node.label ? null : node.label)}
                    isActive={activeNode === node.label}
                    showAll={showAllReasoning}
                  />
                  {index < pipeline1.length - 1 && <Edge horizontal delay={index * 0.2 + 0.1} />}
                </div>
              ))}
            </div>

            <div className="mt-16 border-l-4 border-primary bg-muted/50 p-6">
              <h4 className="mb-2 font-mono text-sm font-bold uppercase">Why this matters</h4>
              <p className="font-sans text-lg font-medium leading-relaxed">
                Good frontend work is rarely just component work. It is usually the translation layer between user
                intent, business logic, and a flow that needs to feel simple.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-4 rounded-full border-2 border-primary bg-background px-2 py-1 font-mono text-sm font-bold text-primary">
              FIG 2: Real-time systems
            </div>
            <h3 className="mb-12 text-3xl text-foreground">Interfaces shaped by technical constraints</h3>

            <div className="relative flex min-h-[160px] flex-col items-center justify-start gap-2 flex-wrap md:flex-row xl:flex-nowrap">
              {pipeline2.map((node, index) => (
                <div key={node.label} className="flex flex-col items-center md:flex-row">
                  <Node
                    data={node}
                    delay={index * 0.2}
                    onClick={() => setActiveNode(activeNode === node.label ? null : node.label)}
                    isActive={activeNode === node.label}
                    showAll={showAllReasoning}
                  />
                  {index < pipeline2.length - 1 && <Edge horizontal delay={index * 0.2 + 0.1} />}
                </div>
              ))}
            </div>

            <div className="mt-16 border-l-4 border-primary bg-muted/50 p-6">
              <h4 className="mb-2 font-mono text-sm font-bold uppercase">Why this matters</h4>
              <p className="font-sans text-lg font-medium leading-relaxed">
                I enjoy frontend work most when technical constraints directly influence the user experience. That
                is where system design and product judgment start to overlap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
