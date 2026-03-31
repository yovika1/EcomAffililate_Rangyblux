import categoryDresses from "@/assets/category-dresses.jpg";
import categoryJeans from "@/assets/category-jeans.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";

export const getCategories = (categoryCounts: {
  fashion: number;
  general: number;
  beauty: number;
}) => [
  {
    name: "Trending Dresses",
    image: categoryDresses,
    tag: `${categoryCounts.fashion} Products`,
    href: "/fashion",
    key: "fashion",
    color: "from-rose-900/70 to-rose-700/40",
  },
  {
    name: "Denim & Jeans",
    image: categoryJeans,
    tag: `${categoryCounts.general} Products`,
    href: "/general",
    key: "general",
    color: "from-blue-900/70 to-blue-700/40",                       
  },
  {
    name: "Makeup & Beauty",
    image: categoryMakeup,
    tag: `${categoryCounts.beauty} Products`,
    href: "/beauty",
    key: "beauty",
    color: "from-pink-900/70 to-pink-700/40",
  },
];