import { Sparkles, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Strip */}
      <div className="border-b border-primary-foreground/10 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-1">Get Style Alerts</h3>
            <p className="text-primary-foreground/60 text-sm font-body">New arrivals, exclusive deals & styling tips delivered to you.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 px-4 py-2.5 rounded-full text-sm font-body outline-none focus:border-accent"
            />
            <button className="gradient-gold text-foreground font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-all font-body whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
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

          {/* Links */}
          {[
            {
              title: "Shop",
              links: ["Trending Dresses", "Denim & Jeans", "Makeup & Beauty", "New Arrivals", "Sale"],
            },
            {
              title: "Help",
              links: ["About Us", "Contact", "FAQ", "Shipping Info", "Returns"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/60 text-sm font-body hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-5">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-accent hover:text-foreground rounded-full flex items-center justify-center transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2.5 text-sm text-primary-foreground/60 font-body">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>hello@rangyblux.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40 font-body">
          <p>© 2025 rangyblux. All rights reserved. Affiliate Disclosure: We earn commission on purchases.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
