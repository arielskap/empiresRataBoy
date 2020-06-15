import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import Portal from './Portal';
import Card from './Card';
import { useFade, useSlide } from '../animations';
import '../assets/styles/modal.css';

const ModalHero = ({ dataCard, data, compareHeroes }) => {

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
    if (e.target === document.querySelector('.Modal__bg')) {
      closeModal();
    }
  };

  const addCompareHeroes = () => {
    const { compareHeroes: compare, setCompareHeroes } = compareHeroes;
    let newDataCard = dataCard;
    let flag = 0;
    const newCompare = compare.map((hero) => {
      const { id, alt } = hero;
      if (flag === 0 && !alt) {
        newDataCard = { ...newDataCard, id };
        flag = 1;
        return newDataCard;
      }
      return hero;
    });
    setCompareHeroes(newCompare);
  };

  useEffect(() => {
    if (document.querySelector('.Modal')) {
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      document.querySelector('.Modal__bg').addEventListener('click', (e) => {
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
      <animated.div className='Modal z-30 overflow-y-auto overflow-x-hidden' style={fade}>
        <div className='Modal__bg w-full min-h-screen py-6 flex justify-center items-center flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-3'>
          <div className='col-start-2 flex justify-center'>
            <animated.div className='Modal__container rounded-lg' style={slide}>
              <button className='Modal__close-button leading-none z-10 text-white text-border-black bg-red-800 hover:bg-red-600 shadow border border-black px-2 py-1 rounded-lg font-bold text-xl absolute' type='button' onClick={() => { closeModal(); }}>
                x
              </button>
              <Card img={dataCard.img} json={dataCard.json} />
            </animated.div>
          </div>
          <div className='flex justify-center'>
            <button type='button' className='rounded px-4 py-2 border-4 border-purple-600 text-white bg-purple-700 hover:bg-purple-600 font-bold md:text-2xl' onClick={addCompareHeroes}>Comparar</button>
          </div>
        </div>
      </animated.div>
    </Portal>
  );
};

export default ModalHero;
