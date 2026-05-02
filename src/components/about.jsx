import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#130035] text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We are liquis
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded by two siblings who left corporate careers to build something
            more fulfilling, liquis is rooted in family and guided by our values.
            We chose to stay small and lean—prioritizing creativity, empathy, and
            personal connection over scale. That spirit defines how we work: with
            each other, with our team, and with our clients.
          </p>
        </motion.div>

        {/* Right Values Section */}
        <motion.div
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-950 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-red-800 text-xl font-semibold mb-2">
              Authenticity
            </h3>
            <p className="text-gray-400">Be true to who we are and what we do</p>
          </div>

          <div className="bg-neutral-950 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-red-800 text-xl font-semibold mb-2">
              Vision & Mission
            </h3>
            <p className="text-gray-400">
              Driving purpose with clarity and long-term goals
            </p>
          </div>

          <div className="bg-neutral-950 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-red-800 text-xl font-semibold mb-2">
              Expertise
            </h3>
            <p className="text-gray-400">Right person for the right job</p>
          </div>

          <div className="bg-neutral-950 border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-red-800 text-xl font-semibold mb-2">
              Aim & Goal
            </h3>
            <p className="text-gray-400">
              Focused objectives to achieve meaningful impact
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
