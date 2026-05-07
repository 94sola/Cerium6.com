import { motion } from "framer-motion";
import analyst from "../assets/images/Analyst prof.png";
import reporting from "../assets/images/Reporting.png";
import sample from "../assets/images/Sample Management.png";
import method from "../assets/images/method.png";
import document from "../assets/images/Documents.png";
import project from "../assets/images/Project Tracking.png";

const products = [
  {
    title: "Analyst Proficiency",
    description:
      "Cerium6 helps laboratories manage analyst competency by assigning methods, parameters, and workflows to qualified personnel while tracking training status and proficiency in real time.",
    image: analyst,
  },
  {
    title: "Reporting and PDF Generation",
    description:
      "Create professional, consistent, and traceable reports for analytical testing, analyst proficiency, method development, and other laboratory activities from a centralized reporting system.",
    image: reporting,
  },
  {
    title: "Sample Management",
    description:
      "Cerium6 enables laboratories to log, organize, and monitor samples across departments, projects, and analytical workflows with complete operational visibility.",
    image: sample,
  },
  {
    title: "Project Tracking",
    description:
      "Organize laboratory activities with structured project management designed for commercial analytical operations.",
    image: project,
  },
  {
    title: "Method Development",
    description:
      "Log method development activities, record experimental conditions and observations, compare outcomes, and store supporting files such as chromatograms, validation data, calculations, and instrument outputs for future reference.",
    image: method,
  },
  {
    title: "Documentation",
    description:
      "Cerium6 provides a centralized document management system for organizing, storing, and retrieving laboratory operational records across analytical operations and quality processes.",
    image: document,
  },
];

const Products = () => {
  return (
    <section
      id="features"
      className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-10 sm:mb-14 text-white">
          Products
        </h2>

        {/* MOBILE / TABLET */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {products.map((product, index) => (
            <Card key={index} product={product} index={index} />
          ))}
        </div>

        {/* DESKTOP → 2 / 2 / 2 */}
        <div className="hidden lg:flex flex-col gap-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.slice(0, 2).map((product, index) => (
              <Card key={index} product={product} index={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.slice(2, 4).map((product, index) => (
              <Card key={index + 2} product={product} index={index + 2} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.slice(4, 6).map((product, index) => (
              <Card key={index + 4} product={product} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

// ===== CARD COMPONENT =====
const Card = ({ product, index }) => {
  const isBottom = index >= 3;

  return (
    <motion.div
      className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/10 to-red-900-500/10 p-6 sm:p-7 md:p-8 overflow-hidden h-[330px] sm:h-[360px] md:h-[390px] flex flex-col justify-between group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      {/* TEXT */}
      <div className="z-10 max-w-[80%] pr-4">
        <h3 className="text-xl sm:text-2xl font-medium mb-3">
          {product.title}
        </h3>
        <p className="text-gray-200 text-xs pb-6 sm:text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* IMAGE */}
      <div
        className={`
          absolute
          ${isBottom ? "left-[-10px]" : "right-[-10px]"}
          bottom-0
          w-[70%]
          ${isBottom ? "rotate-[6deg]" : "rotate-[-6deg]"}
          transition-transform duration-500 
          group-hover:scale-105
        `}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain opacity-90 pointer-events-none select-none"
        />
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-900/10 to-red-900-500/10" />
    </motion.div>
  );
};