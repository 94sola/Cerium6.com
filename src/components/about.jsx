import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight sm:leading-snug">
            Developed by Labwox for Analytical Laboratories
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 leading-6 sm:leading-7 md:leading-8">
            Cerium6 is a laboratory operations platform developed by Labwox, a laboratory 
            consulting and scientific solutions company with practical experience in analytical laboratory operations.
          </p>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 md:mt-16 lg:mt-20">
        <motion.div 
          className="flex items-start gap-3 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-orange-500 flex-shrink-0"></span>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-snug">Centralize laboratory operations </p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-blue-600 flex-shrink-0"></span>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-snug">Improve operational visibility</p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-400 flex-shrink-0"></span>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-snug">Maintain organized laboratory records </p>
        </motion.div>
        <motion.div 
          className="flex items-start gap-3 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gray-500 flex-shrink-0"></span>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-snug">Enhance laboratory efficiency</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
