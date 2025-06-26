import { useState, useEffect } from "react";

const TypingEffect = (
  messages,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000
) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = setTimeout(
      () => {
        if (!isDeleting && charIndex < messages[index].length) {
          setCurrentMessage((prev) => prev + messages[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentMessage((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === messages[index].length) {
          setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(handleTyping);
  }, [
    charIndex,
    isDeleting,
    index,
    messages,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return currentMessage;
};

export default TypingEffect;
