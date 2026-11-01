import Navbar from "../components/organisems/body/Navbar";
import Footer from "../components/organisems/body/Footer";
import Hero from "../components/organisems/homepage/Hero";
import Skills from "../components/organisems/homepage/Skills";
import Experience from "../components/organisems/homepage/Experience";
import Project from "../components/organisems/homepage/Project";
import Documentation from "../components/organisems/homepage/Documentation";
import Links from "../components/particles/Links";

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-[#070B14] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient background particle constellation */}
      <Links />

      {/* Decorative ambient gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Navigation Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Page Sections */}
      <main className="relative z-10 flex flex-col space-y-4 lg:space-y-8">
        <Hero id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Project id="project" />
        <Documentation id="documentation" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
