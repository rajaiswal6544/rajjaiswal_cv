import { Switch, Route, Router as WouterRouter } from "wouter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { ProductThinking } from "@/components/ProductThinking";
import { Chatbot } from "@/components/Chatbot";
import { TechnicalDepth } from "@/components/TechnicalDepth";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 3 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary pointer-events-none z-[99] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
}

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <div className="noise-bg" />
      <Hero />
      <div className="bg-secondary text-secondary-foreground jagged-divider pb-20 -mt-4 relative z-10 pt-10">
        <SelectedWork />
      </div>
      <ProductThinking />
      <div className="bg-secondary text-secondary-foreground py-20">
        <Chatbot />
      </div>
      <TechnicalDepth />
      <About />
      <CTA />
    </div>
  );
}

function App() {
  // We want a light mode base, but some sections are dark.
  // We'll remove the forced dark mode.
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <>
      <CustomCursor />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </WouterRouter>
    </>
  );
}

export default App;
