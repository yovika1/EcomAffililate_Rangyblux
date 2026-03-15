import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "@/types/Products";

import { Heart, Star, ExternalLink } from "lucide-react";


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col">
      
      {/* Image */}
      <Link to={`/product/${product.blogId}`} className="relative overflow-hidden aspect-[3/4] block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full font-body">
              {product.badge}
            </span>
          </div>
        )}

        {/* discountPercent */}
        {product.discountPercent && (
          <div className="absolute top-3 right-3">
            <span className="gradient-gold text-foreground text-xs font-bold px-2.5 py-1 rounded-full font-body">
              {product.discountPercent}% OFF
            </span>
          </div>
        )}

        {/* Like */}
        {/* <button
          onClick={(e) => { 
            e.preventDefault(); 
            setLiked(!liked); 
          }}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 ${
              liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
            }`}
          />
        </button> */}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-accent font-semibold uppercase tracking-wide font-body mb-1">
          {product.category}
        </p>

        <Link to={`/product/${product.blogId}`}>
          <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i <= Math.floor(product.rating)
                  ? "fill-accent text-accent"
                  : "text-border"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground font-body">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-primary font-body">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through font-body">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.blogId}`}
            className="flex-1 text-center border border-primary text-primary text-sm font-semibold py-2.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all font-body"
          >
            View Details
          </Link>

          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-3 py-2.5 rounded-xl hover:opacity-90 transition-all font-body"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;