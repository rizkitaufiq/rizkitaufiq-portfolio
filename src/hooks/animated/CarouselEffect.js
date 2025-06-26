import { useState, useEffect } from "react";

const CarouselEffect = (length, intervalTime = 3000) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [length, intervalTime]);

  return { current, setCurrent };
};

export default CarouselEffect;
