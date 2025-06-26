import PropTypes from "prop-types";

const ChatBubble = (props) => {
  const { bgColor, position, textName, textDate, message, status } = props;
  return (
    <div className={`${position} chat text-[8px] lg:text-lg`}>
      <div className="chat-header">
        {textName}
        <time className="opacity-50 ml-2">{textDate}</time>
      </div>
      <div className={`${bgColor} chat-bubble`}>{message}</div>
      <div className="chat-footer opacity-50">{status}</div>
    </div>
  );
};

ChatBubble.propTypes = {
  bgColor: PropTypes.string,
  position: PropTypes.string,
  textName: PropTypes.string,
  textDate: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
};

export default ChatBubble;
