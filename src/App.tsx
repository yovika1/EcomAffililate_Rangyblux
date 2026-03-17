import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

import TrendingPage from "./pages/TrendingPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import { PrivacyPolicy } from "./pages/Privacy Policy";
import { AffiliateDisclosure } from "./pages/AffiliateDisclosure";
import { TermsService } from "./pages/TermsofService";
import { AboutContactFAQ } from "./pages/help/UserHelp";
import NewArrivalPage from "./pages/NewArrivalPage";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/help" element={<AboutContactFAQ />} />
            <Route
              path="/category/:category/:subCategory?"
              element={<CategoryPage />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route
              path="/affiliate-disclosure"
              element={<AffiliateDisclosure />}
            />
            <Route path="/terms" element={<TermsService />} />
            <Route
              path="/category/general/trending"
              element={<TrendingPage />}
            />
            <Route
              path="/category/general/NewArrival"
              element={<NewArrivalPage />}
            />

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
