import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AIChatWidget from "@/components/AIChatWidget";
import { AIChatTrigger } from "@/components/AIChatTrigger";

import { Star } from "lucide-react";
import type { Product } from "@/types/Products";

interface BlogType {
  _id: string;
  category: string;
  badge?: string;
   details?: {
    _id: string;
    name: string;
    value: string;
  }[]; 
  product?: {
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
    
  };
}

const ProductPage = () => {
  const { id } = useParams();

  const [currentBlog, setCurrentBlog] = useState<BlogType | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        // 1️⃣ Current product
        const singleRes = await axios.get(
          `http://localhost:8081/getBlogs/${id}`
        );
        setCurrentBlog(singleRes.data.blog);

        // 2️⃣ All products (for related)
        const allRes = await axios.get(
          `http://localhost:8081/getBlogs`
        );
        const blogs = allRes.data.blogs || allRes.data;
        setAllBlogs(Array.isArray(blogs) ? blogs : []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const mapToProduct = (blog: BlogType): Product | null => {
    if (!blog.product) return null;

    return {
      id: blog.product._id,
      blogId: blog._id,
      name: blog.product.productName,
      image: blog.product.imageUrl,
      price: blog.product.currentPrice,
      originalPrice: blog.product.originalPrice,
      discountPercent: blog.product.discountPercent,
      rating: blog.product.rating,
      reviews: blog.product.reviewsCount,
      affiliateUrl: blog.product.affiliateUrl,
      badge: blog.badge || "",
      category: blog.category,
  details: blog.details || [],
      // description: blog.product.description || "",
    };
  };

  const product = currentBlog ? mapToProduct(currentBlog) : null;

  const related = useMemo(() => {
    if (!product) return [];

    return allBlogs
      .filter(
        (b) =>
          b.category === product.category &&
          b._id !== product.blogId &&
          b.product
      )
      .slice(0, 3)
      .map((b) => mapToProduct(b))
      .filter(Boolean) as Product[];
  }, [allBlogs, product]);

  const stars = Math.floor(product?.rating || 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main className="pt-16">
        {loading ? (
          <div className="flex items-center justify-center h-[60vh]">
            Loading...
          </div>
        ) : !product ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">
                Product Not Found
              </h1>
              <Link to="/" className="text-accent hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Product Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-2xl"
                />

                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl font-bold">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i <= stars
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span>{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">
                      ₹{product.price}
                    </span>
                    <span className="line-through text-muted-foreground">
                      ₹{product.originalPrice}
                    </span>
                  </div>
{/* 
                  <p className="text-muted-foreground">
                    {product.description}
                  </p> */}
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.details?.map((d) => (
                      <li key={d._id}>
                        <span className="font-medium text-foreground">{d.name}</span> — {d.value}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white py-3 px-6 rounded-xl text-center font-semibold hover:opacity-90"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
              <section className="bg-muted/30 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">
                    You May Also Like
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />

      {chatOpen ? (
        <AIChatWidget
          isOpen={chatOpen}
          onClose={() => setChatOpen(false)}
        />
      ) : (
        <AIChatTrigger onClick={() => setChatOpen(true)} />
      )}
    </div>
  );
};

export default ProductPage;