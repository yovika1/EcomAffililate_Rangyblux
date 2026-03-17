import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AIChatWidget from "@/components/AIChatWidget";
import { AIChatTrigger } from "@/components/AIChatTrigger";
import { Sparkles } from "lucide-react";

import type { Product } from "@/types/Products";
import API_BASE from "@/config";

interface ProductType {
  _id: string;
  productName: string;
  imageUrl: string;
  currentPrice: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  affiliateUrl: string;
  description?: string;
  tags?: string[];
}

interface BlogType {
  _id: string;
  category: string;
  badge?: string;
  createdAt: string;
  product?: ProductType;
}

const NewArrivalPage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const filters = ["All", "fashion", "beauty", "makeup"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE}/getblogs`);
        const data = res.data.blogs || res.data;

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Convert blogs → products
  const products: Product[] = useMemo(() => {
    return blogs
      .filter((b) => b.product)
      .map((blog) => {
        const p = blog.product!;

        return {
          id: p._id,
          blogId: blog._id,
          name: p.productName,
          image: p.imageUrl,
          price: Number(p.currentPrice) || 0,
          originalPrice: Number(p.originalPrice) || 0,
          discountPercent: Number(p.discountPercent) || 0,
          rating: Number(p.rating) || 0,
          reviews: Number(p.reviewsCount) || 0,
          affiliateUrl: p.affiliateUrl,
          badge: blog.badge || "",
          category: blog.category,
          description: p.description || "",
          tags: p.tags || [],
        };
      });
  }, [blogs]);

  // ===== NEW ARRIVALS =====
  const newArrivals = useMemo(() => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return products.filter((p) => {
      const blog = blogs.find((b) => b._id === p.blogId);
      if (!blog) return false;

      const created = new Date(blog.createdAt);

      return (
        created > sevenDaysAgo &&
         p.badge?.toLowerCase() === "new arrival" &&
        (activeFilter === "All" || p.category === activeFilter)
      );
    });
  }, [products, blogs, activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main className="pt-16">

        {/* HERO */}
        <section className="bg-primary py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-accent" />
              <p className="text-sm font-semibold uppercase text-accent">
                Just Arrived
              </p>
            </div>

            <h1 className="text-5xl font-bold text-primary-foreground mb-4">
              New Arrivals
            </h1>

            <p className="text-primary-foreground/70 max-w-xl">
              Discover the latest products recently added to our collection.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <div className="border-b border-border bg-card sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground mr-2">
              {newArrivals.length} new products
            </span>

            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  activeFilter === f
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
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

export default NewArrivalPage;
