import PropTypes from "prop-types";

const Timeline = (props) => {
  const {
    children,
    position,
    textDatePosition,
    textDate,
    textHeader,
    textContent,
  } = props;
  return (
    <li>
      {children}
      <div
        className={`${position} timeline-box text-[8px] lg:text-[15px] cursor-pointer hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.8)] transition-all duration-300`}
      >
        <p
          className={`${textDatePosition} text-[6px] lg:text-[10px] text-secondary`}
        >
          {textDate}
        </p>
        <h1 className="text-secondary">{textHeader}</h1>
        <p className="text-left text-[8px] lg:text-[14px] text-secondary">
          {textContent}
        </p>
      </div>
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
      <hr className="bg-primary" />
    </li>
  );
};

Timeline.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  textDatePosition: PropTypes.string,
  textDate: PropTypes.string,
  textHeader: PropTypes.string,
  textContent: PropTypes.string,
};

export default Timeline;
