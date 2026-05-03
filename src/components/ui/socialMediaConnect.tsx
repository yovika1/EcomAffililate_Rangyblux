import { Mail, Instagram, MessageCircle } from "lucide-react";

interface SocialMediaConnectProps {
  shareUrl: string;
}

export const SocialMediaConnect = ({ shareUrl }: SocialMediaConnectProps) => {
    const rawNumber = import.meta.env.VITE_PHONE_NUMBER;

  const phoneNumber = `91${rawNumber?.replace(/\D/g, "")}`;


     const connectMessage = `Hi! I'm interested in this\n${shareUrl}`;

    const whatsappConnectLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    connectMessage
  )}`;
  return (
    <div className="flex flex-col ">
      <h4 className="font-display text-base font-semibold  mb-4">Connect</h4>

      {/* Social Media */}
      <div className="flex mb-4 gap-2">
        <a
          href="https://instagram.com/rangyblux"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-accent transition"
        >
          <Instagram className="w-4 h-4 text-pink-500"  />
        </a>

        <div>

          <a
            href={whatsappConnectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-green-600 font-medium hover:underline"
            >
            <MessageCircle className="w-4 h-4 mt-2 text-green-500" />
          </a>
            </div>
{/* 
        <a
          href="https://facebook.com/rangyblux"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-accent transition"
        >
          <Facebook className="w-4 h-4" />
        </a> */}
      </div>

      <div className="space-y-2.5 mx-4 text-sm text-primary-foreground/60 font-body">
        <a
          href={`mailto:${import.meta.env.VITE_EMAIL}`}
          className="flex items-center gap-2 mb-5 hover:text-accent hover:translate-x-1 transition-all"
        >
          <Mail className="w-3.5 h-3.5 text-accent" />
          <span>{import.meta.env.VITE_EMAIL}</span>
        </a>

        <div className="flex items-center gap-2">
          <span>India</span>
        </div>
      </div>

      
    </div>
  );
};
