import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };
  const handleBuyPlan = async (plan) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: plan,
      },
      { withCredentials: true }
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "DevTinder (Cashio)",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + "" + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return isUserPremium ? (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-4 py-8">
      <div className="bg-gray-900/80 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-purple-700 relative overflow-hidden">
        {/* Decorative SVG */}
        <svg
          className="mx-auto mb-4"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40"
            cy="40"
            r="38"
            stroke="#a78bfa"
            strokeWidth="4"
            fill="#f3e8ff"
          />
          <path d="M40 20L48 36H32L40 20Z" fill="#a78bfa" />
          <ellipse
            cx="40"
            cy="52"
            rx="16"
            ry="8"
            fill="#a78bfa"
            fillOpacity="0.2"
          />
          <circle cx="40" cy="36" r="6" fill="#a78bfa" />
        </svg>
        <h2 className="text-2xl font-bold text-purple-200 mb-2">
          You are already a premium user
        </h2>
        <p className="text-gray-300 mb-4">
          Thank you for supporting DevTinder! You have access to all premium
          features, including unlimited connections, priority support, and
          exclusive tools. Enjoy your enhanced experience!
        </p>
        <div className="flex justify-center gap-2 mt-6">
          <span className="inline-block bg-purple-700/80 text-white text-xs px-3 py-1 rounded-full">
            Premium Active
          </span>
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
            ✨ Enjoy the perks!
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-8 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">
            Choose Your Premium Plan
          </h1>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Unlock your full potential with our premium features. Connect with
            more people and enhance your experience.
          </p>
        </div>

        {/* Plans Container */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Silver Plan */}
          <div className="card bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600 flex flex-col">
            <div className="card-body p-6 flex flex-col flex-grow">
              {/* Plan Header */}
              <div className="text-center mb-4">
                <div className="badge badge-secondary badge-sm mb-3">
                  SILVER
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Silver Membership
                </h2>
                <div className="text-3xl font-bold text-gray-200 mb-1">
                  ₹999
                  <span className="text-sm font-normal text-gray-400">
                    /month
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Perfect for getting started
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <div className="badge badge-success badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Unlimited Chat Access
                    </h4>
                    <p className="text-xs text-gray-400">
                      Chat with anyone you match with
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-success badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      100 Connection Requests/Day
                    </h4>
                    <p className="text-xs text-gray-400">
                      Send up to 100 connection requests daily
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-success badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Blue Tick Verification
                    </h4>
                    <p className="text-xs text-gray-400">
                      Get verified with blue tick for 3 months
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-success badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Priority Support
                    </h4>
                    <p className="text-xs text-gray-400">
                      Get faster customer support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-success badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Advanced Filters
                    </h4>
                    <p className="text-xs text-gray-400">
                      Use advanced search and filter options
                    </p>
                  </div>
                </div>
              </div>

              {/* Buy Button - Fixed at bottom */}
              <div className="mt-auto">
                <button
                  onClick={() => handleBuyPlan("silver")}
                  className="btn btn-secondary btn-sm w-full h-10 text-white hover:bg-secondary-focus text-sm"
                >
                  Buy Silver Membership
                </button>
              </div>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="card bg-gradient-to-br from-yellow-900/80 to-orange-900/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-500 relative overflow-hidden flex flex-col">
            {/* Popular Badge */}
            <div className="absolute top-3 right-3">
              <div className="badge badge-warning badge-sm">POPULAR</div>
            </div>

            <div className="card-body p-6 flex flex-col flex-grow">
              {/* Plan Header */}
              <div className="text-center mb-4">
                <div className="badge badge-warning badge-sm mb-3">GOLD</div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Gold Membership
                </h2>
                <div className="text-3xl font-bold text-gray-200 mb-1">
                  ₹1999
                  <span className="text-sm font-normal text-gray-400">
                    /month
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Ultimate experience with all features
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Everything in Silver
                    </h4>
                    <p className="text-xs text-gray-400">
                      All Silver features included
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Infinite Connection Requests
                    </h4>
                    <p className="text-xs text-gray-400">
                      Send unlimited connection requests
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Extended Blue Tick
                    </h4>
                    <p className="text-xs text-gray-400">
                      Blue tick verification for 6 months
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Priority Matching
                    </h4>
                    <p className="text-xs text-gray-400">
                      Get shown to more people first
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Super Likes
                    </h4>
                    <p className="text-xs text-gray-400">
                      Send 5 super likes per day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Rewind Feature
                    </h4>
                    <p className="text-xs text-gray-400">
                      Go back to profiles you passed on
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="badge badge-warning badge-xs mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      24/7 VIP Support
                    </h4>
                    <p className="text-xs text-gray-400">
                      Dedicated support team
                    </p>
                  </div>
                </div>
              </div>

              {/* Buy Button - Fixed at bottom */}
              <div className="mt-auto">
                <button
                  onClick={() => handleBuyPlan("gold")}
                  className="btn btn-warning btn-sm w-full h-10 text-white hover:bg-warning-focus text-sm"
                >
                  Buy Gold Membership
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 shadow-md max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3">
              Why Choose Premium?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="text-center">
                <div className="text-xl mb-1">🚀</div>
                <h4 className="font-semibold text-white text-sm">
                  Faster Matching
                </h4>
                <p className="text-gray-400">
                  Get matched with more people quickly
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">🔒</div>
                <h4 className="font-semibold text-white text-sm">
                  Enhanced Security
                </h4>
                <p className="text-gray-400">
                  Verified profiles and secure connections
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">💎</div>
                <h4 className="font-semibold text-white text-sm">
                  Premium Features
                </h4>
                <p className="text-gray-400">
                  Access to exclusive features and tools
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            <div className="collapse collapse-arrow bg-gray-800/60 backdrop-blur-sm shadow-md border border-gray-700">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-base font-semibold text-white py-3">
                Can I cancel my subscription anytime?
              </div>
              <div className="collapse-content">
                <p className="text-gray-400 text-sm">
                  Yes, you can cancel your subscription at any time. Your
                  premium features will remain active until the end of your
                  current billing period.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-800/60 backdrop-blur-sm shadow-md border border-gray-700">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base font-semibold text-white py-3">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p className="text-gray-400 text-sm">
                  We accept all major credit cards, PayPal, and Apple Pay. All
                  payments are processed securely through our trusted payment
                  partners.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-800/60 backdrop-blur-sm shadow-md border border-gray-700">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base font-semibold text-white py-3">
                Is there a free trial available?
              </div>
              <div className="collapse-content">
                <p className="text-gray-400 text-sm">
                  Yes! We offer a 7-day free trial for all premium plans. You
                  can try all features before committing to a subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
