import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User } from "lucide-react";
import axios from "axios";
import API_BASE from "@/config";

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
        "I'm your Rangyblux AI stylist 🌟 Ask me for outfit ideas, makeup tips, or trends!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll fix
  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);


  const typeMessage = async (
    text: string,
    products: Product[],
    fallbackMessage?: string
  ) => {
    let currentText = "";

    const msgIndex = messages.length;

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);

    for (let i = 0; i < text.length; i++) {
      currentText += text[i];

      await new Promise((r) => setTimeout(r, 10));

      setMessages((prev) => {
        const updated = [...prev];

        if (!updated[msgIndex]) return prev;

        updated[msgIndex] = {
          role: "assistant",
          content: currentText,
          products,
          fallbackMessage,
        };

        return updated;
      });
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const sessionId =
      localStorage.getItem("sessionId") || crypto.randomUUID();

    localStorage.setItem("sessionId", sessionId);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post(`${API_BASE}/ai/chat`, {
        sessionId,
        message: text,
      });

      const data = res.data;

      const products =
        data.products || Object.values(data.outfit || {});

      const message =
        data.message || "Here are some suggestions for you 👇";

      await typeMessage(message, products, data.fallbackMessage);

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
    <div className="fixed bottom-6 right-4 bg-white z-50 w-[360px] h-[520px] flex flex-col shadow-xl rounded-2xl overflow-hidden">

      <div className="bg-primary px-4 py-3 flex justify-between items-center">
        <p className="text-white font-semibold">
          Rangyblux AI Stylist
        </p>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200">
              {msg.role === "assistant" ? (
                <Bot size={14} />
              ) : (
                <User size={14} />
              )}
            </div>

            <div className="max-w-[70%] space-y-2">
              <div className="text-xs bg-white px-3 py-2 rounded-xl shadow">
                {msg.content}
              </div>

              {msg.fallbackMessage && (
                <p className="text-xs text-gray-400 italic">
                  {msg.fallbackMessage}
                </p>
              )}

              {msg.products && msg.products.length > 0 && (
                <div className="space-y-2">
                  {msg.products.map((product) => (
                    <a
                      key={product._id}
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border p-2 rounded-lg hover:bg-gray-100 transition"
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
          <div className="text-xs text-gray-400 animate-pulse">
            AI stylist is thinking...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="p-2 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="text-xs border px-2 py-1 rounded hover:bg-gray-100"
            >
              {s}
            </button>
          ))}
        </div>
      )}

   
      <div className="p-3 flex gap-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && input.trim()) {
              sendMessage(input);
            }
          }}
          placeholder="Ask your AI stylist..."
          className="flex-1 px-3 py-2 rounded-full bg-gray-100 outline-none"
        />

        <button
          disabled={isTyping}
          onClick={() => sendMessage(input)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white disabled:opacity-50"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default AIChatWidget;