import PropTypes from "prop-types";

const BoxContent = (props) => {
  const { boxColor, textColor, title, src, children } = props;
  return (
    <div
      className={`${boxColor} ${textColor} relative w-[140px] lg:w-[300px] w-1/7 rounded-[15px]`}
    >
      <div className="absolute w-[40px] lg:w-[100px] h-[20px] lg:h-[45px] bg-primary rounded-br-[15px]">
        <p className="mt-1 lg:mt-2 text-[8px] lg:text-lg text-center font-bold text-white ">
          {title}
        </p>
      </div>

      <div className="flex items-center justify-center lg:p-2">
        <img
          src={src}
          alt="image"
          className="w-[120px] lg:w-[240px] h-[150px] lg:h-[300px] rounded-[15px] mt-3 lg:mt-6"
        />
      </div>

      {children}
    </div>
  );
};

BoxContent.propTypes = {
  boxColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,

  children: PropTypes.node,
};

export default BoxContent;
