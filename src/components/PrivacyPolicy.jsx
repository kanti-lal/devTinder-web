import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Cashio.space ("we," "our," or "us"). We are committed
              to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              developer networking platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-200">
                2.1 Personal Information
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Name, email address, and profile information</li>
                <li>
                  Professional details including skills, experience, and
                  portfolio
                </li>
                <li>Profile pictures and media content</li>
                <li>Payment information for premium features</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-200">
                2.2 Technical Information
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Device information and IP addresses</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location data (with your consent)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To provide and maintain our developer networking services</li>
              <li>
                To match you with other developers based on skills and interests
              </li>
              <li>To process payments and manage premium subscriptions</li>
              <li>To send you important updates and notifications</li>
              <li>To improve our platform and user experience</li>
              <li>To prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Information Sharing
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
              <li>With your explicit consent</li>
              <li>With service providers who assist in platform operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information, including encryption, secure servers, and
              regular security audits. However, no method of transmission over
              the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
              <li>Access and update your personal information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Lodge complaints with relevant authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="bg-gray-700 p-4 rounded-lg mt-3 border border-gray-600">
              <p className="text-gray-300">
                <strong>Email:</strong> privacy@cashio.space
                <br />
                <strong>Address:</strong> Ahmedabad Gujarat India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
