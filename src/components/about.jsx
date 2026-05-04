import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#130035] text-white px-6 py-16 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 md:flex-row md:items-start">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About Cerium6
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
            Cerium6 is a laboratory operations platform developed by Labwox, a laboratory consulting and scientific solutions company with practical experience in analytical laboratory operations. The platform helps commercial laboratories streamline sample management, reporting, analyst competency tracking, project coordination, and laboratory documentation through a centralized digital system.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
