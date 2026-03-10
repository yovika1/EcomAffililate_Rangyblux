import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Menu, X, Sparkles, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenChat?: () => void;
}

const categories = [
  {
    name: "Fashion",
    items: [
      { label: "Dresses", href: "/category/fashion/dresses" },
      { label: "Jeans", href: "/category/fashion/jeans" },
      { label: "Mens-collection", href: "/category/fashion/mens-collection" },
    ],
  },
  {
    name: "Beauty",
    items: [
      { label: "Makeup", href: "/category/beauty/makeup" },
      { label: "Skincare", href: "/category/beauty/skincare" },
      { label: "Haircare", href: "/category/beauty/haircare" },
    ],
  },
  
];

const Navbar = ({ onOpenChat }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
              R
            </div>
            <span className="font-bold text-xl">rangyblux</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className="font-medium hover:text-primary">
              Home
            </Link>

            {categories.map((cat) => (
              <div
                key={cat.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(cat.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 font-medium hover:text-primary">
                  {cat.name}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === cat.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white shadow-xl rounded-xl border border-border p-4">                    
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-2 text-sm hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}

                  </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/category/general/trending"
              className="font-medium hover:text-primary"
            >
              Trending
            </Link>

          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            <button
              onClick={onOpenChat}
              className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              AI Stylist
            </button>

            <Search className="w-5 h-5 text-muted-foreground cursor-pointer" />

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">

            <Link to="/" className="block">Home</Link>

            {categories.map((cat) => (
              <div key={cat.name}>
                <p className="font-semibold">{cat.name}</p>

                {cat.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block ml-4 text-sm py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;