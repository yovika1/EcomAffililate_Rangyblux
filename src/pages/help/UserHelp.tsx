import LegalLayout from "@/components/LegalLayout";
import React from "react";
import { Sparkles, TrendingUp, ShieldCheck, Users, ShoppingBag, Mail } from "lucide-react";

export const AboutContactFAQ = () => {
  return (
    <LegalLayout title="About Rangyblux">

      <div className="text-sm text-gray-600 leading-relaxed space-y-14">

        <section id="about bg-gradient-to-r from-pink-500 to-purple-600 text-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Rangyblux</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover trending fashion and beauty products curated from trusted brands.
            Rangyblux helps you shop smarter by highlighting stylish products,
            great deals, and curated recommendations.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="Fashion"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Rangyblux was created to simplify online shopping for fashion
              and beauty lovers. Instead of browsing dozens of stores, we
              carefully research and curate trending products so you can
              discover them quickly in one place.
            </p>

            <p className="text-gray-600 mt-4">
              From stylish dresses and denim to makeup essentials,
              we highlight products that combine quality, popularity,
              and great value.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <TrendingUp className="mx-auto text-pink-500 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Trending Picks</h3>
              <p className="text-gray-600 text-sm">
                We discover trending fashion and beauty products loved by shoppers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-pink-500 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Best Deals</h3>
              <p className="text-gray-600 text-sm">
                We compare deals across trusted marketplaces to highlight the best prices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <Sparkles className="mx-auto text-pink-500 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">AI Style Assistant</h3>
              <p className="text-gray-600 text-sm">
                Our AI assistant helps you discover products based on your style preferences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10">

          <div>
            <Users className="mx-auto text-pink-500 mb-3" size={34} />
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>

          <div>
            <ShoppingBag className="mx-auto text-pink-500 mb-3" size={34} />
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-600">Curated Products</p>
          </div>

          <div>
            <Sparkles className="mx-auto text-pink-500 mb-3" size={34} />
            <h3 className="text-3xl font-bold">Daily</h3>
            <p className="text-gray-600">Trend Updates</p>
          </div>

        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}
      <section className="bg-pink-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4">Affiliate Transparency</h2>

          <p className="text-gray-700">
            Rangyblux participates in affiliate programs. When you click on
            product links and make a purchase, we may earn a small commission —
            at no extra cost to you. This helps support our platform and allows
            us to continue sharing great product discoveries.
          </p>

        </div>
      </section>


        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-gray-900">
                What is Rangyblux?
              </h3>
              <p>
                Rangyblux is a product discovery platform that helps
                users explore trending products across fashion,
                beauty, and lifestyle categories.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Do you sell products directly?
              </h3>
              <p>
                No. Rangyblux does not sell products directly.
                We provide product listings and redirect users
                to retailer websites where purchases are completed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                How do affiliate links work?
              </h3>
              <p>
                Some product links on Rangyblux are affiliate links.
                If you click these links and make a purchase,
                we may earn a small commission from the retailer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Does it cost extra to buy through your links?
              </h3>
              <p>
                No. The price remains the same for you.
                The retailer pays the commission as part
                of their marketing program.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Are product prices always accurate?
              </h3>
              <p>
                We try to keep product information updated,
                but prices and availability may change
                on retailer websites without notice.
              </p>
            </div>

          </div>
        </section>

      </div>

    </LegalLayout>
  );
};