import { motion } from "framer-motion";

const principles = [
  {
    title: "Start from user intent.",
    content: "People do not care about your feature list. They care about finishing the task in front of them with less confusion.",
  },
  {
    title: "Reduce options, increase clarity.",
    content: "A cleaner flow usually beats a smarter explanation. I try to remove decisions before I try to decorate them.",
  },
  {
    title: "Build with a success condition.",
    content: "I like knowing what improvement should happen before implementation starts, whether that is speed, reliability, or a smoother conversion path.",
  },
  {
    title: "Treat constraints as design inputs.",
    content: "Latency, async processing, and edge cases are not backend-only concerns. They shape the experience that users feel.",
  },
];

export function ProductThinking() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-block rotate-2 border-4 border-secondary bg-primary p-4 text-primary-foreground">
            <h2 className="text-5xl tracking-tighter md:text-7xl">How I Improve Products</h2>
          </div>
          <p className="mx-auto max-w-3xl font-sans text-lg font-medium leading-relaxed text-foreground md:text-xl">
            My process is usually some version of this: understand where users hesitate, simplify the path, and
            make the interface carry more of the work.
          </p>
        </motion.div>

        <div className="mb-32">
          <div className="mb-8 text-center">
            <span className="inline-block rotate-[-1deg] border-2 border-foreground bg-foreground px-4 py-1 font-mono text-sm font-bold uppercase tracking-widest text-background">
              Example: journey redesign thinking
            </span>
          </div>

          <div className="grid grid-cols-1 gap-0 border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2">
            <div className="border-b-4 border-foreground bg-muted p-8 opacity-80 grayscale md:border-r-4 md:border-b-0 md:p-12">
              <h3 className="mb-8 text-3xl tracking-tight text-muted-foreground">Before</h3>
              <div className="space-y-4 font-mono text-sm font-medium text-foreground">
                <div className="border-2 border-foreground bg-background p-4">Feature-heavy navigation</div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-foreground bg-background p-4">Users scan too many paths</div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-foreground bg-background p-4">Higher cognitive load</div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-destructive bg-destructive/10 p-4 font-bold text-destructive">
                  Friction shows up before the task is complete
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 text-primary-foreground md:p-12">
              <h3 className="mb-8 text-3xl tracking-tight">After</h3>
              <div className="space-y-4 font-mono text-sm font-bold">
                <div className="border-2 border-foreground bg-background p-4 text-foreground">
                  Goal-first entry points
                </div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-foreground bg-background p-4 text-foreground">
                  Fewer choices per screen
                </div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-foreground bg-background p-4 text-foreground">
                  Clear primary action each step
                </div>
                <div className="text-center text-xl">v</div>
                <div className="border-2 border-foreground bg-foreground p-4 font-bold text-background">
                  A journey that feels easier to finish
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
              className="group border-4 border-foreground bg-background p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <div className="mb-4 text-2xl tracking-tight text-foreground group-hover:text-primary-foreground">
                {principle.title}
              </div>
              <p className="font-sans text-lg font-medium leading-relaxed text-muted-foreground group-hover:text-primary-foreground">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
