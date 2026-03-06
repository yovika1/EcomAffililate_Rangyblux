import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What dress suits a pear body shape?",
  "Best jeans for petite height?",
  "Recommend a minimal makeup look",
  "Trending colors this season?",
];

const AI_RESPONSES: Record<string, string> = {
  default: "I'm your rangyblux AI stylist! 🌟 I can help you find the perfect outfit, suggest makeup looks, recommend styles for your body type, or discover trending pieces. What are you looking for today?",
  dress: "For a beautiful dress look, I recommend our **Floral Wrap Midi Dress** — it's universally flattering and trending right now! 🌸 It works great for both casual outings and evening events. Want me to suggest accessories to complete the look?",
  jean: "For jeans, the **High-Rise Skinny Jeans** and **Wide-Leg Denim** are our top sellers this season! 👖 High-waist styles elongate your figure, while wide-leg gives a relaxed chic vibe. What's your usual style preference?",
  makeup: "Our makeup bestsellers include the **MAC Ruby Woo Lipstick** (a classic red that suits all skin tones!) and the **NYX Eyeshadow Palette** for stunning eye looks. 💄 What's the occasion — everyday glam or a special event?",
  pear: "For a pear body shape, A-line and wrap dresses are your best friends! 🌸 They hug the waist and flow over the hips beautifully. Our **Boho Flare Maxi Dress** would look stunning on you. Would you like more suggestions?",
  petite: "For petite heights, high-waisted jeans are magical — they create the illusion of longer legs! ✨ Our **High-Rise Skinny Jeans** pair perfectly with cropped tops. Avoid overly wide-leg styles unless the hem is tailored.",
  minimal: "For a minimal makeup look: start with a **tinted moisturizer**, add a swipe of **nude lipstick**, and curl your lashes! ✨ Our NYX palette has gorgeous neutral shades perfect for this. Clean, effortless beauty!",
  trending: "This season's trending colors are **sage green**, **terracotta**, **electric cobalt blue**, and **soft lavender**! 🎨 For fashion, floral prints and color-blocking are huge. Want specific product recommendations in these colors?",
};

const getAIResponse = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes("dress") || lower.includes("frock")) return AI_RESPONSES.dress;
  if (lower.includes("jean") || lower.includes("denim")) return AI_RESPONSES.jean;
  if (lower.includes("makeup") || lower.includes("beauty") || lower.includes("cosmetic")) return AI_RESPONSES.makeup;
  if (lower.includes("pear")) return AI_RESPONSES.pear;
  if (lower.includes("petite") || lower.includes("short")) return AI_RESPONSES.petite;
  if (lower.includes("minimal") || lower.includes("natural")) return AI_RESPONSES.minimal;
  if (lower.includes("trend") || lower.includes("color") || lower.includes("season")) return AI_RESPONSES.trending;
  return "Great question! 💫 I'd love to help you style that perfectly. Could you share a bit more — are you looking for something casual, formal, or for a special occasion? That way I can give you the most personalized recommendations from rangyblux!";
};

interface AIChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatWidget = ({ isOpen, onClose }: AIChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: AI_RESPONSES.default,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise((r) => setTimeout(r, 1200));
    setIsTyping(false);

    const aiResponse = getAIResponse(text);
    setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] flex flex-col animate-slide-up"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      {/* Header */}
      <div className="bg-primary rounded-t-2xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center animate-float">
            <Sparkles className="w-4 h-4 text-foreground" />
          </div>
          <div>
            <p className="text-primary-foreground font-semibold text-sm font-body">rangyblux AI Stylist</p>
            <p className="text-primary-foreground/60 text-xs font-body flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" /> Online
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-card overflow-y-auto p-4 space-y-3" style={{ minHeight: "300px", maxHeight: "380px" }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
              msg.role === "assistant" ? "gradient-gold" : "bg-secondary"
            }`}>
              {msg.role === "assistant"
                ? <Bot className="w-3.5 h-3.5 text-foreground" />
                : <User className="w-3.5 h-3.5 text-muted-foreground" />
              }
            </div>
            <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${
              msg.role === "assistant"
                ? "bg-muted text-foreground rounded-tl-none"
                : "bg-primary text-primary-foreground rounded-tr-none"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      {messages.length === 1 && (
        <div className="bg-card px-3 pb-2 flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs font-body text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground px-2.5 py-1 rounded-full transition-all duration-200"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="bg-card rounded-b-2xl border-t border-border px-3 py-3 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
          placeholder="Ask your AI stylist..."
          className="flex-1 bg-muted text-foreground text-sm px-4 py-2 rounded-full outline-none font-body placeholder:text-muted-foreground focus:ring-2 focus:ring-accent/50"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || isTyping}
          className="w-9 h-9 gradient-gold rounded-full flex items-center justify-center shadow-gold hover:opacity-90 transition-all disabled:opacity-40"
        >
          <Send className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </div>
  );
};

// Floating trigger button
export const AIChatTrigger = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 gradient-gold rounded-full shadow-gold hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-float"
  >
    <Sparkles className="w-6 h-6 text-foreground" />
  </button>
);

export default AIChatWidget;
