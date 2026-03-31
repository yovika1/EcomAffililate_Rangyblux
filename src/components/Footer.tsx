import { footerLinks } from "@/routes/Route";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ShareButtons from "@/pages/ShareButtons";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-1">Get Style Alerts</h3>
            <p className="text-primary-foreground/60 text-sm font-body">New arrivals, exclusive deals & styling tips delivered to you.</p>
          </div>
          
        </div>
      </div>

      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-foreground">R</span>
              </div>
              <span className="font-display text-2xl font-bold">rangyblux</span>
            </div>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-5">
              Your destination for trending fashion & beauty. Curated picks, unbeatable prices, expert style advice.
            </p>
            <div className="flex items-center gap-1 text-sm text-accent font-body">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Stylist available 24/7</span>
            </div>
          </div>

          { footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                    to={link.path}
                    className="text-primary-foreground/60 text-sm font-body hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-5">
<ShareButtons shareUrl={window.location.href} />

            </div>
            <div className="space-y-2.5 text-sm text-primary-foreground/60 font-body">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                {/* <span>info@rangyblux.com</span> */}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                {/* <span>+91 98765 43210</span> */}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span> India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40 font-body">
          <p>© 2026 rangyblux. All rights reserved.
            <Link to="/affiliate-disclosure"
            className="hover:text-accent transition-colors"> Affiliate Disclosure</Link>
             : We earn commission on purchases.</p>
          <div className="flex gap-4">
            <Link 
            to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link 
            to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
