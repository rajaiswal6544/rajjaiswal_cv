import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quickFacts = [
  "Product & UI/UX Intern at Recyclaro",
  "Frontend Developer at Gatepax AI",
  "B.Tech CSE, RCCIIT",
  "Codeforces Specialist",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-background px-4 py-20 text-foreground">
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(560px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(184, 255, 0, 0.08), transparent 78%)`,
          }}
        />
      )}

      <div className="absolute top-10 left-0 z-0 w-full rotate-2 overflow-hidden whitespace-nowrap opacity-20 pointer-events-none select-none">
        <div className="animate-marquee inline-block font-display text-4xl tracking-widest text-primary">
          PRODUCT ENGINEER / FRONTEND DEVELOPER / UX THINKING / REAL-TIME INTERFACES / SYSTEMS MINDSET /
          PRODUCT ENGINEER / FRONTEND DEVELOPER / UX THINKING / REAL-TIME INTERFACES / SYSTEMS MINDSET /
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center"
        >
          <p className="mb-6 inline-block border-4 border-foreground bg-primary px-4 py-2 font-mono text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground">
            Kolkata, India
          </p>

          <h1 className="text-[18vw] leading-[0.82] tracking-tighter md:text-[14vw]">
            RAJ
            <br />
            <span
              className="text-transparent text-stroke-primary"
              style={{ WebkitTextStroke: "2px hsl(var(--primary))" }}
            >
              JAISWAL
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-4 inline-block text-primary"
            >
              _
            </motion.span>
          </h1>

          <div className="mx-auto mt-10 max-w-4xl space-y-6">
            <p className="text-2xl font-display uppercase tracking-tight md:text-5xl">
              I turn messy product problems into clear, usable interfaces.
            </p>
            <p className="mx-auto max-w-3xl border-4 border-foreground bg-background p-5 font-sans text-lg font-medium leading-relaxed shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:text-2xl">
              I am a frontend-focused product engineer with experience across UX audits, scalable UI systems,
              real-time AI interfaces, and shipping improvements that make products easier to use.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:rajaiswaldev24@gmail.com"
              className="hover-target border-4 border-foreground bg-primary px-8 py-4 font-display text-2xl uppercase text-primary-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a
              href="/Raj_Jaiswal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover-target border-4 border-foreground bg-foreground px-8 py-4 font-display text-2xl uppercase text-background shadow-[6px_6px_0px_0px_rgba(184,255,0,1)] transition-transform hover:-translate-y-1"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, type: "spring", stiffness: 100, damping: 15 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          {quickFacts.map((fact, index) => (
            <div
              key={fact}
              className={`border-4 border-foreground p-4 font-mono text-sm font-bold uppercase leading-relaxed ${
                index % 2 === 0
                  ? "bg-background text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {fact}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
