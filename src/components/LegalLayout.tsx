import React from "react";

const LegalLayout = ({ title, children }) => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {title}
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          {children}
        </div>

        <div className="bg-gray-50 border rounded-xl p-6 mt-12">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>

          <p className="mb-2">
            If you have any questions, please contact us:
          </p>

          <a
            href="mailto:hello@rangyblux.com"
            className="text-pink-600 font-medium hover:underline"
          >
            {/* hello@rangyblux.com */}
          </a>
        </div>

      </div>
    </section>
  );
};

export default LegalLayout;