import PropTypes from "prop-types";
import TypingEffect from "../../../hooks/animated/TypingEffect";

const Hero = ({ id }) => {
  const messages = [
    "Full-Stack Web Developer",
    "Unity Game Developer",
    "Creative Problem Solver",
    "Software Engineer",
  ];
  const typedMessage = TypingEffect(messages, 120, 80, 1500);

  const socials = [
    {
      name: "LinkedIn",
      icon: "bxl-linkedin",
      url: "https://www.linkedin.com/in/rizkitaufiqr",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
    },
    {
      name: "GitHub",
      icon: "bxl-github",
      url: "https://github.com/rizkitaufiq",
      color: "hover:text-white hover:border-white/40",
    },
    {
      name: "Play Store",
      icon: "bxl-play-store",
      url: "https://play.google.com/store/apps/developer?id=rzk+developer",
      color: "hover:text-[#00C853] hover:border-[#00C853]/40",
    },
    {
      name: "Instagram",
      icon: "bxl-instagram",
      url: "https://www.instagram.com/rizki_taufiqr/",
      color: "hover:text-[#E4405F] hover:border-[#E4405F]/40",
    },
  ];

  return (
    <section
      id={id}
      className="relative z-10 w-full min-h-[92vh] flex items-center py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md w-fit mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Available for Projects & Full-time Roles
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Rizki Taufiq
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="mt-3 flex items-center text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 min-h-[2.5rem]">
              <span className="text-slate-400 mr-2">Specializing in</span>
              <span className="text-cyan-400 font-mono underline decoration-cyan-500/30 underline-offset-4">
                {typedMessage}
              </span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
            </div>

            {/* Bio Paragraph */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl text-justify sm:text-left">
              Bachelor of Computer Science graduate with solid expertise as a{" "}
              <strong className="text-white font-semibold">Full Stack Developer</strong>{" "}
              and <strong className="text-white font-semibold">Game Developer</strong>.
              Skilled in building scalable web applications with{" "}
              <span className="text-cyan-300">React, Laravel, Node.js, and MySQL</span>,
              as well as creating immersive 2D & 3D games with{" "}
              <span className="text-cyan-300">Unity and C#</span> for Android and desktop.
              Passionate about clean architecture, performance, and user-centric design.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1YzaZpe4nNnAdqozFUCZ40-5lYLFf8MQy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5"
              >
                <i className="bx bx-download text-lg"></i>
                <span>Download Resume</span>
              </a>

              <a
                href="https://wa.me/6282327243687"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2.5"
              >
                <i className="bx bxl-whatsapp text-lg text-emerald-400"></i>
                <span>Contact WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center text-slate-300 text-lg transition-all duration-200 shadow-sm hover:scale-110 ${social.color}`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <i className={`bx ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Avatar with Glow & Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Soft Ambient Halo - Elegant & Muted */}
              <div className="absolute inset-0 rounded-full bg-slate-800/40 blur-3xl -z-10"></div>

              {/* Subtle Decorative Ring */}
              <div className="absolute -inset-2.5 rounded-full border border-dashed border-slate-700/50"></div>

              {/* Photo Frame - Stylish Metallic & Slate Gradient */}
              <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-b from-slate-600/80 via-slate-800 to-slate-950 shadow-2xl shadow-black/90 ring-1 ring-white/10">
                <img
                  src="images/homepage/content/personal/foto-new.jpeg"
                  alt="Rizki Taufiq"
                  className="w-full h-full rounded-full object-cover object-[center_18%] bg-slate-900"
                />
              </div>

              {/* Floating Badge 1: Web Dev */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <i className="bx bxl-react text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-mono uppercase">Stack</p>
                  <p className="text-xs font-bold text-white">Full-Stack Web</p>
                </div>
              </div>

              {/* Floating Badge 2: Game Dev */}
              <div
                className="absolute -bottom-3 -left-2 sm:-left-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <i className="bx bx-joystick text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-mono uppercase">Engine</p>
                  <p className="text-xs font-bold text-white">Unity 2D/3D</p>
                </div>
              </div>

              {/* Floating Badge 3: CS Degree */}
              <div
                className="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-1.5 hidden sm:flex animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                <i className="bx bxs-graduation text-amber-400 text-base"></i>
                <span className="text-xs font-semibold text-slate-200">B.Comp.Sc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string,
};

export default Hero;
