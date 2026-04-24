export default function Skills() {
  return (
    <section className="px-6 md:px-20 py-24 border-t border-gray-800">
      <h2 className="text-3xl font-semibold mb-12">What I Do</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Shopify */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Shopify Engineering</h3>
          <p className="text-gray-300">
            Advanced Shopify development using Liquid, Theme 2.0, metafields, and metaobjects.
            Building scalable storefront architectures with dynamic sections and flexible content systems.
          </p>
        </div>

        {/* Apps */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Custom App Development</h3>
          <p className="text-gray-300">
            Designing and developing custom Shopify apps using Laravel, REST & GraphQL APIs,
            enabling complex business logic beyond native Shopify limitations.
          </p>
        </div>

        {/* B2B */}
        <div>
          <h3 className="text-xl font-semibold mb-3">B2B & Wholesale Systems</h3>
          <p className="text-gray-300">
            Building wholesale architectures including custom pricing, bulk ordering workflows,
            and advanced shipping logic tailored for large-scale operations.
          </p>
        </div>

        {/* Performance */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
          <p className="text-gray-300">
            Optimizing Core Web Vitals, improving Lighthouse scores, and implementing
            efficient frontend rendering strategies for high-performance storefronts.
          </p>
        </div>

        {/* Integrations */}
        <div>
          <h3 className="text-xl font-semibold mb-3">System Integrations</h3>
          <p className="text-gray-300">
            Integrating ERP systems, analytics platforms, and third-party tools to automate workflows,
            synchronize data, and improve operational efficiency.
          </p>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Frontend & UX Engineering</h3>
          <p className="text-gray-300">
            Building interactive, conversion-focused interfaces using modern JavaScript,
            GSAP animations, and responsive design principles.
          </p>
        </div>

      </div>
    </section>
  );
}