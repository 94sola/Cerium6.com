import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoDark from "../assets/images/logo2.png"; // for white bg
import logoLight from "../assets/images/logo1.png"; // for transparent bg

const navItems = [
  { id: "about", label: "About Us" },
  { id: "features", label: "Features" },
  { id: "who", label: "Why Choose Us" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

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

  // ✅ critical fix: include mobileOpen
  const isActiveState = hovered || mobileOpen || scrolled;

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActiveState
            ? "bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      />

      {/* NAVBAR CONTENT */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* LOGO (AUTO SWITCH) */}
        <img
          src={isActiveState ? logoDark : logoLight}
          alt="logo"
          className={`transition-all duration-500 ${
            scrolled ? "h-16 sm:h-20" : "h-16 sm:h-20"
          }`}
        />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative text-sm lg:text-base font-medium transition ${
                  isActiveState
                    ? isActive
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                    : isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}

                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute left-0 -bottom-1 h-[2px] w-full ${
                      isActiveState ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* ❌ hidden on mobile */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.04] shadow-md"
          >
            Book Demo
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden text-2xl ${
              isActiveState ? "text-black" : "text-white"
            }`}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ SLIDE-IN MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <span className="font-semibold text-lg text-gray-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col px-6 py-6 divide-y">
                {navItems.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-base font-medium text-gray-800 hover:text-indigo-600 transition"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto p-6">
                <a
                  href="#contact"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
                >
                  Book Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}