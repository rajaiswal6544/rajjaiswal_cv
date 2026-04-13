import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const QA_DATABASE: Record<string, string> = {
  "gatepax": "At Gatepax, I owned the voice AI frontend. The key engineering decision was skipping REST and going direct WebRTC → Whisper streaming. Average round-trip came in under 500ms. I also redesigned the Stripe checkout flow — removed 2 steps, reduced drop-off.",
  "voice": "At Gatepax, I owned the voice AI frontend. The key engineering decision was skipping REST and going direct WebRTC → Whisper streaming. Average round-trip came in under 500ms. I also redesigned the Stripe checkout flow — removed 2 steps, reduced drop-off.",
  "webrtc": "At Gatepax, I owned the voice AI frontend. The key engineering decision was skipping REST and going direct WebRTC → Whisper streaming. Average round-trip came in under 500ms. I also redesigned the Stripe checkout flow — removed 2 steps, reduced drop-off.",
  
  "b-roll": "Smart B-Roll Inserter uses a 3-stage AI pipeline: Whisper for speech recognition, GPT-4o Vision for scene understanding, then vector embeddings to semantically match A-roll speech with footage. FFmpeg handles frame-precise clip insertion.",
  "video": "Smart B-Roll Inserter uses a 3-stage AI pipeline: Whisper for speech recognition, GPT-4o Vision for scene understanding, then vector embeddings to semantically match A-roll speech with footage. FFmpeg handles frame-precise clip insertion.",
  "whisper": "Smart B-Roll Inserter uses a 3-stage AI pipeline: Whisper for speech recognition, GPT-4o Vision for scene understanding, then vector embeddings to semantically match A-roll speech with footage. FFmpeg handles frame-precise clip insertion.",
  
  "voicesdr": "AiVoiceSDR is a fully autonomous sales agent. The key was keeping end-to-end latency under 800ms — I used local Piper TTS instead of cloud to kill the network round-trip. It extracts structured lead data and maintains conversation state across the full call.",
  "sdr": "AiVoiceSDR is a fully autonomous sales agent. The key was keeping end-to-end latency under 800ms — I used local Piper TTS instead of cloud to kill the network round-trip. It extracts structured lead data and maintains conversation state across the full call.",
  "sales": "AiVoiceSDR is a fully autonomous sales agent. The key was keeping end-to-end latency under 800ms — I used local Piper TTS instead of cloud to kill the network round-trip. It extracts structured lead data and maintains conversation state across the full call.",
  
  "product": "At Recyclaro, I did a full UX audit and re-architected the IA from feature-based to intent-driven flows. The core insight: users don't think in features, they think in goals. Mapping to those goals reduced navigation drop-offs.",
  "ux": "At Recyclaro, I did a full UX audit and re-architected the IA from feature-based to intent-driven flows. The core insight: users don't think in features, they think in goals. Mapping to those goals reduced navigation drop-offs.",
  "recyclaro": "At Recyclaro, I did a full UX audit and re-architected the IA from feature-based to intent-driven flows. The core insight: users don't think in features, they think in goals. Mapping to those goals reduced navigation drop-offs.",
  "thinking": "At Recyclaro, I did a full UX audit and re-architected the IA from feature-based to intent-driven flows. The core insight: users don't think in features, they think in goals. Mapping to those goals reduced navigation drop-offs.",
  
  "tradeoff": "I think in trade-offs, not solutions. For the voice pipeline, I traded offline capability for real-time fidelity. For B-Roll AI, I chose accuracy over speed. Every constraint shapes the product.",
  "decision": "I think in trade-offs, not solutions. For the voice pipeline, I traded offline capability for real-time fidelity. For B-Roll AI, I chose accuracy over speed. Every constraint shapes the product.",
  "why": "I think in trade-offs, not solutions. For the voice pipeline, I traded offline capability for real-time fidelity. For B-Roll AI, I chose accuracy over speed. Every constraint shapes the product.",
  
  "hire": "Yes — I'm actively looking for product-engineering roles where thinking matters as much as coding. I work best in environments that ship real products, not endless feature lists.",
  "work": "Yes — I'm actively looking for product-engineering roles where thinking matters as much as coding. I work best in environments that ship real products, not endless feature lists.",
  "available": "Yes — I'm actively looking for product-engineering roles where thinking matters as much as coding. I work best in environments that ship real products, not endless feature lists.",
  "open": "Yes — I'm actively looking for product-engineering roles where thinking matters as much as coding. I work best in environments that ship real products, not endless feature lists.",
  
  "hello": "Hey! I'm Raj's AI assistant. Ask me about any of his projects, his product thinking approach, or whether he's open to work.",
  "hi": "Hey! I'm Raj's AI assistant. Ask me about any of his projects, his product thinking approach, or whether he's open to work."
};

const SUGGESTIONS = ["Voice AI approach", "Recyclaro UX audit", "Trade-off thinking", "Open to work?"];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hey! I'm Raj's AI assistant. Ask me about any of his projects, his product thinking approach, or whether he's open to work.", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: cmd, isUser: true };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "I don't have a specific answer for that, but try asking about the voice pipeline, the UX audit, or my trade-off philosophy.";
      const lowerCmd = cmd.toLowerCase().trim();
      
      for (const [key, answer] of Object.entries(QA_DATABASE)) {
        if (lowerCmd.includes(key)) {
          response = answer;
          break;
        }
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: response, isUser: false }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="bg-[#0D0D0D] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center gap-3 bg-[#0a0a0a]">
            <Sparkles className="text-primary w-5 h-5" />
            <h2 className="text-xl font-sans font-bold text-white tracking-tight">Ask Raj Anything</h2>
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 rounded-full bg-primary ml-2 shadow-[0_0_8px_rgba(184,255,0,0.8)]"
            />
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0D0D0D]">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-5 py-3 font-sans text-[15px] leading-relaxed ${
                    msg.isUser 
                      ? "bg-primary text-primary-foreground font-medium rounded-tr-sm" 
                      : "bg-white/5 text-white/90 border border-white/10 rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 flex gap-1 items-center">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                </div>
              </motion.div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-4">
              {SUGGESTIONS.map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="bg-white/5 border border-white/10 text-white/70 font-sans text-xs px-4 py-2 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-colors hover-target"
                >
                  {cmd}
                </button>
              ))}
            </div>
            
            <form 
              onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-6 pr-2 py-2 focus-within:border-primary/50 focus-within:bg-white/10 transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-sans placeholder:text-white/30"
                autoComplete="off"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="bg-primary text-black p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50 disabled:hover:bg-primary hover-target"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
