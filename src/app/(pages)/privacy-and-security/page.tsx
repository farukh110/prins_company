'use client';

import React from 'react';

export default function PrinsPrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <div className="container mx-auto px-4 py-12 max-w-[1080px] space-y-8">
          {/* Header */}
          <header className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">PRINS PRIVACY POLICY</h1>
            <p className="text-sm text-gray-600">Effective Date: September 23, 2024</p>
          </header>

          {/* Intro */}
          <section className="space-y-4">
            <p>
              PRINS values your trust. We are committed to protecting your privacy and using your information responsibly. This policy explains what we collect, how we use it, and your rights.
            </p>
            <p>
              The website <a href="https://www.prinscompany.com/" className="underline text-blue-600 hover:text-blue-700">www.prinscompany.com</a> (“Site”) is owned and operated by PRINS Inc., Los Angeles. By using the Site, you agree to this policy. Review it periodically.
            </p>
          </section>

          {/* Collection of Information */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">COLLECTION OF INFORMATION</h2>
            <p>We collect data you provide, automatic device data, and tracking tech (cookies, pixels, logs) when you visit, shop, or interact with us or third-party sources.</p>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">Provided by You</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Identity:</strong> Name, username, gender, DOB, marital status.</li>
                  <li><strong>Contact:</strong> Email, address, phone.</li>
                  <li><strong>Demographics:</strong> Age, gender, country.</li>
                  <li><strong>Login:</strong> Password, credentials.</li>
                  <li><strong>Financial:</strong> Card, bank details for payments.</li>
                  <li><strong>Profile:</strong> Interests, preferences, wishlists.</li>
                  <li><strong>Content:</strong> Reviews, photos, purchase history.</li>
                  <li><strong>Contacts:</strong> Info about others you share.</li>
                  <li><strong>Career:</strong> Recruitment, HR data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Behavior:</strong> Pages viewed, products bought, time spent.</li>
                  <li><strong>Device:</strong> Browser, OS, ISP, IP, location.</li>
                  <li><strong>Marketing:</strong> Preferences for ads.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tracking Technologies</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><strong>Logs:</strong> IP, browser, visit time.</li>
                  <li><strong>Fingerprinting/Pixels:</strong> Unique device ID, cookie drops.</li>
                  <li><strong>Cookies:</strong> Store preferences, track activity. See <a href="#cookies" className="underline text-blue-600 hover:text-blue-700">Cookie Policy</a>.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">From Third Parties</h3>
                <p className="text-gray-700">We may receive data from social networks, partners, or public sources. <strong>We do not sell or rent your personal data.</strong></p>
              </div>
            </div>
          </section>

          {/* Use of Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">USE OF INFORMATION</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Fulfill orders, services, warranties.</li>
              <li>Respond to queries, improve experience.</li>
              <li>Prevent fraud, comply with law.</li>
              <li>Personalize content, marketing, analytics.</li>
              <li>Run contests, surveys, promotions.</li>
            </ul>
          </section>

          {/* Failure to Provide */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">IF YOU DON’T PROVIDE DATA</h2>
            <p>Required data is needed for contracts (e.g., orders). Failure may lead to cancellation with notice.</p>
          </section>

          {/* Legal Bases */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">LEGAL BASES</h2>
            <p>We process data based on:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Contract performance.</li>
              <li>Legitimate interests (fraud prevention, analytics).</li>
              <li>Legal obligations or consent.</li>
            </ul>
          </section>

          {/* Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">SHARING</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Affiliates:</strong> Internal entities.</li>
              <li><strong>Service Providers:</strong> Shipping, payment, marketing (no SMS opt-in data).</li>
              <li><strong>Feedback:</strong> May post testimonials (edited).</li>
              <li><strong>Third Parties:</strong> Pseudonymized for ads/analytics (Google, social platforms).</li>
              <li><strong>Legal:</strong> Comply with law, fraud protection.</li>
              <li><strong>Business Transfer:</strong> Mergers, sales.</li>
              <li><strong>Consent:</strong> For other purposes.</li>
            </ul>
          </section>

          {/* California */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CALIFORNIA RESIDENTS (CPRA)</h2>
            <p className="text-gray-700">
              We collect identity, contact, financial, profile, etc. (last 12 months). Rights: know, correct, delete, opt-out of sharing. Use <a href="/b/personal-information" className="underline text-blue-600 hover:text-blue-700">Do Not Share</a> link. No discrimination.
            </p>
            <p className="text-gray-700">
              <strong>Shine the Light:</strong> Request third-party marketing sharing via specified address.
            </p>
          </section>

          {/* Nevada */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">NEVADA RESIDENTS</h2>
            <p className="text-gray-700">Opt-out of data sales via designated address.</p>
          </section>

          {/* Europe */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">EUROPEAN DATA SUBJECTS (GDPR)</h2>
            <p className="text-gray-700">
              Rights: access, rectify, erase, restrict, port, object, withdraw consent, complain. Contact us to exercise.
            </p>
          </section>

          {/* Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">RETENTION</h2>
            <p className="text-gray-700">
              Kept as needed for services, legal, fraud prevention. Securely deleted or anonymized when no longer required.
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">SECURITY</h2>
            <p className="text-gray-700">
              Administrative, physical, technical safeguards. No 100% guarantee. Limited internal access.
            </p>
          </section>

          {/* Children */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CHILDREN</h2>
            <p className="text-gray-700">
              Site not for under 13. We delete any such data promptly.
            </p>
          </section>

          {/* Text/WhatsApp */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">TEXT & WHATSAPP</h2>
            <p className="text-gray-700">
              Voluntary SMS/MMS/WhatsApp marketing with consent (18+). Opt-out: reply <strong>STOP</strong>. Carrier charges apply. Frequency varies. We may change codes.
            </p>
          </section>

          {/* Cookie Policy */}
          <section id="cookies" className="space-y-4">
            <h2 className="text-2xl font-semibold">COOKIE POLICY</h2>
            <p className="text-gray-700">
              Cookies enhance usability, analytics, ads. Types: <strong>Essential</strong>, <strong>Marketing</strong>, <strong>Personalization</strong>, <strong>Analytics</strong>.
            </p>
            <p className="text-gray-700">
              <strong>Consent:</strong> Manage via Consent Manager on <a href="/b/personal-information" className="underline text-blue-600 hover:text-blue-700">personal-information</a>. Browser opt-outs available.
            </p>
            <p className="text-gray-700">No DNT response yet.</p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">THIRD-PARTY LINKS & FEATURES</h2>
            <p className="text-gray-700">
              Not responsible for external sites. Social plugins may share data per their policies.
            </p>
          </section>

          {/* Google */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">GOOGLE ANALYTICS/ADS</h2>
            <p className="text-gray-700">
              Uses cookies for analytics, ads, conversion tracking. Opt-out via browser plugin or ad settings.
            </p>
          </section>

          {/* Custom Audiences */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CUSTOM AUDIENCES</h2>
            <p className="text-gray-700">
              Hashed email/phone shared with Google/Facebook for targeted ads. Control via platform settings.
            </p>
          </section>

          {/* Interest-Based Ads */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">INTEREST-BASED ADS</h2>
            <p className="text-gray-700">
              Collected for personalized ads across networks. Opt-out: <a href="https://optout.networkadvertising.org" className="underline text-blue-600 hover:text-blue-700">NAI</a>, <a href="https://optout.aboutads.info" className="underline text-blue-600 hover:text-blue-700">DAA</a>, <a href="http://www.youronlinechoices.eu/" className="underline text-blue-600 hover:text-blue-700">EDAA</a>, or <a href="https://www.smartrecognition.com/database-opt-out/" className="underline text-blue-600 hover:text-blue-700">smartrecognition</a>.
            </p>
          </section>

          {/* Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">UPDATES</h2>
            <p className="text-gray-700">
              Policy may change; significant updates notified. Check Effective Date.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 border-t pt-6">
            <h2 className="text-2xl font-semibold">CONTACT US</h2>
            <address className="not-italic space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:customer.service@prins.com" className="underline text-blue-600 hover:text-blue-700">
                  customer.service@prins.com
                </a>
              </p>
              <p><strong>Phone:</strong> +1 844 527 4367</p>
              <p>
                <strong>Mail:</strong> PRINS Inc., 550 South Hill St, Suite 1015, Los Angeles, CA 90013
              </p>
            </address>
          </section>
        </div>
      </div>
    </>
  );
}