import PropTypes from "prop-types";

const ButtonSM = (props) => {
  const { bgColor, hoverBgColor, hoverTextColor, textColor, text } = props;
  return (
    <button
      className={`${bgColor} ${hoverBgColor} ${hoverTextColor} ${textColor} text-[6px] lg:text-[14px] w-[40px] lg:w-[120px] h-[15px] lg:h-[35px] rounded-[45px] font-bold hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.8)] transition-all duration-300`}
    >
      {text}
    </button>
  );
};

ButtonSM.propTypes = {
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonSM;
