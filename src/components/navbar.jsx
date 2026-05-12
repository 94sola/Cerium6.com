import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/images/logo2.png";

const navItems = [
  { id: "about", label: "About Us" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Detect homepage
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only detect active section on homepage
      if (!isHomePage) return;

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
  }, [isHomePage]);

  // HANDLE NAVIGATION
  const handleNavClick = (id) => {
    setMobileOpen(false);

    // If user is NOT on homepage
    if (!isHomePage) {
      navigate("/");

      // Wait for page to render before scrolling
      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    // Smooth scroll on homepage
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* NAVBAR BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          hovered || mobileOpen
            ? "bg-neutral-800"
            : "bg-black"
        } ${
          scrolled
            ? "shadow-lg backdrop-blur-xl"
            : ""
        }`}
      />

      {/* NAVBAR CONTENT */}
      <div
        className={`relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logo}
            alt="Cerium6 Logo"
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5">
          {navItems.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-4 lg:px-5 py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-neutral-700 text-white"
                    : "text-gray-200 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {label}

                {isActive && (
                  <motion.span
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 rounded-xl border border-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* CTA BUTTON */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:flex items-center justify-center px-5 lg:px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-all duration-300"
          >
            Book Demo
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-neutral-700 transition-all duration-300"
          >
            {mobileOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* MOBILE DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[70%] max-w-sm bg-black z-50 shadow-2xl flex flex-col"
            >
              {/* MOBILE HEADER */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-neutral-700 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <div className="flex flex-col px-5 py-6 gap-2">
                {navItems.map(({ id, label }) => {
                  const isActive = active === id;

                  return (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-neutral-700 text-white"
                          : "text-gray-300 hover:bg-neutral-700 hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* MOBILE CTA */}
              <div className="mt-auto p-5 border-t border-white/10">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="block w-full text-center px-5 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold transition-all duration-300"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}