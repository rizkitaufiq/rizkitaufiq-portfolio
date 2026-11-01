import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "project" },
    { name: "Documentation", path: "documentation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 backdrop-blur-lg border-b border-slate-800/80 py-3 shadow-xl shadow-black/40"
          : "bg-[#070B14]/60 backdrop-blur-sm py-4 lg:py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all">
              RT
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base lg:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Rizki <span className="text-cyan-400">Taufiq</span>
              </span>
              <span className="text-[10px] text-slate-400 -mt-1 hidden sm:inline tracking-wider uppercase font-mono">
                Full-Stack & Game Dev
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menu.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.path}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="!text-cyan-400 !bg-cyan-500/10 font-semibold"
                className="cursor-pointer px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6282327243687"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <i className="bx bxl-whatsapp text-base"></i>
              <span>Let's Talk</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <i className={`bx ${mobileMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          {menu.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.path}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
              className="block cursor-pointer px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/6282327243687"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
            >
              <i className="bx bxl-whatsapp text-lg"></i>
              <span>Let's Talk on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
