import { motion } from "framer-motion";
import AnalystProficiency from "../../assets/images/Analyst prof.png";

export default function Analysis() {

  const features = [
    "Assign methods and parameters to analysts.",
    "Track analyst competency and authorization status.",
    "Maintain training and qualification records.",
    "Monitor analyst performance history.",
    "Manage workflow-specific proficiency assignments.",
    "Centralized competency documentation.",
    "Improved accountability and operational oversight."
  ];
  return (
     <section className="relative w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* LABEL */}
           
            <div className="mb-5 inline-flex items-center rounded-full border border-red-700/20 bg-red-700/10 px-4 py-1.5 text-sm font-medium text-red-500">
              Laboratory Proficiency System
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Analyst Proficiency
              <span className="mt-2 block text-red-700">
                Management
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0">
              Track analyst competency and operational readiness with integrated 
              proficiency management designed for analytical laboratories. Cerium6 enables 
              laboratories to document analyst qualifications, assign authorized workflows, monitor proficiency progress, and 
              maintain searchable competency records across laboratory activities.
            </p>
            {/* BUTTONS */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="w-full rounded-xl bg-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-700/20 transition-all duration-300 hover:scale-[1.02] hover:bg-red-800 sm:w-auto">
                Book a Demo
              </button>

              <button className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="grid h-full w-full grid-cols-12 grid-rows-8 gap-px opacity-20">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-white/5 bg-neutral-900"
                  />
                ))}
              </div>
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute -inset-4 rounded-[2rem] bg-red-700/10 blur-3xl" />

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl">
              
              {/* TOP BAR */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* IMAGE */}
              <div className="p-3 sm:p-4 lg:p-5">
                <img
                  src={AnalystProficiency}
                  alt="Analyst Proficiency Dashboard"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-24 sm:mt-28 lg:mt-32">
          
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
           
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Feature Highlights
            </h3>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              Simplify compliance, organization, and document accessibility
              across every laboratory workflow.
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-neutral-950/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-700/30 hover:bg-neutral-900"
              >
                {/* FEATURE NUMBER */}
                <div className="text-4xl font-bold text-red-700/30">
                  0{index + 1}
                </div>

                {/* FEATURE TEXT */}
                <p className="mt-5 text-base leading-8 text-gray-300">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}