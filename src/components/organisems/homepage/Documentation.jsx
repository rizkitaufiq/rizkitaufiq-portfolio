import { useState } from "react";
import PropTypes from "prop-types";

const Documentation = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const docItems = [
    {
      src: "images/homepage/content/doc/s2p-1.jpeg",
      title: "Enterprise System Presentation",
      category: "PT S2P",
      description: "Demonstration and operational testing of industrial central web systems in the control auditorium at PT Sumber Segara Primadaya (PLTU Cilacap).",
    },
    {
      src: "images/homepage/content/doc/entwo-1.jpeg",
      title: "Software Developer Team",
      category: "CV. Entwo Enginering",
      description: "Collaborative development sprint and backend application architecture sessions with the developer team.",
    },
    {
      src: "images/homepage/content/doc/entwo-2.jpeg",
      title: "Software Developer Team",
      category: "CV. Entwo Enginering",
      description: "Developer team coordination, feature maintenance discussions, and technical roadmap planning.",
    },
    {
      src: "images/homepage/content/doc/ANBK-1.jpeg",
      title: "ANBK Computer Proctoring",
      category: "Technical Supervision",
      description: "Managing and proctoring the national computer-based assessment system in secondary school IT labs.",
    },
    {
      src: "images/homepage/content/doc/KBM-1.jpeg",
      title: "Classroom Teaching & KBM",
      category: "Classroom",
      description: "Teaching computer science fundamentals and multimedia skills to secondary students.",
    },
    {
      src: "images/homepage/content/doc/Rapat-1.jpeg",
      title: "Faculty Strategic Planning",
      category: "School Coordination",
      description: "Participating in institutional coordination meetings to evaluate and enhance academic curriculum.",
    },
  ];

  return (
    <section id={id} className="relative z-10 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <i className="bx bx-camera text-sm"></i>
            <span>Activity & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work & Teaching <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Documentation</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Snapshots of professional engagements, classroom instructional sessions, examination administration, and academic coordination.
          </p>
        </div>

        {/* 6-Item Perfectly Balanced Grid (3 Columns x 2 Rows) - ZERO EMPTY GAP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {docItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer group relative flex flex-col"
            >
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-emerald-400 border border-slate-700/80 backdrop-blur-md">
                  {item.category}
                </div>

                {/* Expand Hint Top Right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="bx bx-fullscreen text-sm"></i>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/90 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6 bg-slate-900">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Documentation.propTypes = {
  id: PropTypes.string,
};

export default Documentation;
