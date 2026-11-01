import PropTypes from "prop-types";

const Skills = ({ id }) => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: "bx-code-alt",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Crafting modern, responsive, and high-performance user interfaces.",
      skills: [
        { name: "React.js", icon: "bxl-react", color: "text-cyan-400" },
        { name: "JavaScript (ES6+)", icon: "bxl-javascript", color: "text-amber-400" },
        { name: "Tailwind CSS", icon: "bxl-tailwind-css", color: "text-sky-400" },
        { name: "HTML5 / CSS3", icon: "bxl-html5", color: "text-orange-500" },
        { name: "DaisyUI", icon: "bx-palette", color: "text-emerald-400" },
        { name: "Responsive Design", icon: "bx-mobile-alt", color: "text-indigo-400" },
      ],
    },
    {
      title: "Backend & Database",
      icon: "bx-server",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      description: "Building reliable REST APIs, database schemas, and business logic.",
      skills: [
        { name: "PHP", icon: "bxl-php", color: "text-indigo-400" },
        { name: "Laravel", icon: "bx-cube-alt", color: "text-red-500" },
        { name: "Node.js", icon: "bxl-nodejs", color: "text-emerald-500" },
        { name: "Python", icon: "bxl-python", color: "text-yellow-400" },
        { name: "MySQL", icon: "bxs-data", color: "text-sky-400" },
        { name: "RESTful APIs", icon: "bx-transfer", color: "text-purple-400" },
      ],
    },
    {
      title: "Game Dev & Tools",
      icon: "bx-joystick",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Developing interactive 2D & 3D game mechanics and workflows.",
      skills: [
        { name: "Unity 2D / 3D", icon: "bxl-unity", color: "text-white" },
        { name: "C# Scripting", icon: "bx-code-curly", color: "text-purple-400" },
        { name: "Git & GitHub", icon: "bxl-github", color: "text-slate-200" },
        { name: "Linux / OS", icon: "bxl-tux", color: "text-amber-400" },
        { name: "Vite / Tooling", icon: "bx-bolt-circle", color: "text-yellow-400" },
        { name: "Vercel / Deploy", icon: "bx-cloud-upload", color: "text-cyan-400" },
      ],
    },
  ];

  const marqueeSkills = [
    { name: "React", icon: "bxl-react", color: "text-cyan-400" },
    { name: "JavaScript", icon: "bxl-javascript", color: "text-amber-400" },
    { name: "Laravel", icon: "bx-cube-alt", color: "text-red-400" },
    { name: "PHP", icon: "bxl-php", color: "text-indigo-400" },
    { name: "Node.js", icon: "bxl-nodejs", color: "text-emerald-400" },
    { name: "Python", icon: "bxl-python", color: "text-yellow-400" },
    { name: "Unity", icon: "bxl-unity", color: "text-slate-100" },
    { name: "C#", icon: "bx-code-curly", color: "text-purple-400" },
    { name: "MySQL", icon: "bxs-data", color: "text-sky-400" },
    { name: "Tailwind", icon: "bxl-tailwind-css", color: "text-cyan-400" },
    { name: "Git", icon: "bxl-git", color: "text-orange-500" },
    { name: "HTML5", icon: "bxl-html5", color: "text-orange-400" },
  ];

  return (
    <section id={id} className="relative z-10 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="bx bx-chip text-sm"></i>
            <span>Capabilities & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Technologies and frameworks utilized across web and game engineering projects to deliver stable, high-performance solutions.
          </p>
        </div>

        {/* 3 Balanced Cards Grid - Zero Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 lg:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl border ${category.accent}`}>
                    <i className={`bx ${category.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">Core Competency</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-xs font-medium text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      <i className={`bx ${skill.icon} ${skill.color} text-sm`}></i>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Looping Marquee */}
        <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#070B14] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070B14] to-transparent z-10"></div>

          <div className="flex w-max animate-scroll-left space-x-4 hover:paused py-2">
            {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 text-sm font-semibold shadow-sm shrink-0"
              >
                <i className={`bx ${item.icon} ${item.color} text-xl`}></i>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  id: PropTypes.string,
};

export default Skills;
