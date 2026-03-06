import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import DressesPage from "./pages/DressesPage";
// import JeansPage from "./pages/JeansPage";
// import MakeupPage from "./pages/MakeupPage";
import TrendingPage from "./pages/TrendingPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* <Route path="/dresses" element={<DressesPage />} /> */}
      <Route path="/category/:category/:subCategory" element={<CategoryPage />} />
          {/* <Route path="/jeans" element={<JeansPage />} /> */}
          {/* <Route path="/makeup" element={<MakeupPage />} /> */
          <Route path="/category/general/trending" element={<TrendingPage />} />}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
