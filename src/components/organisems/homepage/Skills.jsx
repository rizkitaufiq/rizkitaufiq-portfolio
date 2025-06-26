import AOS from "aos";
import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";

const Skills = (props) => {
  const { id } = props;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  });

  return (
    <section id={id} className="w-full text-white p-6 lg:p-10 -mt-4 lg:mt-20">
      <div className="flex flex-col justify-center items-center lg:px-14 font-bold text-[15px] lg:text-[30px]">
        <h1 className="text-primary">Skills</h1>
        <p className="text-center text-[8px] lg:text-[15px]">
          The technology used when working as Full Stack Developer to develop
          <br /> a website from both the Front End and Back End so that it runs
          well
        </p>
      </div>

      <div className="flex flex-row lg:px-14">
        <div className="flex flex-col relative w-full overflow-hidden h-40 justify-center items-center">
          <div className="flex justify-center items-center animate-scroll-left space-x-3 lg:space-x-6 -mt-10 lg:mt-4">
            {[...Array(1)].map((_, index) => (
              <React.Fragment key={index}>
                <i className="bx bxl-html5 text-3xl lg:text-4xl text-orange-700"></i>
                <i className="bx bxl-css3 text-3xl lg:text-4xl text-blue-600"></i>
                <i className="bx bxl-javascript text-3xl lg:text-4xl text-yellow-500"></i>
                <i className="bx bxl-php text-3xl lg:text-4xl text-blue-500"></i>
                <i className="bx bxl-python text-3xl lg:text-4xl text-blue-500"></i>
                <i className="bx bxl-nodejs text-3xl lg:text-4xl text-green-500"></i>
                <i className="bx bxl-react text-3xl lg:text-4xl text-blue-500"></i>
              </React.Fragment>
            ))}
          </div>

          <div className="flex animate-scroll-right space-x-3 lg:space-x-6 mt-2 lg:mt-4">
            {[...Array(1)].map((_, index) => (
              <React.Fragment key={index}>
                <i className="bx bxl-react text-3xl lg:text-4xl text-blue-500"></i>
                <i className="bx bxl-nodejs text-3xl lg:text-4xl text-green-500"></i>
                <i className="bx bxl-python text-3xl lg:text-4xl text-blue-500"></i>
                <i className="bx bxl-php text-3xl lg:text-4xl text-blue-500"></i>
                <i className="bx bxl-javascript text-3xl lg:text-4xl text-yellow-500"></i>
                <i className="bx bxl-css3 text-3xl lg:text-4xl text-blue-600"></i>
                <i className="bx bxl-html5 text-3xl lg:text-4xl text-orange-700"></i>
              </React.Fragment>
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
