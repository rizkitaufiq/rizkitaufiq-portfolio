import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Links = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.4,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#38BDF8", "#818CF8", "#34D399"],
            },
            links: {
              color: "#38BDF8",
              distance: 140,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 40,
            },
            opacity: {
              value: { min: 0.15, max: 0.4 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default Links;
