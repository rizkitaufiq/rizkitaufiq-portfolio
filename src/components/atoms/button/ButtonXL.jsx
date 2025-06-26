import PropTypes from "prop-types";

const ButtonXL = (props) => {
  const { bgColor, hoverBgColor, hoverTextColor, textColor, text } = props;
  return (
    <button
      className={`${bgColor} ${hoverBgColor} ${hoverTextColor} ${textColor} text-[8px] lg:text-[14px] w-[100px] lg:w-[180px] h-[28px] lg:h-[45px] rounded-[45px] font-bold`}
    >
      {text}
    </button>
  );
};

ButtonXL.propTypes = {
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonXL;
