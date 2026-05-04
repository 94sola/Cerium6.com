import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/labwox..png";

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

  // Scroll + active section
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

  const isActiveState = hovered || mobileOpen || scrolled;

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    >
      {/* BACKGROUND LAYER */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActiveState
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      />

      {/* CONTENT */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        {/* LOGO (SCALES SMOOTHLY) */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className={`transition-all duration-500 ${
              scrolled ? "h-12" : "h-14"
            }`}
          />
          <div className="leading-tight">
            <p
              className={`font-display font-semibold tracking-wide transition-all duration-300 ${
              scrolled ? "text-2xl" : "text-3xl"
            } ${isActiveState ? "text-gray-900" : "text-white"}`}
          >
            Cerium6
            </p>
            <span
              className={`text-lg pl-6 ${
                isActiveState ? "text-gray-500" : "text-gray-300"
              }`}
            >
              by Labwox
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative text-lg font-medium transition ${
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
                    className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full ${
                      isActiveState ? "bg-black" : "bg-white"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 sm:px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.04] shadow-md"
          >
            Book Demo
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden text-2xl transition ${
              isActiveState ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-5 mt-4 text-base">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 font-medium"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-3 px-5 py-3 rounded-xl bg-indigo-500 text-white text-center"
              >
                Book Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}