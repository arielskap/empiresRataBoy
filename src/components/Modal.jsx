import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import '../assets/styles/modal.css';
import cross from '../assets/static/cross.svg';
import Portal from './Portal';
import { useFade, useSlide } from '../animations';

const Modal = ({ children, data }) => {

  if (!data.open) {
    return null;
  }

  const { slide, setSlide } = useSlide(0, -500);
  const { fade, setFade } = useFade();

  const closeModal = () => {
    setSlide({ transform: 'translate(0px, -500px)' });
    setFade({
      to: { opacity: 0 },
      onRest: () => {
        if (document.body.classList.contains('overflow-hidden')) {
          document.body.classList.remove('overflow-hidden');
        }
        data.setOpen(false);
      },
    });
  };

  const handleClickBackground = (e) => {
    if (e.target === document.querySelector('.Modal')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (document.querySelector('.Modal')) {
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      document.querySelector('.Modal').addEventListener('click', (e) => {
        handleClickBackground(e);
      });
    }
    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);

  return (
    <Portal>
      <animated.div className='Modal z-30' style={fade}>
        <animated.div className='Modal__container rounded-lg overflow-auto' style={slide}>
          <button className='Modal__close-button z-10 m-2' type='button' onClick={() => { closeModal(); }}>
            <img className='object-contain h-6 w-6' src={cross} alt='close' />
          </button>
          {children}
        </animated.div>
      </animated.div>
    </Portal>
  );
};

export default Modal;
