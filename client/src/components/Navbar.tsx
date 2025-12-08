import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@headlessui/react";
import logoImg from "../assets/favicon2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  const links = [
    { id: 1, link: "hero", name: "Home" },
    { id: 2, link: "about", name: "About" },
    { id: 3, link: "skills", name: "Skills" },
    { id: 4, link: "projects", name: "Projects" },
    { id: 5, link: "contact", name: "Contact" },
  ];

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-md transition-all duration-300"
          : "fixed w-full h-20 z-[100] bg-transparent transition-all duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        {/* LOGO IMAGE */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logoImg}
            alt="Fino Logo"
            className="w-24 h-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="text-sm uppercase cursor-pointer font-medium tracking-wider relative group"
              >
                <Link
                  activeClass="text-blue-600 dark:text-blue-400 font-bold scale-105"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-all"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* TOGGLE SWITCH */}
          <div className="flex items-center gap-3">
            {isDark ? (
              <FaMoon
                className="text-yellow-300 transition-all duration-300"
                size={20}
              />
            ) : (
              <FaSun
                className="text-orange-400 transition-all duration-300"
                size={20}
              />
            )}
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              className={`${
                isDark ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none`}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`${
                  isDark ? "translate-x-6" : "translate-x-1"
                } inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300`}
              />
            </Switch>
          </div>
        </div>

        {/* HAMBURGER MENU (MOBILE) */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2 mr-2">
            {isDark ? (
              <FaMoon className="text-yellow-300" size={16} />
            ) : (
              <FaSun className="text-orange-400" size={16} />
            )}
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              className={`${
                isDark ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none`}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`${
                  isDark ? "translate-x-5" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          <div
            onClick={handleNav}
            className="cursor-pointer dark:text-gray-100"
          >
            <FaBars size={25} />
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY DENGAN ANIMASI MENUTUP */}
      <AnimatePresence mode="wait">
        {nav && (
          <motion.div
            key="mobile-menu" // PENTING: Agar animasi exit terbaca
            initial={{ x: "100%" }} // Posisi awal (di luar layar kanan)
            animate={{ x: 0 }} // Posisi masuk (tengah layar)
            exit={{ x: "100%" }} // Posisi keluar (kembali ke kanan) - INI ANIMASI MENUTUPNYA
            transition={{ duration: 0.4, ease: "easeInOut" }} // Gerakan halus
            className="fixed left-0 top-0 w-full h-screen bg-[#ecf0f3] dark:bg-[#0f172a] p-10 z-[999] flex flex-col"
          >
            <div className="flex w-full items-center justify-between mb-10">
              <div onClick={() => setNav(false)}>
                <img src={logoImg} alt="Logo" className="w-24 h-auto" />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:bg-gray-800 dark:shadow-none dark:text-white hover:scale-105 transition-transform"
              >
                <FaTimes size={20} />
              </div>
            </div>

            <ul className="flex-col py-4 flex items-center gap-8">
              {links.map(({ id, link, name }) => (
                <li
                  key={id}
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold uppercase tracking-widest dark:text-gray-200"
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setNav(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
