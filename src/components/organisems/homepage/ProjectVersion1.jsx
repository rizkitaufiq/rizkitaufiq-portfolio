import PropTypes from "prop-types";
import GameStore from "../../../store/GameStore";
import CarouselEffect from "../../../hooks/animated/CarouselEffect";
import { useCallback } from "react";

const ProjectVersion1 = (props) => {
  const { projects } = GameStore();
  const { id } = props;
  const { current, setCurrent } = CarouselEffect(projects.length);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length, setCurrent]);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, [projects.length, setCurrent]);

  return (
    <section
      id={id}
      className="w-full mt-10 lg:mt-20 lg:max-w-5xl mx-auto h-auto text-[15px] lg:text-[30px] relative overflow-hidden rounded-lg shadow-lg mb-4 lg:mb-8"
    >
      <div className="mb-2 lg:mb-4 px-6 lg:px-0">
        <h2 className="text-secondary font-bold">Game</h2>
      </div>

      <div>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="absolute top-0 left-1  bg-primary bg-opacity-80 lg:py-4 px-4 lg:px-8 rounded-b-lg font-bold text-center text-white">
                {project.title}
              </div>
              <img
                src={project.image}
                alt="image"
                className="w-full h-[60vh] lg:h-[75vh] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 to-transparent" />

              <div className="absolute bottom-0 bg-primary bg-opacity-80 text-white w-full p-4 text-center">
                {project.content}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute w-[6vh] lg:w-[9vh] top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          «
        </button>
        <button
          onClick={handleNext}
          className="absolute w-[6vh] lg:w-[9vh] top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          »
        </button>
      </div>
    </section>
  );
};

ProjectVersion1.propTypes = { id: PropTypes.string };

export default ProjectVersion1;
