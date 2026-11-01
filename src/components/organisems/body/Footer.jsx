import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "project" },
    { name: "Documentation", path: "documentation" },
  ];

  const socials = [
    { name: "GitHub", icon: "bxl-github", url: "https://github.com/rizkitaufiq" },
    { name: "LinkedIn", icon: "bxl-linkedin", url: "https://www.linkedin.com/in/rizkitaufiqr" },
    { name: "Play Store", icon: "bxl-play-store", url: "https://play.google.com/store/apps/developer?id=rzk+developer" },
    { name: "Instagram", icon: "bxl-instagram", url: "https://www.instagram.com/rizki_taufiqr/" },
    { name: "WhatsApp", icon: "bxl-whatsapp", url: "https://wa.me/6282327243687" },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-slate-800/80 bg-[#05080F]/90 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20">
                RT
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Rizki <span className="text-cyan-400">Taufiq</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Web Developer & Unity Game Developer passionate about building robust web applications and interactive digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link, idx) => (
              <ScrollLink
                key={idx}
                to={link.path}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-2">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-base"
                  title={social.name}
                  aria-label={social.name}
                >
                  <i className={`bx ${social.icon}`}></i>
                </a>
              ))}
            </div>

            <ScrollLink
              to="about"
              smooth={true}
              duration={700}
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>Back to Top</span>
              <i className="bx bx-up-arrow-alt text-base"></i>
            </ScrollLink>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {currentYear} Rizki Taufiq. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-semibold">React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
