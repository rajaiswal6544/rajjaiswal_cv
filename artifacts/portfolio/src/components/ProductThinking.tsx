import { motion } from "framer-motion";

const steps = [
  {
    label: "USER",
    content: "Who is this for and what is their immediate goal?"
  },
  {
    label: "FRICTION",
    content: "Where do they drop off? What causes cognitive overload?"
  },
  {
    label: "FLOW",
    content: "Mapping the path of least resistance to value."
  },
  {
    label: "OUTCOME",
    content: "The measurable impact on retention and intent."
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-6">Product Thinking</h2>
          <p className="text-xl md:text-3xl font-sans font-medium max-w-3xl mx-auto p-4 border-4 border-secondary border-dashed rotate-1 bg-background hover-target">
            Taking the Recyclaro UX Audit approach: moving from feature-based navigation to role-based, intent-driven flows.
          </p>
        </motion.div>

        {/* Whiteboard / Sketchbook Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          
          {/* Connecting arrow line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[4px] bg-foreground border-dashed border-b-4 border-transparent z-0 -translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? 2 : -2) }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
              className="relative z-10 bg-background border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex flex-col h-full hover:bg-primary hover:text-primary-foreground transition-colors group"
            >
              <div className="text-3xl font-display mb-4 border-b-4 border-foreground pb-2 group-hover:border-primary-foreground">
                {step.label}
              </div>
              <p className="font-mono text-sm leading-relaxed font-medium">
                {step.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
