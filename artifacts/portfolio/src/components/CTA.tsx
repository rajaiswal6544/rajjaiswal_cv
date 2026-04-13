import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 text-center relative overflow-hidden bg-background">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Let's build something <span className="text-primary">impactful.</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          Open to frontend, full-stack, and product engineering roles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:rajaiswaldev24@gmail.com"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            Get in touch <ArrowRight size={20} />
          </a>
          <a 
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-secondary/80 transition-colors border border-border w-full sm:w-auto"
          >
            <FileText size={20} /> View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
