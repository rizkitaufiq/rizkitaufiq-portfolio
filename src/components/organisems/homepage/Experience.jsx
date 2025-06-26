import PropTypes from "prop-types";
import Timeline from "../../molecules/Timeline";

const Experience = (props) => {
  const { id } = props;
  return (
    <section
      id={id}
      className="w-full text-white p-6 lg:p-10 -mt-10 lg:mt-10 font-bold text-[15px] lg:text-[30px]"
    >
      <div className="flex justify-center items-center lg:mb-10">
        <h1>Experience</h1>
      </div>

      <div className="text-secondary">
        <ul className="timeline timeline-vertical">
          <Timeline
            textDatePosition="text-right"
            textDate="2023 - Present"
            textHeader="Full-Stack Developer | Freelance"
            textContent="Develop website-based applications based on client orders."
            position="timeline-start"
          />

          <Timeline
            textDatePosition="text-right"
            textDate="2021 - 2023"
            textHeader="TIK & Multimedia Teacher | SMP IT DAARUSSAADAH & SMK MURI Tasikmalaya"
            textContent="Preparing lesson plans and teaching students in the classroom."
            position="timeline-end"
          >
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Timeline>

          <Timeline
            textDatePosition="text-left"
            textDate="2021 - 2021"
            textHeader="Staff IT | BAPPEDA Kab Tasikmalaya"
            textContent="Created administrator page for the employee attendance system which contains features for managing.
            Developing the websites using JavaScript, HTML, CSS, PHP and MySQL."
            position="timeline-start"
          >
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Timeline>

          <Timeline
            textDatePosition="text-right"
            textDate="2017 - 2017"
            textHeader="Laboratory Assistant of Operating System | UNSOED"
            textContent="Responsible for conducting hands-on practical sessions, providing impactful teaching, and conducting detailed evaluations regarding operating system."
            position="timeline-end"
          >
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Timeline>
        </ul>
      </div>
    </section>
  );
};

Experience.propTypes = { id: PropTypes.string };

export default Experience;
