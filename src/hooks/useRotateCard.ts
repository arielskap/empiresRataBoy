import { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

const useRotateCard = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [rotateY, setRotateY] = useSpring(() => ({ transform: 'rotateY(0deg)' }));

  useEffect(() => {
    const elementModal = document.querySelector('.Modal') as HTMLElement;
    if (elementModal) {
      if (isRotate) {
        elementModal.style.overflowY = 'hidden';
        setRotateY({ config: { duration: 500 },
          transform: 'rotateY(180deg)',
          onRest: () => {
            elementModal.style.overflowY = 'auto';
          } });
      } else {
        elementModal.style.overflowY = 'hidden';
        setRotateY({ config: { duration: 500 },
          transform: 'rotateY(0deg)',
          onRest: () => {
            elementModal.style.overflowY = 'auto';
          } });
      }
    }
  }, [isRotate])

  return { isRotate, setIsRotate, rotateY, setRotateY };
}

export default useRotateCard;
