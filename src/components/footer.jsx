import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import logo from "../assets/images/labwox..png";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20">
          {/* BRAND */}
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-flex items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="Labwox Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            <div>
              <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-white">
                Classic Research, Modern Tools
              </h1>

              <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                © Labwox Limited, all rights reserved.
                <br />
                2B Awori Close, Akora Villas off Adeniyi Jones,
                <br />
                Ikeja, Lagos
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* COMPANY + CONTACT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* COMPANY */}
            <div>
              <h2 className="text-lg font-semibold mb-5 text-white">
                Company
              </h2>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#resources" className="hover:text-white transition">
                    Resources
                  </a>
                </li>

                <li>
                  <a href="#terms" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#privacy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-lg font-semibold mb-5 text-white">
                Contact Us
              </h2>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="mailto:info@labwox.com.ng"
                    className="hover:text-white transition"
                  >
                    info@labwox.com.ng
                  </a>
                </li>

                <li>(+234) 903 495 6049</li>
              </ul>

              {/* SOCIALS */}
              <div className="flex items-center gap-5 mt-6">
                <a
                  href="https://web.facebook.com/labwoxltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/labwoxltd5/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/labwox/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/2349034956049"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Sign up for insights
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Join our newsletter for updates, laboratory tools,
              product releases, and behind-the-scenes insights.
            </p>

            <form
              action="https://yourprefix.us21.list-manage.com/subscribe/post?u=abc123&id=xyz456"
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition whitespace-nowrap"
              >
                Join
                <FiArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Labwox. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;