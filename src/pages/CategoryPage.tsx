import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AIChatWidget from "@/components/AIChatWidget";
import { AIChatTrigger } from "@/components/AIChatTrigger";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import type { BackendBlog } from "@/types/BackendBlog";
import type { Product } from "@/types/Products";
import { useParams } from "react-router-dom";
import API_BASE from "@/config";


const CategoryPage = () => {

const { category, subCategory } = useParams();
const heroTitle = `${subCategory || category} Collection`;
const heroSub = `Explore best ${subCategory || category}`;
const heroBg = "bg-gradient-to-r from-pink-100 to-rose-200";
const heroEmoji = "✨";  const [chatOpen, setChatOpen] = useState(false);
const [blogs, setBlogs] = useState<BackendBlog[]>([]);
const [loading, setLoading] = useState(true);
const [sortBy, setSortBy] = useState("default");
const [filterDiscount, setFilterDiscount] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const url = subCategory
      ? `${API_BASE}/getBlogs?category=${category}&subCategory=${subCategory}`
        : `${API_BASE}/getBlogs?category=${category}`;
        
      
      const res = await axios.get(url);
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
  }, [category, subCategory]);

  const mapBlogToProduct = (blog: BackendBlog): Product => {
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
      subCategory:blog.subCategory,
      badge: blog.badge || "",
      category: blog.category,
      // description: p.description || "",
      // details: blog.details?.map(d => d.value) || [],
      tags: p.tags || [],
    };
  };

  const filteredProducts = useMemo(() => {
  let filtered = blogs
  .filter((b) => {
   if (!b.product) return false;

      if (subCategory) {
        return (
          b.category?.toLowerCase() === category?.toLowerCase() &&
          b.subCategory?.toLowerCase() === subCategory?.toLowerCase()
        );
      }

      return b.category?.toLowerCase() === category?.toLowerCase();
    })
  .map((b) => mapBlogToProduct(b));

    if (filterDiscount) {
      filtered = filtered.filter((p) => p.discountPercent >= 40);
    }

    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [blogs, category, subCategory, sortBy, filterDiscount]);

    // console.log("Filtered Products:", filteredProducts);


  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main className="pt-16">
        {/* HERO */}
        <section className={`${heroBg} py-20 px-4 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-5 text-[200px] flex items-center justify-center pointer-events-none">
            {heroEmoji}
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-lg opacity-80 max-w-xl">{heroSub}</p>
          </div>
        </section>

        <div className="border-b border-border bg-card sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} Products
              </span>
              <button
                onClick={() => setFilterDiscount(!filterDiscount)}
                className={`text-sm px-3 py-1.5 rounded-full border transition ${
                  filterDiscount
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                40%+ OFF
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-muted border border-border rounded-xl px-3 py-1.5 pr-8 appearance-none"
                >
                  <option value="default">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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

export default CategoryPage;
