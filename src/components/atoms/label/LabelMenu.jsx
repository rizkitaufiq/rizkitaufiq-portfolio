import PropTypes from "prop-types";

const LabelMenu = (props) => {
  const {
    textColor,
    textLeft,
    textCenter,
    textRight,
    bgLeft,
    bgCenter,
    bgRight,
  } = props;
  return (
    <div
      className={`${textColor} gap-1 flex justify-center items-center w-full px-3 lg:px-7 text-[7px] lg:text-[16px] mb-1`}
    >
      <label className={`${bgLeft} flex justify-start w-auto lg:w-auto px-2`}>
        <p className="font-bold">{textLeft}</p>
      </label>

      <label className={`${bgCenter} flex justify-center w-[15%] lg:w-[20%]`}>
        <p className="font-bold">{textCenter}</p>
      </label>

      <label className={`${bgRight} flex justify-center w-[15%] lg:w-[20%]`}>
        <p className="font-bold">{textRight}</p>
      </label>
    </div>
  );
};

LabelMenu.propTypes = {
  textColor: PropTypes.string.isRequired,
  bgLeft: PropTypes.string,
  bgCenter: PropTypes.string,
  bgRight: PropTypes.string,
  textLeft: PropTypes.string,
  textCenter: PropTypes.string.isRequired,
  textRight: PropTypes.string.isRequired,
};

export default LabelMenu;
