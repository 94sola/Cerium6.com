import { useState } from "react";

const faqData = [
  {
    title: "How long does it take to implement Cerium6?",
    content:
      "Implementation timelines depend on your laboratory's size and complexity. Typically, the setup process takes 2-4 weeks including data migration, staff training, and system configuration. We provide dedicated support throughout the implementation to ensure a smooth transition.",
  },
  {
    title: "What is Cerium6's pricing model?",
    content:
      "Cerium6 offers flexible pricing tailored to your laboratory's size and needs. We provide transparent subscription-based pricing with no hidden fees. Contact us for a personalized quote based on your facility's requirements and feature selection.",
  },
  {
    title: "Do you offer ongoing support and maintenance?",
    content:
      "Yes, all Cerium6 subscriptions include comprehensive support including technical assistance, system updates, security patches, and performance optimization. Our support team is available to help with any questions or issues you encounter.",
  },
  {
    title: "What features does Cerium6 include?",
    content:
      "Cerium6 provides comprehensive laboratory management including sample tracking, project management, analyst proficiency tracking, method development documentation, document management, and automated reporting. All features are designed specifically for commercial analytical laboratories.",
  },
  {
    title: "Can Cerium6 integrate with our existing laboratory systems?",
    content:
      "Yes, Cerium6 can integrate with many existing laboratory information management systems (LIMS) and equipment. We work with you to ensure seamless data flow between systems. Contact our team to discuss your specific integration needs.",
  },
  {
    title: "How secure is Cerium6?",
    content:
      "Security is a top priority for Cerium6. We implement enterprise-grade encryption, secure authentication, regular security audits, and compliance with industry standards. Your laboratory data is protected with multiple layers of security.",
  },
  {
    title: "Is Cerium6 suitable for small laboratories?",
    content:
      "Absolutely. Cerium6 is designed to scale with your laboratory's growth. Whether you're a small independent lab or a large commercial facility, Cerium6 provides the tools you need without unnecessary complexity or cost.",
  },
  {
    title: "What training and resources do you provide?",
    content:
      "We provide comprehensive training including video tutorials, detailed documentation, live training sessions, and dedicated onboarding support. Our team ensures your staff is confident using Cerium6 from day one.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white w-full px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Find answers to common questions about our services, pricing, process, and how we can help your business succeed.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-start gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left transition-colors duration-200"
              >
                <span className="text-sm sm:text-base font-semibold text-white leading-snug pr-4">
                  {item.title}
                </span>
                <span className="flex-shrink-0 text-xl sm:text-2xl font-light text-red-800 transition-transform duration-300 transform">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Animated Content Panel */}
              <div
                className={`overflow-hidden border-t border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 py-4 sm:py-5 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
