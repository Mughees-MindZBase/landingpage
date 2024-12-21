import React, { useState } from "react";
import TickIcon from "../../../assets/images/tick.svg";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = [
    {
      title: "Silver",
      monthlyPrice: 50,
      yearlyPrice: 250,
      features: [
        "No Discount",
        "Basic Support",
        "Ads Banner Free",
        "Design Style ",
        "Component Library",
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      isPopular: false,
    },
    {
      title: "Gold",
      monthlyPrice: 100,
      yearlyPrice: 300,
      features: [
        "No Discount",
        "Basic Support",
        "Ads Banner Free",
        "Design Style ",
        "Component Library",
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      isPopular: true,
    },
    {
      title: "Platenium",
      monthlyPrice: 150,
      yearlyPrice: 400,
      features: [
        "No Discount",
        "Basic Support",
        "Ads Banner Free",
        "Design Style ",
        "Component Library",
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="w-full py-20 bg-bg-overallBackground">
      {/* Heading Section */}
      <div className="w-full flex items-center justify-center">
        <div className="text-center mb-12 w-[30%]">
          <p className="text-extralarge font-bold text-primaryColor mb-4">
            Pricing Plans
          </p>
          <p className="text-gray-600 mb-8 text-lightGrey">
            Coca landing page UI Kit no credit card required. All plans come
            with a free, 14 day trial of our Premium features.
          </p>

          {/* Toggle Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative flex items-center w-40 h-11 rounded-lg bg-white transition-all focus:outline-none"
            >
              {/* Monthly */}
              <span
                className={`absolute left-0 w-1/2 h-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  !isYearly
                    ? "bg-popularCardBckground text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Monthly
              </span>

              {/* Yearly */}
              <span
                className={`absolute right-0 w-1/2 h-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  isYearly
                    ? "bg-popularCardBckground text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Yearly
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container  mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "bg-popularCardBckground border-2 border-popularCardText shadow-xl pt-20"
                  : "bg-simpleCardBackground border border-white"
              } hover:scale-105 hover:shadow-2xl hover:border-popularCardText`}
            >
              {plan.isPopular && (
                <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-white p-2 rounded-full text-sm font-semibold">
                  <p className="p-3 bg-mudColor rounded-full">Most Popular</p>
                </span>
              )}

              <h3 className="text-sm text-lightGrey font-bold mb-2">
                {plan.title}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primaryColor">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-primaryColor text-lg font-medium">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <hr
                className={`px-5 mb-3 ${
                  plan.isPopular
                    ? "border border-indigo-600"
                    : "border border-white"
                }`}
              />
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-primaryColor"
                  >
                    <img src={TickIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg font-semibold
                    bg-white text-popularCardText"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
