import React from 'react'
import { useNavigate } from 'react-router-dom';


function PricingCard() {
    const navigate = useNavigate();
    const plans = [
        {
          name: "BRONZE PLAN",
          price: "4,999",
          gradient: "bg-gradient-to-r from-yellow-400 to-pink-500",
          features: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque. Duis sit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
          ],
        },
        {
          name: "STARTUP",
          price: "9,999",
          gradient: "bg-gradient-to-r from-blue-300 to-blue-600",
          features: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque. Duis sit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
          ],
        },
        {
          name: "ENTERPRISE",
          price: "29,999",
          gradient: "bg-gradient-to-r from-green-200 to-teal-600",
          features: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque. Duis sit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque.",
          ],
        },
      ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 text-primary">We can Help You with the Perfect Plan</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="relative bg-white rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute transform -rotate-45 translate-x-1/3 -translate-y-1/4">
                <div className="w-96 h-96 rounded-full border-8 border-gray-200" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className={`${plan.gradient} p-6 text-white text-center`}>
                <h3 className="text-2xl font-semibold tracking-wider">{plan.name}</h3>
                <div className=' w-[60%] mx-auto h-[2px] bg-white my-1'></div>
              </div>

              {/* Price */}
              <div className="p-6 text-center">
                <div className="flex items-start justify-center">
                  <span className="text-2xl">₹</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <span className="text-gray-500">/week</span>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="px-6 pb-8 text-center">
                <button onClick={() => navigate("/contact")} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  CALL NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingCard;