import PropTypes from "prop-types";

const Experience = ({ id }) => {
  const experiences = [
    {
      period: "Jul 2025 - Present",
      role: "Web Developer",
      company: "CV. Entwo Electronics & Enginering",
      type: "Cilacap, Central Java",
      description:
        "Developing website-based applications with core focus on backend architecture. Handling routine system maintenance and implementing feature requests from users. Engineering web solutions using JavaScript, HTML, CSS, PHP, SQL Server, and MySQL.",
      skills: ["PHP", "JavaScript", "SQL Server", "MySQL", "Backend Architecture", "HTML/CSS"],
      current: true,
    },
    {
      period: "2023 - Present",
      role: "Full-Stack Developer",
      company: "Freelance / Independent Contractor",
      type: "Remote",
      description:
        "Architecting and delivering customized web applications for diverse clients. Specializing in responsive frontends with React & Tailwind CSS, robust backend services with Laravel & Node.js, and efficient relational database management.",
      skills: ["React.js", "Laravel", "PHP", "MySQL", "Tailwind CSS", "REST APIs"],
      current: false,
    },
    {
      period: "2021 - 2023",
      role: "TIK & Multimedia Teacher",
      company: "SMP IT DAARUSSAADAH & SMK MURI Tasikmalaya",
      type: "Tasikmalaya, West Java",
      description:
        "Taught Information Technology, web fundamentals, and multimedia courses. Designed interactive syllabi, mentored students in hands-on computer labs, and prepared technical examination systems (ANBK).",
      skills: ["IT Education", "Web Basics", "Multimedia", "ANBK Proctoring", "Mentoring"],
      current: false,
    },
    {
      period: "2021",
      role: "Staff IT — Web Developer",
      company: "BAPPEDA Kab. Tasikmalaya",
      type: "Contract",
      description:
        "Engineered administrative dashboards for the employee attendance management system. Designed intuitive user management controls, automated reporting queries, and maintained core MySQL databases.",
      skills: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "Admin Systems"],
      current: false,
    },
    {
      period: "2017",
      role: "Operating System Laboratory Assistant",
      company: "Universitas Jenderal Soedirman (UNSOED)",
      type: "Academic",
      description:
        "Facilitated laboratory practicums on Unix/Linux operating system concepts, process scheduling, memory management, and shell scripting. Evaluated student assignments and guided troubleshooting sessions.",
      skills: ["Linux / Unix", "Shell Scripting", "System Architecture", "Academic Tutoring"],
      current: false,
    },
  ];

  return (
    <section id={id} className="relative z-10 w-full py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="bx bx-briefcase-alt-2 text-sm"></i>
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Professional background spanning software engineering, IT instruction, and academic technical leadership.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-[#070B14] transition-all duration-300 ${exp.current
                  ? "bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  : "bg-slate-700 group-hover:bg-blue-400"
                  }`}
              ></div>

              {/* Year badge for large screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-bold font-mono tracking-tight text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {exp.period}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7">
                {/* Year badge on mobile */}
                <div className="md:hidden mb-2">
                  <span className="inline-block text-xs font-bold font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center text-xs text-slate-400 font-medium">
                    <i className="bx bx-map-pin mr-1 text-cyan-400"></i>
                    {exp.type}
                  </span>
                </div>

                <p className="text-sm font-semibold text-cyan-400/90 mb-3">
                  {exp.company}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify sm:text-left">
                  {exp.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/50 text-[11px] font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  id: PropTypes.string,
};

export default Experience;
