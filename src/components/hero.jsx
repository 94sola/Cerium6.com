import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = [
    "Laboratories",
    "Lab Operations",
    "Scientific Workflows",
    "Sample Analysis",
    "Research Teams",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 400);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1C1A3A] text-white px-10 lg:px-16 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HERO TEXT */}
        <div className="max-w-4xl">
          <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">The Operating Platform for</span>

            <span className="block mt-2">Commercial Analytical</span>

            <span className="block mt-2">
               {" "}
              <span
                className={`inline-block transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="gradient-text animate-gradient">
                  {phrases[index]}
                </span>
              </span>
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            Streamline lab operations, improve collaboration, and accelerate
            scientific outcomes with an intelligent laboratory management
            platform built for modern teams.
          </p>

          {/* CTA */}
          <button className="mt-8 px-7 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium shadow-lg shadow-indigo-500/30 hover:scale-[1.03]">
            Book a Demo
          </button>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              letter: "C",
              title: "Compliance",
              gradient: "from-orange-400 to-pink-500",
            },
            {
              letter: "T",
              title: "Technology",
              gradient: "from-sky-400 to-violet-500",
            },
            {
              letter: "S",
              title: "Scalability",
              gradient: "from-amber-400 to-orange-500",
            },
            {
              letter: "A",
              title: "Automation",
              gradient: "from-slate-400 to-gray-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
              >
                {item.letter}
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADIENT TEXT STYLES */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            90deg,
            #facc15,
            #ec4899,
            #8b5cf6,
            #f97316
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .animate-gradient {
          animation: gradientMove 4s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}
