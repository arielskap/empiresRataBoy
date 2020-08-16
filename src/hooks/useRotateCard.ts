import { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

const useRotateCard = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [rotateY, setRotateY] = useSpring(() => ({ transform: 'rotateY(0deg)' }));

  useEffect(() => {
    const elementModal = document.querySelector('.Modal');
    if (isRotate) {
      (elementModal as HTMLInputElement).style.overflowY = 'hidden';
      setRotateY({ config: { duration: 500 },
        transform: 'rotateY(180deg)',
        onRest: () => {
          (elementModal as HTMLInputElement).style.overflowY = 'auto';
        } });
    } else {
      (elementModal as HTMLInputElement).style.overflowY = 'hidden';
      setRotateY({ config: { duration: 500 },
        transform: 'rotateY(0deg)',
        onRest: () => {
          (elementModal as HTMLInputElement).style.overflowY = 'auto';
        } });
    }
  }, [isRotate])

  return { isRotate, setIsRotate, rotateY, setRotateY };
}

export default useRotateCard;
