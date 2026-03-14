import LegalLayout from "@/components/LegalLayout";
import React from "react";

export const TermsService = () => {
  return (
    <LegalLayout title="Terms of Service">

      <div className="text-sm text-gray-600 leading-relaxed space-y-10">

        <p className="text-base">
          Welcome to <span className="font-semibold text-gray-800">Rangyblux</span>.
          These Terms of Service govern your access to and use of our website,
          including all content, functionality, and services offered on or
          through the website.
        </p>

        <p>
          By visiting or using Rangyblux, you confirm that you have read,
          understood, and agree to comply with these Terms of Service.
          If you do not agree with these terms, you should discontinue
          use of the website immediately.
        </p>

        {/* Acceptance */}
        <section id="acceptance">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Acceptance of Terms
          </h2>

          <p>
            These terms apply to all users of the website, including visitors,
            readers, and individuals interacting with content provided on
            Rangyblux.
          </p>

          <p>
            By accessing the website, you acknowledge that your use of the
            website is subject to these terms and any applicable laws or
            regulations.
          </p>
        </section>

        {/* Website Use */}
        <section id="website-use">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. Use of the Website
          </h2>

          <p>
            Rangyblux is a product discovery platform that highlights trending
            fashion, beauty, and lifestyle products from third-party retailers.
          </p>

          <p>
            Users may browse, read, and interact with the website content for
            personal informational purposes. Users agree not to misuse the
            website or attempt to interfere with its functionality.
          </p>

          <p className="text-xs text-gray-500">
            Activities such as scraping content, copying large portions of the
            website, attempting to bypass security measures, or disrupting
            services are strictly prohibited.
          </p>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Intellectual Property
          </h2>

          <p>
            All content published on Rangyblux, including text, graphics,
            branding, logos, design elements, and layout structure, is
            protected by intellectual property laws.
          </p>

          <p>
            Unauthorized reproduction, redistribution, or modification of
            website content without written permission is prohibited.
          </p>
        </section>

        {/* Affiliate Links */}
        <section id="affiliate">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Affiliate Links and Commissions
          </h2>

          <p>
            Rangyblux participates in affiliate marketing programs and may
            include affiliate links to third-party retailers and online
            marketplaces.
          </p>

          <p>
            When users click on these links and make purchases, we may earn
            a small commission from the retailer at no additional cost to
            the customer.
          </p>

          <p className="text-xs text-gray-500">
            Rangyblux does not directly sell products or process payments.
            All transactions occur on external retailer websites.
          </p>
        </section>

        {/* Product Info */}
        <section id="product-info">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Product Information
          </h2>

          <p>
            We aim to provide accurate product descriptions, pricing
            information, and promotional details whenever possible.
          </p>

          <p>
            However, product data is often obtained from third-party sources
            and may change without prior notice.
          </p>

          <p>
            Users should always verify product information directly on the
            retailer’s website before completing any purchase.
          </p>
        </section>

        {/* Third Party */}
        <section id="third-party">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Third-Party Websites
          </h2>

          <p>
            Rangyblux may contain links to third-party websites that are not
            operated or controlled by us.
          </p>

          <p>
            We are not responsible for the content, privacy practices,
            policies, or services provided by these external websites.
          </p>
        </section>

        {/* Advertising */}
        <section id="advertising">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Advertising and Sponsored Content
          </h2>

          <p>
            Our website may display advertisements, promotional material,
            or sponsored content from advertising partners.
          </p>

          <p>
            These advertisements may use cookies or similar technologies
            to measure advertising performance and user engagement.
          </p>
        </section>

        {/* User Conduct */}
        <section id="conduct">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            8. User Conduct
          </h2>

          <p>
            Users agree not to engage in any activity that could harm the
            website, its users, or its reputation.
          </p>

          <p>
            Prohibited actions include distributing malicious software,
            attempting unauthorized access, or using the website for
            unlawful purposes.
          </p>
        </section>

        {/* Liability */}
        <section id="liability">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            9. Limitation of Liability
          </h2>

          <p>
            Rangyblux shall not be held liable for any damages arising from
            the use of the website or reliance on its content.
          </p>

          <p className="text-xs text-gray-500">
            This includes damages resulting from third-party purchases,
            website downtime, or inaccurate information.
          </p>
        </section>

        {/* Availability */}
        <section id="availability">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            10. Website Availability
          </h2>

          <p>
            While we strive to keep Rangyblux accessible at all times,
            we do not guarantee uninterrupted availability.
          </p>

          <p>
            Maintenance, technical issues, or external factors may
            occasionally affect website performance.
          </p>
        </section>

        {/* Termination */}
        <section id="termination">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            11. Termination of Access
          </h2>

          <p>
            We reserve the right to restrict or terminate access to the
            website if users violate these Terms of Service.
          </p>
        </section>

        {/* Updates */}
        <section id="updates">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            12. Changes to Terms
          </h2>

          <p>
            Rangyblux reserves the right to modify these terms at any time.
          </p>

          <p>
            Updated terms will be posted on this page and continued use
            of the website indicates acceptance of the revised terms.
          </p>
        </section>

        <p className="text-xs text-gray-400">
          Last updated: March 2026
        </p>

      </div>

    </LegalLayout>
  );
};