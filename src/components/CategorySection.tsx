import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  image: string;
  color: string;
  tag:string;
slug: string;}

interface Props {
  categories: Category[];
}

const CategorySection = ({ categories }: Props) => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="categories">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 font-body">
          Shop by Category
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary">
          Find Your Style
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
          key={cat.name}
  to={`/category/${cat.slug}`}
          className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
            />

            <div className="absolute top-4 left-4">
              <span className="gradient-gold text-foreground text-xs font-bold px-3 py-1 rounded-full font-body uppercase tracking-wider">
                {cat.tag}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {cat.name}
              </h3>
              {/* <p className="text-white/70 text-sm font-body mb-3">
                {cat.description}
              </p> */}
              <div className="flex items-center justify-between">
                {/* <span className="text-accent text-sm font-semibold font-body">
                  {cat.count}
                </span> */}
                <div className="flex items-center gap-1 text-white text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};



export default CategorySection;






