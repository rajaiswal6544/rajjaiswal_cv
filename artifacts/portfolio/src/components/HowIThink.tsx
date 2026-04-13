import { motion } from "framer-motion";

const Node = ({ label, tech, delay = 0, onClick, rotate = 0 }: { label: string, tech: string, delay?: number, onClick: () => void, rotate?: number }) => (
  <motion.button 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
    onClick={onClick}
    className={`relative z-10 flex flex-col items-center justify-center p-4 bg-background border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] w-40 text-center hover:bg-primary hover:text-primary-foreground transition-colors group cursor-none hover-target transform rotate-${rotate}`}
  >
    <span className="font-display text-xl mb-1 group-hover:text-primary-foreground text-foreground uppercase">{label}</span>
    <span className="text-xs text-primary group-hover:text-foreground font-mono font-bold">{tech}</span>
  </motion.button>
);

const Edge = ({ delay = 0, horizontal = false, length = "w-16" }: { delay?: number, horizontal?: boolean, length?: string }) => (
  <div className={`relative ${horizontal ? `${length} h-1` : `h-16 w-1 mx-auto`} bg-foreground overflow-hidden rounded-full`}>
    <motion.div 
      initial={{ scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0, originX: 0, originY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "circOut" }}
      className={`absolute inset-0 bg-primary ${horizontal ? '' : 'origin-top'}`}
    />
  </div>
);

export function HowIThink() {
  const steps = [
    {
      num: "01",
      title: "FRAME IT",
      principle: "Before writing code, I write the problem statement. If I can't explain the user's pain in one sentence, I don't understand it yet.",
      example: "Voice AI latency > 800ms destroys conversational flow → the entire architecture must serve sub-800ms."
    },
    {
      num: "02",
      title: "FIND THE CONSTRAINT",
      principle: "Every system has one bottleneck. I find it first, because all other decisions flow from it.",
      example: "In the B-Roll pipeline, the bottleneck was GPT-4o latency — so I made the UI async and decoupled processing from display."
    },
    {
      num: "03",
      title: "DECIDE THE TRADE-OFF",
      principle: "There's no perfect solution — only trade-offs. I name them explicitly before building.",
      example: "Local TTS vs cloud TTS: latency win vs quality loss. I chose latency because the product dies without it."
    },
    {
      num: "04",
      title: "SHIP AND MEASURE",
      principle: "Build the smallest thing that tests the hypothesis. Then measure real usage.",
      example: "Voice pipeline: shipped the WebRTC prototype in day 1 to validate latency. Everything else came after."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-24 text-center"
        >
          <div className="inline-block bg-primary text-primary-foreground p-4 border-4 border-background transform -rotate-2 mb-6">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter hover-target">HOW I APPROACH PROBLEMS</h2>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Horizontal line for desktop connecting steps */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-background/20 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.2 }}
              className="flex-1 relative z-10 flex flex-col"
            >
              <div className="text-5xl font-display font-black text-primary mb-6 bg-foreground inline-block px-2 transform -rotate-2 w-max shadow-[4px_4px_0px_0px_rgba(184,255,0,1)]">
                {step.num}
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight mb-4">{step.title}</h3>
              
              <div className="bg-background/5 border-2 border-background/20 p-6 mb-4 flex-grow">
                <p className="font-sans font-medium text-lg leading-relaxed text-background/80">
                  {step.principle}
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4 py-2 mt-auto">
                <p className="font-mono text-sm text-primary font-bold uppercase mb-1">Example</p>
                <p className="font-sans text-sm italic leading-relaxed text-background/90">
                  {step.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
