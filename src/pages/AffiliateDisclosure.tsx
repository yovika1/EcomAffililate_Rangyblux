import LegalLayout from "@/components/LegalLayout";
import React from "react";

export const AffiliateDisclosure = () => {
  return (
    <LegalLayout title="Affiliate Disclosure">

      <div className="text-sm text-gray-600 leading-relaxed space-y-8">

        <p>
          This website, <span className="font-medium text-gray-800">Rangyblux</span>,
          participates in affiliate marketing programs. These programs are
          designed to provide websites with a way to earn commissions by
          promoting products and linking to third-party retailers.
        </p>

        <p>
          As an affiliate website, Rangyblux may earn commissions when users
          click on certain links and make purchases through those links.
          These commissions help support the maintenance, development,
          and operation of this website.
        </p>

        {/* Affiliate Programs */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Affiliate Programs and Partnerships
          </h2>

          <p>
            Rangyblux may participate in affiliate programs operated by
            various companies and affiliate networks. These programs allow
            us to earn advertising fees by linking to products available
            on third-party online marketplaces.
          </p>

          <p>
            When a user clicks on an affiliate link on our website and
            completes a purchase on the retailer’s website, we may receive
            a small commission. This commission is paid by the retailer or
            affiliate network and does not increase the price that the
            customer pays.
          </p>

          <p>
            Affiliate partnerships help us maintain the website and
            continue discovering and sharing trending fashion and beauty
            products with our audience.
          </p>
        </section>

        {/* Product Information */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Product Information and Pricing
          </h2>

          <p>
            Rangyblux displays product information including images,
            descriptions, ratings, availability, and prices obtained from
            third-party sources such as online marketplaces or retailers.
          </p>

          <p>
            While we aim to keep the information on this website accurate
            and up to date, product details such as price, stock status,
            discounts, and specifications may change without notice.
          </p>

          <p>
            Users should always verify product information directly on the
            retailer’s website before making a purchase decision.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Earnings Disclaimer
          </h2>

          <p>
            Rangyblux makes no guarantees regarding the amount of income
            or earnings that may be generated through affiliate links.
            The commissions earned from affiliate programs depend on
            various factors including retailer policies, affiliate
            program terms, and user purchases.
          </p>

          <p>
            Our website simply provides product discovery and curated
            recommendations. Any financial transactions occur directly
            between the user and the retailer.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Third-Party Websites and Services
          </h2>

          <p>
            Rangyblux does not sell products directly. When users click
            on affiliate links, they are redirected to third-party
            websites where the purchase takes place.
          </p>

          <p>
            All matters related to payments, order processing, product
            shipping, returns, warranties, and customer support are
            handled by the respective retailer or marketplace.
          </p>

          <p>
            Rangyblux is not responsible for any issues related to
            purchases made on external websites.
          </p>
        </section>

        {/* Editorial Integrity */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Editorial Integrity and Transparency
          </h2>

          <p>
            We believe in transparency and aim to provide helpful
            recommendations based on product trends, popularity,
            research, and publicly available information.
          </p>

          <p>
            Affiliate relationships do not influence our editorial
            decisions. However, users should always perform their own
            research before making purchasing decisions.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            External Links Disclaimer
          </h2>

          <p>
            Our website may contain links to external websites that are
            not controlled or maintained by Rangyblux. We do not
            guarantee the accuracy, reliability, or completeness of any
            information provided by third-party websites.
          </p>

          <p>
            Visiting and interacting with external websites is done at
            the user’s own risk.
          </p>
        </section>

        <p className="text-xs text-gray-500">
          Last updated: March 2026
        </p>

      </div>

    </LegalLayout>
  );
};