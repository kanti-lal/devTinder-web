import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6">
          Shipping and Delivery Policy
        </h1>
        <p className="text-gray-400 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Digital Service Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cashio.space is a digital platform that provides developer
              networking services. All our services are delivered electronically
              through our web platform and mobile applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Service Activation
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                2.1 Immediate Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Upon successful payment verification, premium features and
                services are activated immediately. You will receive a
                confirmation email with access details.
              </p>

              <h3 className="text-lg font-medium text-gray-700">
                2.2 Account Setup
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Profile creation and customization</li>
                <li>Developer matching algorithm activation</li>
                <li>Premium networking features unlock</li>
                <li>Advanced search and filtering options</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Platform Availability
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                3.1 Service Uptime
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain 99.9% platform availability. Scheduled
                maintenance is communicated in advance via email and platform
                notifications.
              </p>

              <h3 className="text-lg font-medium text-gray-700">
                3.2 Access Methods
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Web browser access (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile-responsive design for all devices</li>
                <li>Progressive Web App (PWA) support</li>
                <li>API access for developers (premium feature)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Premium Feature Delivery
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                4.1 Feature Activation Timeline
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Instant: Profile boosts and visibility enhancements</li>
                <li>Within 24 hours: Advanced matching algorithms</li>
                <li>Immediate: Unlimited messaging and connections</li>
                <li>Real-time: Analytics and insights dashboard</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                4.2 Feature Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">
                    Networking Features
                  </h4>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Unlimited connections</li>
                    <li>• Advanced search filters</li>
                    <li>• Priority matching</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">
                    Communication Tools
                  </h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Unlimited messaging</li>
                    <li>• Video call integration</li>
                    <li>• File sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Technical Requirements
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                5.1 System Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Modern web browser with JavaScript enabled</li>
                <li>Stable internet connection (minimum 1 Mbps)</li>
                <li>Device with camera and microphone for video features</li>
                <li>Updated operating system and browser</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                5.2 Supported Devices
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Desktop computers (Windows, macOS, Linux)</li>
                <li>Laptops and tablets</li>
                <li>Mobile phones (iOS and Android)</li>
                <li>Smart TVs and gaming consoles (limited features)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Service Updates and Maintenance
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                6.1 Scheduled Maintenance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Regular maintenance is performed during low-traffic hours (2 AM
                - 6 AM EST) to minimize service disruption. Users are notified
                24 hours in advance.
              </p>

              <h3 className="text-lg font-medium text-gray-700">
                6.2 Feature Updates
              </h3>
              <p className="text-gray-700 leading-relaxed">
                New features and improvements are deployed automatically. Major
                updates are announced through platform notifications and email
                communications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Support and Troubleshooting
            </h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">
                7.1 Technical Support
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>24/7 automated support system</li>
                <li>Live chat support during business hours</li>
                <li>Email support with 24-hour response time</li>
                <li>Comprehensive help center and documentation</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-700">
                7.2 Common Issues
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>If you experience issues:</strong>
                  <br />
                  • Clear browser cache and cookies
                  <br />
                  • Try a different browser or device
                  <br />
                  • Check your internet connection
                  <br />• Contact support with error screenshots
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Contact Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Technical Support:</strong> support@cashio.space
                <br />
                <strong>Platform Issues:</strong> platform@cashio.space
                <br />
                <strong>Response Time:</strong> Within 24 hours
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

export default ShippingAndDelivery;
