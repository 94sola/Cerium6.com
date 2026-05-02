import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logos.png";

const navItems = [
  { id: "about", label: "About Us" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const navRefs = useRef({});

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= offsetTop &&
            window.scrollY < offsetTop + height
          ) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[65%] max-w-5xl">
      <div
        className={`relative flex items-center justify-between pl-6 py-0 rounded-md border transition-all duration-300
        ${
          scrolled
            ? "bg-[#130035] backdrop-blur-xl border-white/10 shadow-lg shadow-black/30"
            : "bg-[#130035] backdrop-blur-md border-white/10"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Cerium6 Logo"
            className="h-5 w-auto sm:h-7 md:h-8"
          />
        </div>

        {/* Nav Links */}
        <div className="relative hidden md:flex items-center gap-8 text-xs font-normal">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <div key={id} className="relative">
                <a
                  href={`#${id}`}
                  ref={(el) => (navRefs.current[id] = el)}
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>

                {/* Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-800 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="https://your-app-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-900 text-white px-3 py-1 rounded-sm text-sm font-medium hover:opacity-90 transition"
        >
          Book Demo
        </a>
      </div>
    </div>
  );
}