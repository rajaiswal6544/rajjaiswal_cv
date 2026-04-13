import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Info } from "lucide-react";

type NodeData = {
  label: string;
  tech: string;
  reasoning: string;
  hasBottleneck?: string;
  bottleneckTooltip?: string;
};

const pipeline1: NodeData[] = [
  { label: "Client", tech: "Browser UI", reasoning: "Lightweight React SPA. Direct access to navigator.mediaDevices for microphone input." },
  { label: "Transport", tech: "WebRTC", reasoning: "Chosen over REST/WebSocket for true duplex audio without buffering delay. Alternatives: AudioWorklet-only (too limited), REST polling (unacceptable 200ms+ latency)." },
  { label: "Process", tech: "Whisper", reasoning: "OpenAI Whisper for accuracy. Alternatives considered: DeepSpeech (worse noise handling), Web Speech API (too inconsistent).", hasBottleneck: "right", bottleneckTooltip: "Latency cliff: 300–500ms window" },
  { label: "Output", tech: "TTS Stream", reasoning: "Local TTS to eliminate cloud round-trip latency. Traded slight voice quality for guaranteed sub-100ms synthesis. Alternative: ElevenLabs (beautiful, but 300ms+ latency kills conversational flow)." }
];

const pipeline2: NodeData[] = [
  { label: "Input", tech: "A-Roll Audio", reasoning: "Raw audio extraction from the editor timeline using Web Audio API." },
  { label: "STT", tech: "Whisper", reasoning: "Generates high-accuracy transcriptions with word-level timestamps required for alignment." },
  { label: "Vision", tech: "GPT-4o", reasoning: "Vision model needed to understand both transcript intent AND visual context. GPT-4 without vision couldn't match semantic context to footage frames.", hasBottleneck: "right", bottleneckTooltip: "Compute bottleneck: GPT-4o vision call ~1.2s" },
  { label: "Align", tech: "Embeddings", reasoning: "Vector similarity search to semantically match the spoken intent with the visual context of the B-roll." },
  { label: "Render", tech: "FFmpeg", reasoning: "Industry-standard for frame-precise video manipulation. Node.js child_process for non-blocking execution. Alternative: Web Codecs API (browser-only, no server-side)." }
];

