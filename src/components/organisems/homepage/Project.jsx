import PropTypes from "prop-types";
import CardBox from "../../molecules/CardBox";
import WebStore from "../../../store/WebStore";

const Project = (props) => {
  const { projects } = WebStore();
  const { id } = props;
  return (
    <section
      id={id}
      className="w-full text-white p-6 lg:p-10 mt-10 lg:mt-20 font-bold text-[15px] lg:text-[30px]"
    >
      <header className="flex flex-col justify-start items-center mb-2 lg:mb-10">
        <h1 className="text-primary">Project</h1>
      </header>

      <div className="mb-2 lg:mb-4 lg:px-28">
        <h2 className="text-secondary">Web based</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-10">
        {projects.map((project, index) => (
          <CardBox
            key={index}
            bgCard="bg-slate-700"
            textHeader={project.title}
            textContent={project.description}
            link={project.url}
          >
            <img
              src={project.image}
              alt="image"
              className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
            />
          </CardBox>
        ))}
      </div>
      <footer className="lg:px-28 mt-5">
        <a
          href="https://github.com/rizkitaufiq?tab=repositories"
          className="text-white btn bg-primary border-none hover:text-gray-500 hover:bg-default hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.8)] transition-all duration-300"
        >
          « More »
        </a>
      </footer>
    </section>
  );
};

Project.propTypes = { id: PropTypes.string };

export default Project;
