import PropTypes from "prop-types";

const CardBox = (props) => {
  const { bgCard, children, textHeader, textContent, link } = props;
  return (
    <div
      className={`card card-side ${bgCard} image-full w-full max-w-[500px] md:flex-row flex-col`}
    >
      <figure>{children}</figure>
      <div className="card-body">
        <h2 className="card-title text-secondary text-base md:text-lg lg:text-xl">
          {textHeader}
        </h2>
        <p className="text-white text-[8px] md:text-[10px] lg:text-[12px] text-justify">
          {textContent}
        </p>
        <div className="card-actions justify-end">
          <a
            href={link}
            className="btn bg-primary text-white border-none text-xs md:text-sm lg:text-base hover:bg-default hover:text-gray-500 hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.8)] transition-all duration-300"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

CardBox.propTypes = {
  children: PropTypes.node,
  bgCard: PropTypes.string,
  textHeader: PropTypes.string,
  textContent: PropTypes.string,
  link: PropTypes.string,
};

export default CardBox;
