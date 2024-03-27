import { useState } from 'react';

export function useCarrousel(initialIndex, totalItems) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return {
    currentIndex,
    next,
    prev,
  };
}