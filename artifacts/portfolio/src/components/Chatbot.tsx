import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const QA_DATABASE: Record<string, string> = {
  recyclaro:
    "At Recyclaro, I worked as a Product and UI/UX Intern. The main focus was understanding user journeys, auditing friction points, and reshaping flows so the product felt easier to navigate.",
  product:
    "I enjoy product work most when I can connect user intent, interface clarity, and implementation detail. That usually means simplifying flows before adding more screens.",
  ux: "My UX approach is practical: understand the task, reduce decision load, and make the next step obvious.",
  gatepax:
    "At Gatepax AI, I worked on frontend reliability, checkout flows, and a browser-based real-time voice interface using WebRTC and OpenAI APIs.",
  frontend:
    "My frontend work is strongest when the UI has to do more than look good. I like state-heavy interfaces, async feedback, and flows that need to stay clear under real constraints.",
  ai: "I have built AI-assisted interfaces and workflows to understand how product design changes when latency, streaming, or model output becomes part of the experience.",
  skills:
    "My core strengths are React-based frontend development, UX thinking, system design awareness, real-time interface work, and shipping polished product improvements.",
  education:
    "I completed my B.Tech in Computer Science and Engineering from RCC Institute of Information Technology, Kolkata, with a CGPA of 7.79.",
  achievement:
    "A few highlights: Smart Bengal Hackathon finalist, Codeforces Specialist with a 1425 rating, and 350+ DSA problems solved.",
  contest:
    "I enjoy competitive programming because it improves how I reason through constraints, break down problems, and stay sharp with implementation.",
  hire:
    "I am looking for opportunities where product sense and engineering quality both matter. The best fit for me is a team that likes shipping, learning, and improving quickly.",
  work: "I am open to work and especially interested in product engineering and frontend roles where the user experience is taken seriously.",
  hello:
    "Ask me about Raj's experience, how he thinks about product work, his frontend strengths, or whether he is open to work.",
  hi: "Ask me about Raj's experience, how he thinks about product work, his frontend strengths, or whether he is open to work.",
};

const SUGGESTIONS = [
  "Experience summary",
  "Product thinking",
  "Frontend strengths",
  "Open to work?",
];

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Ask me about Raj's experience, how he thinks about product work, his frontend strengths, or whether he is open to work.",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: cmd, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response =
        "Try asking about experience, product thinking, frontend work, achievements, or whether Raj is open to work.";
      const lowerCmd = cmd.toLowerCase().trim();

      for (const [key, answer] of Object.entries(QA_DATABASE)) {
        if (lowerCmd.includes(key)) {
          response = answer;
          break;
        }
      }

      if (lowerCmd.includes("experience")) {
        response =
          "Raj has worked across product and frontend roles, including a Product and UI/UX internship at Recyclaro and frontend development at Gatepax AI.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: response, isUser: false },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-32 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="flex h-[600px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D] shadow-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#0a0a0a] p-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="font-sans text-xl font-bold tracking-tight text-white">Ask Raj Anything</h2>
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="ml-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(234,88,12,0.8)]"
            />
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto bg-[#0D0D0D] p-6">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 font-sans text-[15px] leading-relaxed ${
                      msg.isUser
                        ? "rounded-tr-sm bg-primary font-medium text-primary-foreground"
                        : "rounded-tl-sm border border-white/10 bg-white/5 text-white/90"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-5 py-4">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                </div>
              </motion.div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-white/10 bg-[#0a0a0a] p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="hover-target rounded-full border border-white/10 bg-white/5 px-4 py-2 font-sans text-xs text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-black"
                >
                  {cmd}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
              }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 pl-6 pr-2 transition-colors focus-within:border-primary/50 focus-within:bg-white/10"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 border-none bg-transparent p-0 font-sans text-white outline-none placeholder:text-white/30 focus:ring-0"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="hover-target rounded-full bg-primary p-2 text-black transition-colors hover:bg-white disabled:opacity-50 disabled:hover:bg-primary"
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
