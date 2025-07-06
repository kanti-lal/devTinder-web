import React from "react";

const CancellationAndRefund = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Cancellation and Refund Policy
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Cashio.space, we strive to provide excellent service to our
              developer community. This policy outlines our cancellation and
              refund procedures for premium subscriptions and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Premium Subscription Cancellation
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-200">
                2.1 How to Cancel
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Log into your Cashio.space account</li>
                <li>Navigate to Account Settings → Subscription</li>
                <li>Click on "Cancel Subscription"</li>
                <li>Confirm your cancellation</li>
                <li>You will receive a confirmation email</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                2.2 Cancellation Timeline
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cancellations take effect at the end of your current billing
                period. You will continue to have access to premium features
                until the end of the paid period.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Refund Policy
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                3.1 Eligibility for Refunds
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We offer refunds under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                <li>
                  Technical issues preventing service access within 7 days of
                  purchase
                </li>
                <li>Duplicate charges or billing errors</li>
                <li>Service unavailability for more than 24 hours</li>
                <li>Unauthorized charges</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                3.2 Non-Refundable Items
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Used premium features after 7 days of purchase</li>
                <li>Account termination due to policy violations</li>
                <li>Change of mind after 7 days</li>
                <li>Partial month refunds for mid-cycle cancellations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Refund Process
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                4.1 How to Request a Refund
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                <li>Contact our support team at support@cashio.space</li>
                <li>Include your account email and reason for refund</li>
                <li>Provide any relevant screenshots or documentation</li>
                <li>
                  Our team will review your request within 3-5 business days
                </li>
              </ol>

              <h3 className="text-lg font-medium text-gray-700">
                4.2 Refund Timeline
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Approved refunds are processed within 5-10 business days. The
                time to appear in your account depends on your payment method
                and financial institution.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Account Deletion
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                5.1 Permanent Account Deletion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may request permanent deletion of your account and all
                associated data. This action is irreversible and will result in:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                <li>Loss of all profile data and connections</li>
                <li>Termination of active subscriptions</li>
                <li>Deletion of all uploaded content</li>
                <li>No refund for remaining subscription time</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                5.2 Data Retention
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Some data may be retained for legal compliance purposes, as
                outlined in our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Service Suspension
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate services for users
              who violate our Terms and Conditions. In such cases, no refunds
              will be provided.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Payment Method Changes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can update your payment method at any time through your
              account settings. Changes take effect immediately for future
              billing cycles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Contact Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Support Email:</strong> support@cashio.space
                <br />
                <strong>Billing Email:</strong> billing@cashio.space
                <br />
                <strong>Response Time:</strong> 24-48 hours
                <br />
                <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM
                EST
                <br />
                <strong>Address:</strong> Ahmedabad Gujarat India
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              9. Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This cancellation and refund policy may be updated periodically.
              Users will be notified of significant changes via email or
              platform notifications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndRefund;
