import PropTypes from "prop-types";

const ButtonIcon = (props) => {
  const { borderColor, hoverBgColor, hoverTextColor, textColor, children } =
    props;
  return (
    <button
      className={`${borderColor} ${hoverBgColor} ${hoverTextColor} ${textColor} flex justify-center items-center p-2 lg:p-4 w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] border-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
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
