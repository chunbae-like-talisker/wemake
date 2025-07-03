export function meta() {
  return [
    { title: "Promote Your Product - WeMake" },
    {
      name: "description",
      content: "Promote your product to reach more users",
    },
  ];
}

export function loader() {
  return {
    promotionPackages: [
      {
        id: "basic",
        name: "Basic Promotion",
        price: 29,
        features: [
          "Featured on homepage for 24 hours",
          "Social media mention",
          "Newsletter inclusion",
          "Analytics dashboard access",
        ],
      },
      {
        id: "premium",
        name: "Premium Promotion",
        price: 99,
        features: [
          "Featured on homepage for 7 days",
          "Priority placement in search results",
          "Social media campaign",
          "Newsletter feature article",
          "Analytics dashboard access",
          "Community spotlight interview",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise Promotion",
        price: 299,
        features: [
          "Featured on homepage for 30 days",
          "Top placement in all listings",
          "Dedicated social media campaign",
          "Newsletter cover story",
          "Advanced analytics dashboard",
          "Community spotlight interview",
          "Direct user outreach",
          "Custom promotion strategy",
        ],
      },
    ],
  };
}

export function action() {
  return {};
}

export default function PromotePage({ loaderData }: { loaderData: any }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Promote Your Product
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get your product in front of thousands of potential users with our
          promotion packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {loaderData.promotionPackages.map((pkg: any) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md p-6 border-2 hover:border-blue-500 transition-colors"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pkg.name}
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">
                ${pkg.price}
              </div>
              <div className="text-gray-500">one-time</div>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Promote on WeMake?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Reach Thousands</h3>
            <p className="text-gray-600">
              Get your product in front of our engaged community of makers and
              entrepreneurs
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Track Performance</h3>
            <p className="text-gray-600">
              Monitor your promotion's performance with detailed analytics and
              insights
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Boost Growth</h3>
            <p className="text-gray-600">
              Increase your product's visibility and drive more traffic to your
              website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
