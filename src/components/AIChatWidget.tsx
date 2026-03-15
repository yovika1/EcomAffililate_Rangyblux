import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Bot, User } from "lucide-react";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
  products?: Product[];
  fallbackMessage?: string; 

}
interface Product {
  _id: string;
  productName: string;
  currentPrice: number;
  imageUrl: string;
  affiliateUrl: string;
}

const SUGGESTIONS = [
  "What dress suits a pear body shape?",
  "Best jeans for petite height?",
  "Recommend a minimal makeup look",
  "Trending colors this season?",
];

interface AIChatTriggerProps {
  isOpen: boolean;
  onClose: () => void;
}

 const AIChatWidget = ({ isOpen, onClose }: AIChatTriggerProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm your rangyblux AI stylist! 🌟 Ask me for outfit ideas, makeup tips, or trending fashion.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const typeMessage = async (text: string, products: Product[] , fallbackMessage?: string) => {
    let currentText = "";
    let aiMsgIndex = -1;

    setMessages((prev) => {
      aiMsgIndex = prev.length;

      return [...prev, { role: "assistant", content: "" }];
    });

    for (let i = 0; i < text.length; i++) {
      currentText += text[i];

      await new Promise((resolve) => setTimeout(resolve, 10));

      setMessages((prev) => {
        const updated = [...prev];

        updated[aiMsgIndex] = {
          role: "assistant",
          content: currentText,
          products,
          fallbackMessage
        };

        return updated;
      });
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post("http://localhost:8081/ai/chat", {
        message: text,
      });

      const data = res.data;

      await typeMessage(data.reply, 
        data.products || [],
         data.fallbackMessage || ""
      );
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "AI is busy right now 😅 Try again later.",
        },
      ]);
    }

    setIsTyping(false);
  };

  if (!isOpen) return null;

  return (
<div className="fixed bottom-6 right-4 bg-white  z-50 w-[360px] h-[520px] flex flex-col shadow-xl">
        {/* Header */}
      <div className="bg-primary rounded-t-2xl px-4 py-3 flex justify-between">
        <p className="text-primary-foreground font-semibold">
          rangyblux AI Stylist
        </p>

        <button onClick={onClose}>
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages */}
<div className="flex-1 bg-card p-4 overflow-y-auto space-y-3 scrollbar-thin">
          {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-muted">
              {msg.role === "assistant" ? (
                <Bot size={14} />
              ) : (
                <User size={14} />
              )}
            </div>

            <div className="max-w-[70%] space-y-2">
              <div className="text-xs bg-muted px-3 py-2 rounded-xl">
                {msg.content}
              </div>
              {msg.fallbackMessage && (
  <p className="text-xs text-muted-foreground italic">
    {msg.fallbackMessage}
  </p>
)}

              {msg.products && msg.products.length > 0 && (
                <div className="space-y-2">
                  {msg.products.map((product: Product) => (
                    <a
                      key={product._id}
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-card border p-2 rounded-lg hover:bg-muted transition"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.productName}
                        className="w-10 h-10 rounded object-cover"
                      />

                      <div className="flex-1 text-xs">
                        <p className="font-semibold line-clamp-1">
                          {product.productName}
                        </p>

                        <p className="text-primary font-bold">
                          ₹{product.currentPrice}
                        </p>
                      </div>
                      
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="text-xs text-muted-foreground animate-pulse">
            AI stylist is thinking...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="p-2 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs border px-2 py-1 rounded"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-3 flex gap-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              sendMessage(input);
            }
          }}
          placeholder="Ask your AI stylist..."
          className="flex-1 px-3 py-2 rounded-full bg-muted"
        />

        <button
          onClick={() => sendMessage(input)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-primary"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default AIChatWidget;
