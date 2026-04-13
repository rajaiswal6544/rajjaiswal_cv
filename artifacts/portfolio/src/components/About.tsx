import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Award, Code2, Trophy } from "lucide-react";

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            I think like a product owner, <br className="hidden md:block"/>
            build like an engineer.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My approach bridges design thinking and engineering precision. I don't believe in silos between frontend, backend, and product. A great feature isn't just one that compiles without errors—it's one that solves a real user problem seamlessly.
            </p>
            <p>
              Graduating in 2025 with a B.Tech in CS from RCCIIT (CGPA 7.79), I've focused my time on building real-time AI applications and elegant, high-performance interfaces.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Github size={20} /> <span className="font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Linkedin size={20} /> <span className="font-medium">LinkedIn</span>
            </a>
            <a href="mailto:rajaiswaldev24@gmail.com" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Mail size={20} /> <span className="font-medium">Email</span>
            </a>
            <a href="tel:+916290791304" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Phone size={20} /> <span className="font-medium">+91 6290791304</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="p-6 bg-card border border-border rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Code2 className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Codeforces Specialist</h3>
              <p className="text-muted-foreground">Rating 1425. Ranked 1891 in CF Round 985. 350+ DSA problems solved.</p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Trophy className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Hackathon Finalist</h3>
              <p className="text-muted-foreground">Smart Bengal Hackathon Finalist. Proven ability to build and ship under pressure.</p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Award className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">LeetCode Competitor</h3>
              <p className="text-muted-foreground">Ranked 1976 in Biweekly Contest 138.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
