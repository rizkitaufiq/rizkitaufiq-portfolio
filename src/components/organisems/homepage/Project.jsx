import { useState } from "react";
import PropTypes from "prop-types";
import WebStore from "../../../store/WebStore";
import GameStore from "../../../store/GameStore";

const Project = ({ id }) => {
  const { projects: rawWebProjects } = WebStore();
  const { projects: rawGameProjects } = GameStore();
  const [activeTab, setActiveTab] = useState("all");

  const webProjects = [
    {
      title: "Chill — Movie Streaming Platform",
      category: "Web Application",
      badge: "React & REST API",
      description:
        "Web-based movie and TV series streaming portal. Features searchable media library, categorized collections, trailer previews, and instant playback interface.",
      image: "images/homepage/content/project/Chill-desktop.PNG",
      tags: ["React.js", "Tailwind CSS", "REST API", "Vercel"],
      liveUrl: "https://mission-5-reactjs-chill.vercel.app/",
      githubUrl: "https://github.com/rizkitaufiq",
    },
    {
      title: "BlogKU — Multi-language CMS",
      category: "Web Application",
      badge: "Laravel Full-Stack",
      description:
        "Full-featured blogging platform built with Laravel. Supports bilingual content (English & Indonesian), interactive nested comments, and role-based author dashboard.",
      image: "images/homepage/content/project/BlogKU-desktop.PNG",
      tags: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
      githubUrl: "https://github.com/rizkitaufiq/blog-app.git",
    },
    {
      title: "E-Commerce — Store with Cart & Wishlist",
      category: "Web Application",
      badge: "Django & Python",
      description:
        "Robust online marketplace featuring dynamic product catalogs, filtering, wishlist persistence, and a multi-step checkout workflow.",
      image: "images/homepage/content/project/E-commerce-desktop.PNG",
      tags: ["Django 5", "Python", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/rizkitaufiq/simple_ecommerce_django5",
    },
    {
      title: "SIAP — Library Archive Information System",
      category: "Web Application",
      badge: "PHP & Database",
      description:
        "Enterprise archival system for university thesis and book management. Includes visitor activity logging, digital document archiving, and automated statistical reporting.",
      image: "images/homepage/content/project/SIAP-desktop.jpg",
      tags: ["PHP Native", "MySQL", "JavaScript", "Admin Dashboard"],
      githubUrl: "https://github.com/rizkitaufiq/siap.github.io.git",
    },
  ];

  const gameProjects = [
    {
      title: "Adventure of Levi",
      category: "Game Development",
      badge: "Unity 2D Platformer",
      description:
        "Engaging 2D side-scrolling adventure game where players overcome environmental challenges and collect key artifacts across progressive levels.",
      image: "images/homepage/content/project/Adventure-of-levi.PNG",
      tags: ["Unity", "C#", "Android", "2D Physics"],
      storeUrl: "https://play.google.com/store/apps/developer?id=rzk+developer",
    },
    {
      title: "Roots Run Deep",
      category: "Game Development",
      badge: "Unity 2.5D Adventure",
      description:
        "Atmospheric desktop game featuring root-manipulation mechanics to solve intricate platform puzzles and traverse treacherous terrain.",
      image: "images/homepage/content/project/Roots-Run-Deep.png",
      tags: ["Unity", "C#", "PC Desktop", "2.5D Graphics"],
      githubUrl: "https://github.com/rizkitaufiq",
    },
    {
      title: "Box Runner 3D",
      category: "Game Development",
      badge: "Unity 3D Arcade",
      description:
        "Fast-paced 3D arcade reflex runner with procedural obstacles, dynamic difficulty scaling, and high-score leaderboard mechanics on mobile.",
      image: "images/homepage/content/project/Box-Runner.PNG",
      tags: ["Unity 3D", "C#", "Android", "Mobile Arcade"],
      storeUrl: "https://play.google.com/store/apps/developer?id=rzk+developer",
    },
  ];

  const tabs = [
    { id: "all", label: "All Projects", count: webProjects.length + gameProjects.length },
    { id: "web", label: "Web Applications", count: webProjects.length },
    { id: "game", label: "Game Projects", count: gameProjects.length },
  ];

  return (
    <section id={id} className="relative z-10 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="bx bx-folder-open text-sm"></i>
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            A showcase of production-ready web applications and interactive games developed from concept to deployment.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 w-fit mx-auto shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content based on Active Tab */}

        {/* 1. WEB PROJECTS (shown if "all" or "web") */}
        {(activeTab === "all" || activeTab === "web") && (
          <div className="mb-14">
            {activeTab === "all" && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <i className="bx bx-globe text-lg"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Web Applications
                </h3>
                <span className="text-xs text-slate-400 font-mono">({webProjects.length} items)</span>
              </div>
            )}

            {/* 2x2 Balanced Grid - ZERO DEAD SPACE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {webProjects.map((project, index) => (
                <div
                  key={index}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  {/* Image Container with Zoom */}
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-cyan-400 border border-slate-700/80 backdrop-blur-md">
                      {project.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify sm:text-left">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-white border border-cyan-500/30 transition-all flex items-center gap-1.5"
                          >
                            <i className="bx bx-link-external"></i>
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5"
                          >
                            <i className="bx bxl-github"></i>
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. GAME PROJECTS (shown if "all" or "game") */}
        {(activeTab === "all" || activeTab === "game") && (
          <div className="mb-14">
            {activeTab === "all" && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <i className="bx bx-joystick text-lg"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Game Development
                </h3>
                <span className="text-xs text-slate-400 font-mono">({gameProjects.length} items)</span>
              </div>
            )}

            {/* 3-Column Balanced Grid - ZERO DEAD SPACE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {gameProjects.map((project, index) => (
                <div
                  key={index}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
                >
                  {/* Image Container with Zoom */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-indigo-400 border border-slate-700/80 backdrop-blur-md">
                      {project.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify sm:text-left">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 shrink-0">
                        {project.storeUrl && (
                          <a
                            href={project.storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 transition-all flex items-center gap-1.5"
                          >
                            <i className="bx bxl-play-store"></i>
                            <span>Play Store</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5"
                          >
                            <i className="bx bxl-github"></i>
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Centered GitHub CTA Footer - Balanced & Professional */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/rizkitaufiq?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white shadow-lg shadow-black/40 hover:-translate-y-0.5 transition-all"
          >
            <i className="bx bxl-github text-xl text-cyan-400"></i>
            <span>Explore More Repositories on GitHub</span>
            <i className="bx bx-right-arrow-alt text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  id: PropTypes.string,
};

export default Project;
