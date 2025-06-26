import PropTypes from "prop-types";

const Documentation = (props) => {
  const { id } = props;
  return (
    <section
      id={id}
      className="w-full text-white p-2 lg:p-10 mt-10 lg:mt-20 font-bold text-[12px] lg:text-[15px]"
    >
      <div className="mb-2 lg:mb-4 px-4 lg:px-28">
        <h1 className="text-primary mb-2 lg:mb-4 text-center text-[15px] lg:text-[30px]">
          Documentation
        </h1>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <img
              src="images/homepage/content/doc/ANBK-1.jpeg"
              alt="image"
              className=" w-[50vh] object-cover opacity-100 hover:opacity-60 transition-opacity duration-300 rounded-lg"
            />

            <div className="bg-primary px-2 lg:px-4 absolute top-0 right-1 text-white rounded-bl-lg">
              ANBK
            </div>
          </div>

          <img
            src="images/homepage/content/doc/Rapat-3.jpeg"
            alt="image"
            className="w-[50vh] object-cover opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg"
          />

          <img
            src="images/homepage/content/doc/Rapat-1.jpeg"
            alt="image"
            className="w-[50vh] object-cover opacity-100 hover:opacity-60 transition-opacity duration-300 rounded-lg"
          />

          <img
            src="images/homepage/content/doc/ANBK-2.jpeg"
            alt="image"
            className="w-[50vh] object-cover opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg"
          />

          <div className="relative">
            <img
              src="images/homepage/content/doc/KBM-1.jpeg"
              alt="image"
              className="w-[50vh] object-cover opacity-100 hover:opacity-60 transition-opacity duration-300 rounded-lg"
            />

            <div className="bg-primary px-2 lg:px-4 absolute top-0 right-1 text-white rounded-bl-lg">
              KBM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Documentation.propTypes = { id: PropTypes.string };

export default Documentation;
