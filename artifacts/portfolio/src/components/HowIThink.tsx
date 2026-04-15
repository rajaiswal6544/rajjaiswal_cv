import { motion } from "framer-motion";

export function HowIThink() {
  const steps = [
    {
      num: "01",
      title: "Frame the problem",
      principle:
        "Before implementation, I want a short and honest version of the user problem. Clear framing usually removes half the noise.",
      example:
        "If a user journey feels heavy, I first ask whether the flow is asking them to make too many decisions too early.",
    },
    {
      num: "02",
      title: "Find the real constraint",
      principle:
        "Every product issue has a limiting factor. Sometimes it is latency, sometimes state complexity, and sometimes unclear information architecture.",
      example:
        "In real-time UI work, latency is not just a technical detail. It changes what interaction patterns are even possible.",
    },
    {
      num: "03",
      title: "Choose the trade-off",
      principle:
        "I like naming trade-offs early. A cleaner product usually comes from being explicit about what matters most in this version.",
      example:
        "I will often trade feature density for clarity if it helps users reach the main action with less hesitation.",
    },
    {
      num: "04",
      title: "Ship and learn",
      principle:
        "I prefer progress that reaches users over perfectly isolated planning. Once something is real, the next decision gets easier.",
      example:
        "A smaller shipped version tells you more about the product than a bigger untested one.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-foreground px-6 py-32 text-background md:px-12 lg:px-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-24 text-center"
        >
          <div className="mb-6 inline-block -rotate-2 border-4 border-background bg-primary p-4 text-primary-foreground">
            <h2 className="text-5xl tracking-tighter md:text-7xl">How I Approach Problems</h2>
          </div>
          <p className="mx-auto max-w-3xl font-sans text-lg font-medium leading-relaxed text-background/80 md:text-xl">
            I am not attached to one stack or one kind of project. What stays consistent is how I break things
            down, make trade-offs, and move work toward something usable.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-8 md:flex-row">
          <div className="absolute top-12 left-0 z-0 hidden h-1 w-full bg-background/20 md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.2 }}
              className="relative z-10 flex flex-1 flex-col"
            >
              <div className="mb-6 inline-block w-max rotate-[-2deg] bg-foreground px-2 text-5xl font-black text-primary shadow-[4px_4px_0px_0px_rgba(184,255,0,1)]">
                {step.num}
              </div>
              <h3 className="mb-4 text-2xl tracking-tight">{step.title}</h3>

              <div className="mb-4 flex-grow border-2 border-background/20 bg-background/5 p-6">
                <p className="font-sans text-lg font-medium leading-relaxed text-background/80">{step.principle}</p>
              </div>

              <div className="mt-auto border-l-4 border-primary py-2 pl-4">
                <p className="mb-1 font-mono text-sm font-bold uppercase text-primary">Example</p>
                <p className="font-sans text-sm italic leading-relaxed text-background/90">{step.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
