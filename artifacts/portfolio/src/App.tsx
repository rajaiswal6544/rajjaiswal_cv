import { Switch, Route, Router as WouterRouter } from "wouter";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { ProductThinking } from "@/components/ProductThinking";
import { Chatbot } from "@/components/Chatbot";
import { TechnicalDepth } from "@/components/TechnicalDepth";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground">
      <div className="noise-bg" />
      <Hero />
      <SelectedWork />
      <ProductThinking />
      <TechnicalDepth />
      <Chatbot />
      <About />
      <CTA />
    </div>
  );
}

function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
