import PropTypes from "prop-types";

const ButtonIcon = (props) => {
  const { borderColor, hoverBgColor, hoverTextColor, textColor, children } =
    props;
  return (
    <button
      className={`${borderColor} ${hoverBgColor} ${hoverTextColor} ${textColor} flex justify-center items-center p-2 lg:p-4 w-[25px] h-[2px] lg:w-[40px] lg:h-[40px] border-2 rounded-full shadow-[0_0_25px_5px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.8)] transition-all duration-300`}
    >
      {children}
    </button>
  );
};

ButtonIcon.propTypes = {
  borderColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonIcon;
