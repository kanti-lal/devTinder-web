import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Cashio.space ("the Platform"), you accept
              and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cashio.space is a developer networking platform that connects
              software developers, engineers, and tech professionals. Our
              services include profile creation, developer matching, networking
              opportunities, and premium features for enhanced connectivity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. User Accounts
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-200">
                3.1 Account Creation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You must create an account to access certain features. You agree
                to provide accurate, current, and complete information during
                registration.
              </p>

              <h3 className="text-lg font-medium text-gray-200">
                3.2 Account Security
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. User Conduct
            </h2>
            <p className="text-gray-300 leading-relaxed">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Share false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools to scrape or collect user data</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Premium Services
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-200">
                5.1 Payment Terms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Premium features require payment through our secure payment
                gateway. All fees are non-refundable unless otherwise stated in
                our refund policy.
              </p>

              <h3 className="text-lg font-medium text-gray-200">
                5.2 Subscription Terms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Premium subscriptions automatically renew unless cancelled. You
                may cancel your subscription at any time through your account
                settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The platform and its original content, features, and functionality
              are owned by Cashio.space and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. User Content
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-200">
                7.1 Content Ownership
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of content you submit to the platform. By
                submitting content, you grant us a worldwide, non-exclusive
                license to use, display, and distribute your content.
              </p>

              <h3 className="text-lg font-medium text-gray-200">
                7.2 Content Guidelines
              </h3>
              <p className="text-gray-300 leading-relaxed">
                All content must be professional, accurate, and comply with our
                community guidelines. We reserve the right to remove content
                that violates these terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Privacy and Data Protection
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the platform, to understand our
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Disclaimers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The platform is provided "as is" without warranties of any kind.
              We do not guarantee the accuracy, completeness, or usefulness of
              any information on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Cashio.space be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              out of or relating to your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Termination
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account immediately, without
              prior notice, for conduct that we believe violates these Terms and
              Conditions or is harmful to other users or the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes via email or through the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Contact Information
            </h2>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <p className="text-gray-300">
                <strong>Email:</strong> legal@cashio.space
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

export default TermsAndConditions;
