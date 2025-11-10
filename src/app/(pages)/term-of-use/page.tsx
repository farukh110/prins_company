'use client';

import React from 'react';

export default function PrinsTermsAndConditions() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <div className="container mx-auto px-4 py-12 max-w-4xl space-y-8">
          {/* Header */}
          <header className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">PRINS TERMS & CONDITIONS</h1>
            <p className="text-sm text-gray-600">Last Updated: November 10, 2025</p>
          </header>

          {/* Intro */}
          <section className="space-y-4">
            <p>
              Welcome to <a href="https://www.prinscompay.com" className="underline text-blue-600 hover:text-blue-700">www.prinscompay.com</a> (“Site”), owned and operated by <strong>Prins Company</strong>, a registered business in Los Angeles, California, USA.
            </p>
            <p>
              These Terms & Conditions (“Terms”) govern your access to and use of the Site, products, and services (“Services”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, do not use the Site.
            </p>
            <p className="text-sm text-gray-600 italic">
              We may update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 1. Use of Site */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. USE OF THE SITE</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must be at least <strong>18 years old</strong> or have parental consent to use the Site.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>You agree not to use the Site for any unlawful purpose or in violation of these Terms.</li>
              <li>We reserve the right to suspend or terminate your access at our discretion, without notice.</li>
            </ul>
          </section>

          {/* 2. Orders & Payments */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. ORDERS & PAYMENTS</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All orders are subject to acceptance and availability.</li>
              <li>Prices are in <strong>USD</strong> and include applicable taxes unless stated otherwise.</li>
              <li>We accept major credit cards, PayPal, and other secure payment methods.</li>
              <li>Payment is processed at the time of order. We are not responsible for currency conversion fees.</li>
              <li>Title and risk of loss pass to you upon delivery to the shipping carrier.</li>
            </ul>
          </section>

          {/* 3. Shipping & Delivery */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. SHIPPING & DELIVERY</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We ship to addresses in the <strong>United States, Canada, UK, Australia, and Pakistan</strong>.</li>
              <li>Shipping times are estimates. Delays may occur due to customs, weather, or carrier issues.</li>
              <li>
                <strong>For customers in Pakistan:</strong> You are responsible for all <strong>import duties, taxes, and customs clearance fees</strong>. We recommend checking with Pakistan Customs or your local courier (e.g., TCS, Leopard) before ordering.
              </li>
              <li>Lost or delayed packages: We assist with claims but are not liable beyond refund or reshipment at our discretion.</li>
            </ul>
          </section>

          {/* 4. Returns & Refunds */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. RETURNS & REFUNDS</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>30-day return policy</strong> for unused items in original packaging with proof of purchase.</li>
              <li>Customized or personalized items are <strong>non-returnable</strong> unless defective.</li>
              <li>Return shipping is paid by the customer unless the item is defective or incorrect.</li>
              <li>
                <strong>Pakistan returns:</strong> Return to our US address. You are responsible for return shipping and any customs fees.
              </li>
              <li>Refunds are issued to the original payment method within <strong>7–10 business days</strong> of receiving the return.</li>
              <li>We reserve the right to refuse returns that do not meet our policy.</li>
            </ul>
          </section>

          {/* 5. Product Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. PRODUCT INFORMATION</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We strive for accuracy in product descriptions, images, and pricing.</li>
              <li>Colors may vary slightly due to screen settings or lighting.</li>
              <li>Gemstone weights and dimensions are approximate.</li>
              <li>We reserve the right to correct errors and update product information at any time.</li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. INTELLECTUAL PROPERTY</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All content on the Site (text, images, logos, designs) is owned by <strong>Prins Company</strong> or its licensors.</li>
              <li>You may not copy, reproduce, or distribute content without written permission.</li>
              <li><strong>Prins®</strong> is a registered trademark. Unauthorized use is prohibited.</li>
            </ul>
          </section>

          {/* 7. User Content */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. USER CONTENT</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You grant <strong>Prins Company</strong> a worldwide, royalty-free license to use, display, and publish any reviews, photos, or content you submit.</li>
              <li>You are responsible for the accuracy and legality of your content.</li>
              <li>We may remove or edit user content at our discretion.</li>
            </ul>
          </section>

          {/* 8. Warranty & Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. WARRANTY & LIMITATION OF LIABILITY</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Products come with a <strong>1-year limited warranty</strong> against manufacturing defects.</li>
              <li>Normal wear, misuse, or alteration voids the warranty.</li>
              <li>THE SITE AND PRODUCTS ARE PROVIDED “AS IS.” WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.</li>
              <li>IN NO EVENT SHALL <strong>PRINS COMPANY</strong> BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES.</li>
              <li>Our total liability shall not exceed the amount paid by you for the product in question.</li>
            </ul>
          </section>

          {/* 9. Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. THIRD-PARTY LINKS & SERVICES</h2>
            <p className="text-gray-700">
              The Site may contain links to third-party websites. We are not responsible for their content, privacy practices, or availability.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. GOVERNING LAW</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of the <strong>State of California, USA</strong>, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Los Angeles County.
            </p>
          </section>

          {/* 11. International Users (Pakistan-Specific) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. INTERNATIONAL USERS</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The Site is controlled from the United States.</li>
              <li>
                <strong>Pakistani Customers:</strong> You are responsible for compliance with local import/export laws, including restrictions on gemstones, jewelry, or luxury goods.
              </li>
              <li>All transactions are in <strong>USD</strong>. You are responsible for any bank or forex charges.</li>
              <li>We recommend using a reliable shipping address and tracking service.</li>
            </ul>
          </section>

          {/* 12. Force Majeure */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">12. FORCE MAJEURE</h2>
            <p className="text-gray-700">
              We are not liable for delays or failure to perform due to events beyond our control (e.g., natural disasters, war, pandemics, carrier delays).
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="space-y-4 border-t pt-6">
            <h2 className="text-2xl font-semibold">13. CONTACT US</h2>
            <address className="not-italic space-y-3 text-gray-700">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@prinscompay.com" className="underline text-blue-600 hover:text-blue-700">
                  support@prinscompay.com
                </a>
              </p>
              <p>
                <strong>Phone (US):</strong> +1 844 527 4367<br />
                <strong>WhatsApp (Pakistan):</strong>{' '}
                <a
                  href="https://wa.me/18445274367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-600 underline hover:text-green-700"
                >
                  Chat Now
                </a>
              </p>
              <p>
                <strong>Mail:</strong><br />
                Prins Company<br />
                550 South Hill St, Suite 1015<br />
                Los Angeles, CA 90013<br />
                United States
              </p>
            </address>
            
          </section>

          {/* Footer Note */}
          <footer className="text-center text-sm text-gray-500 pt-8 border-t">
            <p>© {currentYear} Prins Company. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}