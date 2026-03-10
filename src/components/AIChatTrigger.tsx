import { Sparkles } from "lucide-react";

export const AIChatTrigger = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
    >
      <Sparkles size={20} />
    </button>
  );
};