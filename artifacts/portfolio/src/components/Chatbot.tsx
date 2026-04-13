import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

const QA_DATABASE: Record<string, string> = {
  "What did you build at Gatepax AI?": "At Gatepax, I owned the frontend for a real-time voice assistant — built with WebRTC and OpenAI APIs for sub-second interactions. I also redesigned the Stripe checkout flow and set up CI/CD with GitHub Actions.",
  "Tell me about the B-Roll project": "Smart B-Roll Inserter is an AI video editing assistant. It uses Whisper for speech recognition, GPT-4o for visual scene understanding, and vector embeddings to semantically match A-roll speech with relevant B-roll footage. FFmpeg handles the frame extraction and clip insertion.",
  "What's your approach to product?": "I think like a product owner. Before writing a line of code, I map user flows, identify friction points, and define success metrics. At Recyclaro, I re-architected the entire IA into role-based, intent-driven flows — which reduced drop-offs and improved navigation clarity.",
  "What tech do you use?": "React, Next.js, Node.js, Express, WebRTC, WebSockets, OpenAI APIs, Tailwind CSS, Docker, and CI/CD via GitHub Actions. I'm comfortable across the stack — from system design to pixel-level UI.",
  "Are you open to work?": "Yes! I'm looking for frontend or full-stack engineering roles where product thinking is valued. Let's build something impactful together.",
};

const SUGGESTIONS = [
  "What did you build at Gatepax AI?",
  "Tell me about the B-Roll project",
  "What's your approach to product?",
  "What tech do you use?",
  "Are you open to work?"
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", content: "Hi, I'm Raj's AI assistant. Ask me anything about his work, skills, or background." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Find best match or default response
    let response = "I'm a limited demo bot, so I only know specific things about Raj. Try asking one of the suggested questions!";
    const exactMatch = QA_DATABASE[text];
    
    if (exactMatch) {
      response = exactMatch;
    } else {
      // Fuzzy match
      const lowerText = text.toLowerCase();
      if (lowerText.includes("gatepax") || lowerText.includes("voice")) {
        response = QA_DATABASE["What did you build at Gatepax AI?"];
      } else if (lowerText.includes("b-roll") || lowerText.includes("video")) {
        response = QA_DATABASE["Tell me about the B-Roll project"];
      } else if (lowerText.includes("product") || lowerText.includes("approach")) {
        response = QA_DATABASE["What's your approach to product?"];
      } else if (lowerText.includes("tech") || lowerText.includes("stack") || lowerText.includes("skills")) {
        response = QA_DATABASE["What tech do you use?"];
      } else if (lowerText.includes("work") || lowerText.includes("hire") || lowerText.includes("job")) {
        response = QA_DATABASE["Are you open to work?"];
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "bot", content: response }]);
    }, 1000);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-primary" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Interactive Experience</h2>
        </div>
        <p className="text-muted-foreground">Have a conversation with my portfolio.</p>
      </motion.div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] max-h-[70vh]">
        {/* Header */}
        <div className="bg-background/50 border-b border-border p-4 flex items-center gap-3 backdrop-blur-md">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="ml-4 text-sm font-mono text-muted-foreground flex items-center gap-2">
            <Bot size={16} className="text-primary" /> raj-assistant-v1.0
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-[15px] leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-sm" 
                    : "bg-secondary/50 text-foreground border border-border rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 flex-row"
            >
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-secondary/50 border border-border rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                <motion.div className="w-2 h-2 rounded-full bg-muted-foreground" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background/50 border-t border-border backdrop-blur-md">
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTIONS.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => handleSend(suggestion)}
                className="text-xs py-1.5 px-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-secondary/30 border border-border rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white placeholder:text-muted-foreground"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 p-2 text-muted-foreground hover:text-primary disabled:opacity-50 disabled:hover:text-muted-foreground transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
