import { useState } from "react";

const faqData = [
  {
    title: "How long does a typical project take?",
    content:
      "Project timelines vary based on scope and complexity. Most web design projects take 4-12 weeks, while custom software development typically ranges from 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    title: "What is your pricing model?",
    content:
      "We offer flexible pricing options including fixed-price projects, hourly rates, and retainer packages. Pricing depends on project complexity, timeline, and requirements. Contact us for a personalized quote.",
  },
  {
    title: "Do you offer ongoing support and maintenance?",
    content:
      "Yes, we provide comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. We offer maintenance retainers tailored to your needs.",
  },
  {
    title: "What technologies do you specialize in?",
    content:
      "We work with modern web technologies including React, Vue, Node.js, and Python. For design, we use Figma and Adobe Creative Suite. We also specialize in Webflow, Wix, and custom WordPress development.",
  },
  {
    title: "Can you help rebrand an existing business?",
    content:
      "Absolutely. We specialize in comprehensive rebranding projects including logo design, brand guidelines, website redesign, and marketing collateral. We'll work with you to maintain your core values while refreshing your image.",
  },
  {
    title: "How do you ensure project quality?",
    content:
      "Quality is at the heart of everything we do. We follow agile methodologies, conduct regular testing, incorporate client feedback throughout development, and perform comprehensive quality assurance before launch.",
  },
  {
    title: "Do you work with startups?",
    content:
      "Yes, we love working with startups! We understand budget constraints and offer scalable solutions. We can help with MVP development, brand identity, and go-to-market strategies.",
  },
  {
    title: "What is your process for handling revisions?",
    content:
      "We include a set number of revision rounds in our projects. Additional revisions are quoted separately. Our goal is to exceed expectations while maintaining project momentum and timelines.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#130035] text-white w-full px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
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
