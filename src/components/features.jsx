import { motion } from "framer-motion";
import analyst from "../assets/images/Analyst prof.png";
import reporting from "../assets/images/Reporting.png";
import sample from "../assets/images/Sample Management.png";
import method from "../assets/images/method.png";
import project from "../assets/images/Project Tracking.png";

const products = [
  {
    title: "Analyst Proficiency",
    description:
      "Manage analyst competency, assign workflows, and track training in real time.",
    image: analyst,
  },
  {
    title: "Reporting",
    description:
      "Standardized reporting and documentation with structured workflows.",
    image: reporting,
  },
  {
    title: "Sample Management",
    description:
      "Log, organize, and track samples across projects and departments.",
    image: sample,
  },
  {
    title: "Project Tracking",
    description:
      "Structured tracking tailored for lab operations.",
    image: project,
  },
  {
    title: "Method Development",
    description:
      "Track experiments, compare results, and store validation data.",
    image: method,
  },
];

const Products = () => {
  return (
    <section
      id="features"
      className="bg-[#130035] text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-10 sm:mb-14 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Products
        </h2>

        {/* MOBILE / TABLET */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {products.map((product, index) => (
            <Card key={index} product={product} index={index} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block space-y-8">
          
          {/* Top 3 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <Card key={index} product={product} index={index} />
            ))}
          </div>

          {/* Bottom 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {products.slice(3, 5).map((product, index) => (
              <Card key={index + 3} product={product} index={index + 3} />
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
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 sm:p-6 md:p-7 overflow-hidden h-[260px] sm:h-[280px] md:h-[300px] flex flex-col justify-between group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      {/* TEXT */}
      <div className="z-10 max-w-[80%]">
        <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">
          {product.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* IMAGE (FIXED POSITION 🔥) */}
      <div
        className={`
          absolute
          ${isBottom ? "left-[-15px] sm:left-[-20px]" : "right-[-15px] sm:right-[-20px]"}
          
          bottom-[-10px] sm:bottom-[-5px] md:bottom-[0px]   /* moved UP */
          
          w-[85%] sm:w-[75%] md:w-[70%]
          
          ${isBottom ? "rotate-[6deg]" : "rotate-[-6deg]"}
          
          transition-transform duration-500 
          group-hover:scale-105
          ${isBottom ? "group-hover:rotate-[3deg]" : "group-hover:rotate-[-3deg]"}
        `}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain opacity-95 pointer-events-none select-none"
        />
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
    </motion.div>
  );
};