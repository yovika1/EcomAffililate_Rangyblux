import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  shareUrl: string;
  fadeInUp?: Variants;
}

const ShareButtons = ({ shareUrl, fadeInUp }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const message = `🔥 Found something useful! Check this 👉 ${shareUrl}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4"
    >
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <MessageCircle className="w-5 h-5 text-green-500" />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </a>

      {/* Facebook */}
      <div className="flex flex-col items-center gap-2">
         <span className="text-sm font-medium">Share</span>

  {/* Icons Row */}
  <div className="flex items-center gap-4">
      <button
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`,
            "_blank"
          )
        }
        className="group relative"
        >
        <Facebook className="w-5 h-5 text-blue-600" />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Instagram (Copy Link) */}
      <button onClick={handleCopy} className="group relative">
        <Instagram className="w-5 h-5 text-pink-500" />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </button>

      </div>
      </div>
      {/* Copy notification */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
          ✅ Link copied! Paste it in Instagram story, DM, or bio.
        </div>
      )}
    </motion.div>
  );
};

export default ShareButtons;
