import { ArrowRight, Star, Sparkles, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onOpenChat: () => void;
}

const HeroSection = ({ onOpenChat }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="rangyblux fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-slide-up">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>New Arrivals — Spring 2025</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Style That
            <br />
            <span className="text-gold">Speaks</span> Your
            <br />
            Language
          </h1>

          <p className="font-body text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover curated trending dresses, jeans & makeup — handpicked for your unique style. Let our AI stylist help you find your perfect look.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#trending"
              className="inline-flex items-center justify-center gap-2 gradient-gold text-foreground font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
            >
              Shop Trending
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-primary-foreground border border-white/30 font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Ask AI Stylist
            </button>
          </div>

          <div className="flex items-center gap-6 mt-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary-foreground bg-gradient-to-br from-accent to-wine-light" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                <span className="text-accent font-semibold text-sm ml-1">4.9</span>
              </div>
              <p className="text-primary-foreground/70 text-xs">Trusted by 12k+ fashionistas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
        <span className="text-primary-foreground/50 text-xs font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
