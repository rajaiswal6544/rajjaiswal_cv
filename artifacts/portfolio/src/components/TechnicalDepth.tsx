import { motion } from "framer-motion";

const Node = ({ label, tech, delay = 0 }: { label: string, tech: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative z-10 flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl shadow-lg w-40 text-center"
  >
    <span className="font-bold text-white text-sm mb-1">{label}</span>
    <span className="text-xs text-primary font-mono">{tech}</span>
  </motion.div>
);

const Edge = ({ delay = 0, horizontal = false }: { delay?: number, horizontal?: boolean }) => (
  <div className={`relative ${horizontal ? 'w-16 h-[2px]' : 'h-16 w-[2px] mx-auto'} bg-border`}>
    <motion.div 
      initial={{ scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0, originX: 0, originY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`absolute inset-0 bg-primary ${horizontal ? '' : 'origin-top'}`}
    />
  </div>
);

export function TechnicalDepth() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Architecture</h2>
          <p className="text-xl text-muted-foreground">Systems over syntax. Here is how my apps are built.</p>
        </motion.div>

        <div className="space-y-24">
          {/* Pipeline 1 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-border pb-4 inline-block">Real-time Voice Pipeline</h3>
            <div className="flex flex-col md:flex-row items-center justify-start gap-0">
              <Node label="Client" tech="Browser UI" delay={0} />
              <Edge horizontal delay={0.2} />
              <Node label="Transport" tech="WebRTC" delay={0.4} />
              <Edge horizontal delay={0.6} />
              <Node label="Processing" tech="OpenAI Whisper" delay={0.8} />
              <Edge horizontal delay={1.0} />
              <Node label="Output" tech="TTS Streaming" delay={1.2} />
            </div>
          </div>

          {/* Pipeline 2 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-border pb-4 inline-block">AI Video Pipeline</h3>
            
            <div className="hidden md:flex items-center justify-start gap-0 flex-wrap lg:flex-nowrap">
              <Node label="Input" tech="A-Roll Audio" delay={0} />
              <Edge horizontal delay={0.2} />
              <Node label="STT" tech="Whisper" delay={0.4} />
              <Edge horizontal delay={0.6} />
              <Node label="Vision" tech="GPT-4o" delay={0.8} />
              <Edge horizontal delay={1.0} />
              <Node label="Alignment" tech="Embeddings" delay={1.2} />
              <Edge horizontal delay={1.4} />
              <Node label="Render" tech="FFmpeg" delay={1.6} />
            </div>

            {/* Mobile Vertical View for Pipeline 2 */}
            <div className="flex flex-col md:hidden items-center gap-0">
              <Node label="Input" tech="A-Roll Audio" delay={0} />
              <Edge delay={0.2} />
              <Node label="STT" tech="Whisper" delay={0.4} />
              <Edge delay={0.6} />
              <Node label="Vision" tech="GPT-4o" delay={0.8} />
              <Edge delay={1.0} />
              <Node label="Alignment" tech="Embeddings" delay={1.2} />
              <Edge delay={1.4} />
              <Node label="Render" tech="FFmpeg" delay={1.6} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
