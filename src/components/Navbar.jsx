import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);

          const sections = ["home", "about", "skills", "projects", "experience", "contact"];
          const scrollPosition = scrollY + 120;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && scrollPosition >= el.offsetTop) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setShowMenu(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        scrolled 
          ? "bg-dark-100/95 backdrop-blur-md border-b border-purple/20 shadow-md py-2.5 sm:py-3" 
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-tight text-white active:scale-95 transition-transform"
        >
          <span>Suprabh</span>
          <span className="bg-gradient-to-r from-purple-light via-pink-hot to-cyan-glow bg-clip-text text-transparent">
            Sharma
          </span>
          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-dark-300/80 px-3.5 py-1.5 rounded-full border border-white/5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-150 active:scale-95 ${
                  isActive ? "text-white" : "text-gray-300 hover:text-cyan-glow"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple/40 to-cyan/30 rounded-full border border-purple/60 -z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-4 py-2 text-xs lg:text-sm font-bold rounded-full bg-gradient-to-r from-purple via-pink to-cyan text-white shadow-md shadow-purple/20 hover:scale-105 active:scale-95 transition-all duration-150"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle with 44px Touch Target */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label={showMenu ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-dark-300 border border-dark-400 text-gray-200 active:scale-90 transition-transform focus:outline-none cursor-pointer"
        >
          {showMenu ? <FaXmark className="text-xl text-cyan-glow" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 top-[52px] bg-dark-100/90 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed top-[58px] left-0 right-0 mx-3 bg-dark-200 border border-purple/30 rounded-2xl p-4 shadow-2xl z-50 md:hidden max-h-[85vh] overflow-y-auto"
            >
              <nav className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-98 ${
                        isActive
                          ? "bg-purple/25 text-cyan-glow border border-purple/40 font-bold"
                          : "text-gray-300 hover:bg-dark-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-cyan-glow"></span>}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-dark-400 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple via-pink to-cyan text-white text-sm font-bold shadow-md active:scale-98 transition-transform"
                >
                  Get In Touch
                </a>
                <div className="flex justify-center items-center gap-6 pt-1 text-gray-400 text-lg">
                  <a href="https://github.com/SuprabhSharma" target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-glow transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/suprabh-sharma-13321b2a5" target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-glow transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:sharmasuprabh2608@gmail.com" className="p-2 hover:text-cyan-glow transition-colors">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;