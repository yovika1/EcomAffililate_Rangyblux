import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AIChatWidget from "@/components/AIChatWidget";
import Footer from "@/components/Footer";
import { AIChatTrigger } from "@/components/AIChatTrigger";
import ProductCard from "@/components/ProductCard";

import { Sparkles, Shield, Truck, RefreshCw, Flame, ArrowRight } from "lucide-react";
import categoryDresses from "@/assets/category-dresses.jpg";
import categoryJeans from "@/assets/category-jeans.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import type { BackendBlog } from "@/types/BackendBlog";
import type { Product } from "@/types/Products";
import CategorySection from "@/components/CategorySection";


const perks = [
  { icon: Sparkles, label: "AI-Powered Styling", desc: "Get personalized fashion advice 24/7" },
  { icon: Shield, label: "Trusted Brands", desc: "Only verified affiliate partners" },
  { icon: Truck, label: "Fast Delivery", desc: "Get your order in 2-5 business days" },
  { icon: RefreshCw, label: "Easy Returns", desc: "Hassle-free 30-day return policy" },
];

const Index = () => {
const [blogs, setBlogs] = useState<BackendBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8081/getBlogs");
        const data = res.data.blogs || res.data;
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

const mappedProducts: Product[] = useMemo(() => {
  return blogs
    .filter((b) => b.product)
    .map((b) => ({
      id: b.product!._id, 
      blogId: b._id, 
      name: b.product!.productName,
      image: b.product!.imageUrl,
      price: b.product!.currentPrice,
      originalPrice: b.product!.originalPrice,
      discountPercent: b.product!.discountPercent,
      rating: b.product!.rating,
      reviews: b.product!.reviewsCount,
      affiliateUrl: b.product!.affiliateUrl,
      badge: b.badge,
      category: b.category,
    }));
}, [blogs]);


  const featured = [...mappedProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const categoryCounts = useMemo(() => {
    return {
      fashion: blogs.filter((b) => b.category === "fashion").length,
      general: blogs.filter((b) => b.category === "general").length,
      beauty: blogs.filter((b) => b.category === "beauty").length,
    };
  }, [blogs]);

 const categories = [
  {
    name: "Trending Dresses",
    slug: "fashion/dresses",
    image: categoryDresses,
    tag: `${categoryCounts.fashion} Products`,
    color: "from-rose-900/70 to-rose-700/40",
  },
  {
    name: "Denim & Jeans",
    slug: "fashion/jeans",
    image: categoryJeans,
    tag: `${categoryCounts.general} Products`,
    color: "from-blue-900/70 to-blue-700/40",
  },
  {
    name: "Makeup & Beauty",
    slug: "beauty/makeup",
    image: categoryMakeup,
    tag: `${categoryCounts.beauty} Products`,
    color: "from-pink-900/70 to-pink-700/40",
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main>
        <HeroSection onOpenChat={() => setChatOpen(true)} />

        {/* PERKS BAR (UNCHANGED UI) */}
        <section className="bg-card border-y border-border py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-body">{label}</p>
                  <p className="text-xs text-muted-foreground font-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

<CategorySection categories={categories} />
        {/* TRENDING PRODUCTS (UI SAME, DATA DYNAMIC) */}
        <section className="py-20 px-4 bg-muted/30" id="trending">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-accent" />
                  <p className="text-sm font-semibold tracking-widest uppercase text-accent font-body">
                    Trending Now
                  </p>
                </div>
                <h2 className="font-display text-4xl font-bold text-primary">
                  Hot Picks For You
                </h2>
              </div>
              <Link
                to="/trending"
                className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all font-body"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {chatOpen ? (
        <AIChatWidget isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      ) : (
        <AIChatTrigger onClick={() => setChatOpen(true)} />
      )}
    </div>
  );
};

export default Index;