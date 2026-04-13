import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const QA_DATABASE: Record<string, string> = {
  "projects": "Gatepax AI (Voice Assistant), Smart B-Roll Inserter (AI Video), AiVoiceSDR (Sales Agent).",
  "skills": "React, WebRTC, OpenAI APIs, Node.js, FFmpeg, Framer Motion, Tailwind.",
  "about": "Frontend + Product Engineer. Currently interning at Recyclaro doing UX audits. Codeforces Specialist.",
  "contact": "Email me at rajaiswaldev24@gmail.com or find me on GitHub/LinkedIn.",
  "help": "Available commands: projects, skills, about, contact, clear"
};

const SUGGESTIONS = ["projects", "skills", "about", "contact"];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Welcome to RAJ_OS v1.0", isUser: false },
    { id: "2", text: "Type 'help' for a list of commands or ask a question.", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: cmd, isUser: true };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    if (cmd.toLowerCase() === "clear") {
      setMessages([]);
      return;
    }

    setIsTyping(true);

    // Simulate thinking/typing
    setTimeout(() => {
      let response = "Command not recognized. Type 'help' for available commands.";
      const lowerCmd = cmd.toLowerCase().trim();
      
      if (QA_DATABASE[lowerCmd]) {
        response = QA_DATABASE[lowerCmd];
      } else {
        // fuzzy check
        if (lowerCmd.includes("project")) response = QA_DATABASE["projects"];
        if (lowerCmd.includes("skill") || lowerCmd.includes("tech")) response = QA_DATABASE["skills"];
        if (lowerCmd.includes("who")) response = QA_DATABASE["about"];
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: response, isUser: false }]);
      setIsTyping(false);
      
      // Auto-focus input after reply
      setTimeout(() => inputRef.current?.focus(), 10);
    }, 600);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-8 text-secondary-foreground text-center">
          Interactive Terminal
        </h2>

        <div className="bg-[#0a0a0a] rounded-lg border-[6px] border-primary p-2 overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
          
          {/* Terminal Window */}
          <div className="bg-[#111] h-[500px] font-mono text-[#0f0] p-6 flex flex-col rounded text-sm md:text-base relative overflow-hidden">
            
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10" />

            <div className="flex-1 overflow-y-auto space-y-4 pb-4 z-20">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2"
                  >
                    <span className="text-[#0a0] shrink-0">
                      {msg.isUser ? "guest@portfolio:~$" : "raj@os:~$"}
                    </span>
                    <span className={msg.isUser ? "text-white" : "text-[#0f0]"}>
                      {msg.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <div className="flex gap-2">
                  <span className="text-[#0a0]">raj@os:~$</span>
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="bg-[#0f0] w-2 h-5 inline-block"
                  />
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
              className="flex items-center gap-2 border-t border-[#333] pt-4 mt-2 z-20"
            >
              <span className="text-[#0a0] shrink-0">guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 font-mono caret-transparent"
                autoComplete="off"
                spellCheck="false"
              />
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="bg-white w-2 h-5 inline-block -ml-[calc(100%-1ch)]"
                style={{ marginLeft: `-${Math.max(1, input.length)}ch`}}
              />
            </form>
          </div>

          {/* Quick Commands below terminal */}
          <div className="flex flex-wrap gap-2 mt-4 px-2">
            {SUGGESTIONS.map(cmd => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="bg-primary text-primary-foreground font-mono text-xs px-3 py-1 font-bold uppercase hover:bg-white hover:text-black transition-colors"
              >
                ./{cmd}.sh
              </button>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