const Node = ({ 
  data, delay = 0, onClick, isActive, showAll
}: { 
  data: NodeData, delay?: number, onClick: () => void, isActive: boolean, showAll: boolean
}) => {
  const showTooltip = isActive || showAll;

  return (
    <div className="relative group/node flex flex-col items-center">
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
        onClick={onClick}
        className={`relative z-10 flex flex-col items-center justify-center p-4 bg-background border-4 ${isActive ? 'border-primary' : 'border-foreground'} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] w-32 md:w-40 text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-none hover-target`}
      >
        <span className="font-display text-lg md:text-xl mb-1 text-foreground uppercase">{data.label}</span>
        <span className={`text-[10px] md:text-xs font-mono font-bold ${isActive ? 'text-foreground' : 'text-primary'}`}>{data.tech}</span>
        
        {data.hasBottleneck && (
          <div className="absolute -right-2 -top-2 w-4 h-4 bg-destructive rounded-full border-2 border-background animate-pulse group-hover/node:scale-125 transition-transform">
            <div className="absolute top-6 right-0 bg-destructive text-destructive-foreground text-[10px] p-2 rounded w-max opacity-0 group-hover/node:opacity-100 pointer-events-none transition-opacity z-50">
              {data.bottleneckTooltip}
            </div>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-64 bg-foreground text-background p-4 text-sm font-sans font-medium border-l-4 border-primary z-20 shadow-xl pointer-events-none"
          >
            <p className="font-mono text-xs text-primary mb-1 uppercase font-bold tracking-widest">Why this tech?</p>
            {data.reasoning}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Edge = ({ delay = 0, horizontal = false, length = "w-8 md:w-16" }: { delay?: number, horizontal?: boolean, length?: string }) => (
  <div className={`relative ${horizontal ? `${length} h-1` : `h-8 w-1 mx-auto`} bg-foreground overflow-hidden rounded-full shrink-0`}>
    <motion.div 
      initial={{ scaleX: horizontal ? 0 : 1, scaleY: horizontal ? 1 : 0, originX: 0, originY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "circOut" }}
      className={`absolute inset-0 bg-primary ${horizontal ? '' : 'origin-top'}`}
    />
  </div>
);

export function TechnicalDepth() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [showAllReasoning, setShowAllReasoning] = useState(false);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t-8 border-foreground relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 z-0 opacity-5" 
        style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b-4 border-foreground pb-8"
        >
          <div>
            <div className="inline-block bg-foreground text-background px-6 py-2 mb-4">
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Architecture</h2>
            </div>
            <p className="text-xl font-sans font-medium text-foreground max-w-xl">
              Systems over syntax. Sketches of how my apps actually work under the hood. Click nodes to see engineering decisions.
            </p>
          </div>
          
          <button 
            onClick={() => {
              setShowAllReasoning(!showAllReasoning);
              setActiveNode(null);
            }}
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-bold bg-primary text-primary-foreground px-6 py-3 border-4 border-foreground hover-target"
          >
            <Info size={16} />
            {showAllReasoning ? "Hide Reasoning" : "Show Reasoning"}
          </button>
        </motion.div>

        <div className="space-y-48">
          {/* Pipeline 1 */}
          <div className="relative">
            <div className="absolute -left-4 -top-8 text-primary font-mono text-sm font-bold border-2 border-primary px-2 py-1 rounded-full bg-background">
              FIG 1: Voice Loop
            </div>
            <h3 className="text-3xl font-display uppercase text-foreground mb-12">Real-time Voice Pipeline</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-start gap-2 relative min-h-[160px]">
              {pipeline1.map((node, i) => (
                <div key={node.label} className="flex flex-col md:flex-row items-center">
                  <Node 
                    data={node} 
                    delay={i * 0.2} 
                    onClick={() => setActiveNode(activeNode === node.label ? null : node.label)}
                    isActive={activeNode === node.label}
                    showAll={showAllReasoning}
                  />
                  {i < pipeline1.length - 1 && <Edge horizontal delay={i * 0.2 + 0.1} />}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-muted/50 p-6 border-l-4 border-primary">
              <h4 className="font-mono text-sm uppercase font-bold mb-2">Why this architecture?</h4>
              <p className="font-sans text-lg font-medium leading-relaxed">
                Direct streaming over WebSocket + WebRTC eliminates the REST overhead. Each hop adds ~50ms. With 4 hops in a naive implementation, you're already at 200ms before any processing — that's the UX cliff.
              </p>
            </div>
          </div>

          {/* Pipeline 2 */}
          <div className="relative">
             <div className="absolute -left-4 -top-8 text-primary font-mono text-sm font-bold border-2 border-primary px-2 py-1 rounded-full bg-background">
              FIG 2: Video Gen
            </div>
            <h3 className="text-3xl font-display uppercase text-foreground mb-12">AI Video Pipeline</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-start gap-2 flex-wrap xl:flex-nowrap min-h-[160px]">
               {pipeline2.map((node, i) => (
                <div key={node.label} className="flex flex-col md:flex-row items-center">
                  <Node 
                    data={node} 
                    delay={i * 0.2} 
                    onClick={() => setActiveNode(activeNode === node.label ? null : node.label)}
                    isActive={activeNode === node.label}
                    showAll={showAllReasoning}
                  />
                  {i < pipeline2.length - 1 && <Edge horizontal delay={i * 0.2 + 0.1} />}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-muted/50 p-6 border-l-4 border-primary">
              <h4 className="font-mono text-sm uppercase font-bold mb-2">Why this architecture?</h4>
              <p className="font-sans text-lg font-medium leading-relaxed">
                Processing B-roll suggestions asynchronously decoupled the AI latency from the editing UX. Users see the timeline immediately; suggestions load in background. This was the key product insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
