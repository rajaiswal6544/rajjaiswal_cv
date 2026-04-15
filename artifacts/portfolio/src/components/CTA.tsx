import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary px-6 py-24 text-center text-primary-foreground">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, currentColor 2px, transparent 2px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="flex flex-col items-center font-display uppercase">
          <div className="mb-2 font-serif text-4xl italic lowercase tracking-normal text-foreground/80 md:text-6xl">
            If you are building products that need both
          </div>
          <div
            className="my-4 text-[11vw] leading-[0.8] tracking-tighter text-background text-stroke-primary"
            style={{ WebkitTextStroke: "4px currentColor" }}
          >
            clarity and execution
          </div>
          <div className="border-8 border-foreground bg-background px-6 py-2 text-5xl leading-[0.8] tracking-tighter text-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:text-8xl">
            we should talk.
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="mb-12 max-w-3xl border-4 border-foreground bg-background p-6 font-sans text-xl font-medium text-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:text-2xl">
            I do my best work with teams that care about real user outcomes, thoughtful product decisions, and
            interfaces that feel reliable when shipped.
          </p>

          <div className="flex w-full flex-col items-center gap-6">
            <a
              href="mailto:rajaiswaldev24@gmail.com"
              className="group hover-target relative inline-block overflow-hidden font-display text-4xl uppercase transition-all md:text-6xl"
            >
              <span className="relative z-10 text-foreground transition-colors group-hover:text-background mix-blend-difference">
                rajaiswaldev24@gmail.com
              </span>
              <span className="absolute bottom-0 left-0 z-0 h-[4px] w-full bg-foreground transition-all duration-300 ease-out group-hover:h-full" />
            </a>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href="/Raj_Jaiswal_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover-target border-4 border-foreground bg-foreground px-8 py-4 font-display text-2xl uppercase text-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
              >
                Open Resume
              </a>
              <a
                href="mailto:rajaiswaldev24@gmail.com"
                className="hover-target border-4 border-foreground bg-background px-8 py-4 font-display text-2xl uppercase text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden whitespace-nowrap border-t-8 border-background bg-foreground py-4 text-background">
        <div className="animate-marquee inline-block font-mono text-xl font-bold uppercase tracking-widest">
          PRODUCT THINKING / FRONTEND DEVELOPMENT / UX SYSTEMS / REAL-TIME INTERFACES / OPEN TO WORK /
          PRODUCT THINKING / FRONTEND DEVELOPMENT / UX SYSTEMS / REAL-TIME INTERFACES / OPEN TO WORK /
        </div>
      </div>
    </section>
  );
}
