import { motion } from "framer-motion";

const highlights = [
  { value: "7.79", label: "CGPA in B.Tech CSE" },
  { value: "350+", label: "DSA problems solved" },
  { value: "1425", label: "Codeforces rating" },
  { value: "Finalist", label: "Smart Bengal Hackathon" },
];

export function About() {
  return (
    <section className="relative overflow-hidden border-y-8 border-foreground bg-secondary px-6 py-32 text-secondary-foreground md:px-12 lg:px-24">
      <div className="wave-divider absolute top-0 left-0 z-10 h-8 w-full bg-background" />

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 pt-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative mx-auto aspect-square flex w-full max-w-md items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-dashed border-primary opacity-50"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border-4 border-secondary-foreground"
          />

          <div className="hover-target absolute inset-16 flex items-center justify-center overflow-hidden border-8 border-foreground bg-primary shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-[120px] leading-none tracking-tighter text-foreground">RJ</span>
          </div>

          <div className="absolute top-0 right-0 z-30 rotate-12 border-4 border-foreground bg-background px-4 py-2 font-display text-2xl uppercase text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Product + UI
          </div>

          <div className="absolute bottom-10 left-0 z-30 -rotate-12 border-4 border-foreground bg-primary px-4 py-2 font-display text-2xl uppercase text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Frontend + Systems
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <div className="rotate-[-1deg] border-8 border-foreground bg-background p-8 text-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:p-12">
            <h2 className="mb-8 text-4xl leading-[0.9] tracking-tighter md:text-6xl">
              I like work that sits between product thinking, design clarity, and engineering execution.
            </h2>

            <div className="space-y-6 font-sans text-lg font-medium leading-relaxed md:text-xl">
              <p>
                I graduated from RCC Institute of Information Technology, Kolkata, with a B.Tech in Computer
                Science and Engineering. My strongest work happens when I can understand the user problem,
                simplify the flow, and then build the interface carefully enough that the solution feels obvious.
              </p>
              <p>
                My experience spans UX audits, frontend implementation, payment journeys, real-time product
                interfaces, and AI-assisted workflows. I am most comfortable in teams that care about shipping,
                measuring, and iterating instead of just adding features.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-4 p-4 font-mono text-sm font-bold uppercase ${
                    index % 2 === 0
                      ? "border-foreground bg-primary text-primary-foreground"
                      : "border-background bg-foreground text-background"
                  }`}
                >
                  <span className="mb-1 block border-b-2 pb-1 text-3xl">{item.value}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
