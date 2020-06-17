import { useSpring } from 'react-spring';

export const useSlide = (translateX = 0, translateY = 0) => {
  const [slide, setSlide, stopSlide] = useSpring(() => ({
    to: { transform: 'translate(0px, 0px)' },
    from: { transform: `translate(${translateX}px, ${translateY}px)` },
  }));
  return { slide, setSlide, stopSlide };
};

export const useFade = (isReverse = false) => {
  const [fade, setFade, stopFade] = useSpring(() => ({
    to: { opacity: isReverse ? 0 : 1 },
    from: { opacity: isReverse ? 1 : 0 },
  }));
  return { fade, setFade, stopFade };
};

export const useRotateY = (isReverse = false) => {
  const [rotateY, setRotateY, stopRotateY] = useSpring(() => ({
    to: { transform: isReverse ? 'rotateY(0deg)' : 'rotateY(180deg)' },
    from: { transform: isReverse ? 'rotateY(180deg)' : 'rotateY(0deg)' },
  }));
  return { rotateY, setRotateY, stopRotateY };
};
