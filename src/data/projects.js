const projects = [
  {
    slug: "cardboard-core",
    title: "Cardboard Core",
    description:
      "Full-scale Shopify storefront architecture with custom app integrations and dynamic content system.",
    problem: [
      "Limited flexibility in managing dynamic content using default Shopify setup",
      "High dependency on developers for frequent content updates",
      "Scalability concerns for future expansion",
    ],
    solution: [
      "Developed modular Theme 2.0 architecture with reusable dynamic sections",
      "Integrated custom Shopify app to handle complex dynamic data",
      "Implemented metafields and metaobjects for flexible content management",
    ],
    impact: [
      "Reduced dependency on developers for content updates",
      "Improved scalability and maintainability of the store",
      "Enabled faster content deployment and operational efficiency",
    ],
    tech: [
      "Shopify Liquid",
      "Theme 2.0",
      "Metaobjects",
      "Custom App (Laravel)",
      "JavaScript",
    ],
    link: "https://cardboardcore.com/",
  },

  {
    slug: "beast-branding",
    title: "Beast Branding",
    description:
      "Wholesale-focused Shopify store with custom pricing logic, product customization, and shipping workflows.",
    problem: [
      "Complex B2B pricing and bulk ordering requirements",
      "Need for custom product configuration options",
      "Limitations in default Shopify shipping logic",
    ],
    solution: [
      "Implemented custom pricing logic for wholesale customers",
      "Developed advanced product customization workflows",
      "Configured conditional shipping rules based on order logic",
    ],
    impact: [
      "Improved wholesale customer experience",
      "Simplified bulk ordering process",
      "Increased operational efficiency for B2B transactions",
    ],
    tech: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Custom Logic",
      "Shipping Rules",
    ],
    link: "https://beastbranding.com/",
  },

  {
    slug: "destira",
    title: "Destira",
    description:
      "High-traffic Shopify store with ERP integration, analytics setup, and continuous development support.",
    problem: [
      "Need for real-time synchronization between Shopify and ERP systems",
      "Complex data handling for analytics and reporting",
      "Ongoing requirement for feature enhancements and stability",
    ],
    solution: [
      "Developed custom ERP integrations for seamless data synchronization",
      "Built analytics pipelines for improved reporting",
      "Provided continuous development and optimization support",
    ],
    impact: [
      "Improved data accuracy across systems",
      "Enabled better business insights through analytics",
      "Ensured stable and scalable platform performance",
    ],
    tech: [
      "Shopify",
      "ERP Integration",
      "REST APIs",
      "Analytics Tools",
      "JavaScript",
    ],
    link: "https://destira.com/",
  },

  {
    slug: "givengo-hockey",
    title: "GivenGo Hockey",
    description:
      "SEO and Google ecosystem optimization including Merchant Center, Ads, and structured data improvements.",
    problem: [
      "Issues with Google Merchant Center and product feeds",
      "Low search visibility due to poor SEO structure",
      "Tracking and marketing integration inconsistencies",
    ],
    solution: [
      "Implemented structured data (schema) for better indexing",
      "Resolved Google Merchant Center and Ads issues",
      "Optimized tracking setup for marketing platforms",
    ],
    impact: [
      "Improved search engine visibility",
      "Enhanced performance of Google Ads campaigns",
      "Stabilized marketing and tracking ecosystem",
    ],
    tech: [
      "Shopify",
      "SEO",
      "Schema Markup",
      "Google Merchant Center",
      "Google Ads",
    ],
    link: "https://givengohockey.com/",
  },

  {
    slug: "mj-wholesale",
    title: "MJ Wholesale",
    description:
      "Enterprise-level wholesale platform with ERP integration, supply chain automation, and custom B2B logic.",
    problem: [
      "Manual workflows causing inefficiencies in operations",
      "Complex supply chain and pricing requirements",
      "Need for scalable wholesale system",
    ],
    solution: [
      "Built custom ERP integration for real-time synchronization",
      "Developed automation workflows for bulk operations",
      "Implemented advanced wholesale pricing and customer segmentation",
    ],
    impact: [
      "Reduced manual workload significantly",
      "Improved operational efficiency and scalability",
      "Enabled seamless wholesale transactions",
    ],
    tech: [
      "Shopify",
      "Laravel",
      "ERP Integration",
      "REST APIs",
      "Custom Logic",
    ],
    link: "https://mjwholesale.com/",
  },

  {
    slug: "boobie-superfoods",
    title: "Boobie Superfoods",
    description:
      "Complete Shopify rebuild with modern architecture, subscription system, and performance optimization.",
    problem: [
      "Outdated theme impacting performance and user experience",
      "Lack of subscription-based purchasing functionality",
      "Limited scalability for future growth",
    ],
    solution: [
      "Rebuilt entire storefront using latest Shopify architecture",
      "Implemented subscription system with custom logic",
      "Optimized frontend performance and UX",
    ],
    impact: [
      "Improved user experience and engagement",
      "Enhanced performance and loading speed",
      "Enabled recurring revenue through subscriptions",
    ],
    tech: [
      "Shopify",
      "Liquid",
      "Subscriptions",
      "Performance Optimization",
      "JavaScript",
    ],
    link: "https://www.boobiesuperfoods.com/",
  },
];

export default projects;