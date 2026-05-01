import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "919518690570"; 

  const message = encodeURIComponent(
    "Hi! I need help with a product from Rangyblux 👗",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14 flex items-center justify-center
          rounded-full bg-green-500 text-white shadow-lg
          hover:scale-110 active:scale-95 transition
        "
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Tooltip */}
      <span
        className="
        absolute right-16 top-1/2 -translate-y-1/2
        bg-black text-white text-xs px-2 py-1 rounded
        opacity-0 group-hover:opacity-100 transition
        whitespace-nowrap
      "
      >
        Chat with us
      </span>
    </div>
  );
};

export default WhatsAppFloat;
