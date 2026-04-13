import { motion } from "framer-motion";

const thoughts = [
  {
    title: "User flows & onboarding",
    content: "Designing the entry point. Identifying where users lose context and providing progressive disclosure rather than upfront cognitive overload."
  },
  {
    title: "Reducing cognitive load",
    content: "Simplifying complex interfaces. Applied during the Recyclaro UX audit to streamline navigation and remove redundant decision points."
  },
  {
    title: "Improving retention",
    content: "Analyzing drop-off points. Reframing the UI to focus on core actions that deliver immediate value, preventing user churn."
  },
  {
    title: "Intent-driven architecture",
    content: "Re-architecting information. Moving from feature-based navigation to role-based, intent-driven flows that match mental models."
  }
];

export function ProductThinking() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 md:w-2/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Product Thinking</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I don't just take Figma files and translate them to React. I question the underlying assumptions, map user flows, and optimize for intent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border transform -translate-x-1/2" />
          
          {thoughts.map((thought, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative ${i % 2 === 0 ? 'md:pr-12 lg:pr-24 md:text-right' : 'md:pl-12 lg:pl-24 md:mt-32'}`}
            >
              {/* Timeline dot */}
              <div className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-primary ${i % 2 === 0 ? 'right-[-6.5px]' : 'left-[-6.5px]'}`} />
              
              <div className="p-8 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">{thought.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{thought.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
