import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { animated, useSpring } from 'react-spring';
import Card from './Card';
import BackCard from './BackCard';
import { useSlide } from '../../animations';
import styles from '../../../public/styles/ModalHero.module.css'

const ModalHero = ({ dataCard, data, compareHeroes }) => {

  if (!data.open) {
    return null;
  }

  const [isRotate, setIsRotate] = useState(false);
  const { slide, setSlide } = useSlide(0, -500);
  const [rotateY, setRotateY] = useSpring(() => ({ transform: 'rotateY(0deg)' }));

  const closeModal = () => {
    document.querySelector('.Modal').classList.remove('Modal_active')
    setSlide({
      transform: 'translate(0px, -500px)',
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
    closeModal();
  };

  const rotate = () => {
    if (isRotate) {
      setIsRotate(false);
      document.querySelector('.Modal').style.overflowY = 'hidden';
      setRotateY({ config: { duration: 500 },
        transform: 'rotateY(0deg)',
        onRest: () => {
          document.querySelector('.Modal').style.overflowY = 'auto';
        } });
    } else {
      setIsRotate(true);
      document.querySelector('.Modal').style.overflowY = 'hidden';
      setRotateY({ config: { duration: 500 },
        transform: 'rotateY(180deg)',
        onRest: () => {
          document.querySelector('.Modal').style.overflowY = 'auto';
        } });
    }
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

  return ReactDOM.createPortal(
    <div className='z-30 overflow-x-hidden overflow-y-auto Modal Modal_active'>
      <div className='flex flex-col-reverse w-full min-h-screen pb-6 Modal__bg md:py-6 md:space-y-0 md:grid md:grid-cols-3'>
        <div className='items-center justify-end hidden md:flex md:px-0 md:mb-0'>
          {/*<button type='button' className='w-full px-4 py-2 font-bold text-white bg-pink-700 border-4 border-pink-600 rounded md:w-auto hover:bg-pink-600 focus:bg-pink-600 md:text-2xl' onClick={rotate}>{isRotate ? 'Ver Carta' : 'Red de Talentos'}</button>*/}
        </div>
        <div className='flex items-center justify-center col-start-2'>
          <animated.div className={`rounded-lg ${styles.Modal__container} ${styles.cartaBox}`} style={slide}>
            <animated.div className={styles.carta} style={rotateY}>
              <div className={`flex items-center justify-center ${styles.cara}`}>
                <div className='relative'>
                  <button className='absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => { closeModal(); }}>
                      x
                  </button>
                  <Card img={dataCard.img} json={dataCard.json} />
                </div>
              </div>
              <div className={styles.detras}>
                <BackCard json={dataCard.json} />
              </div>
            </animated.div>
          </animated.div>
        </div>
        {/*<div className='flex items-center justify-end px-4 mb-6 md:hidden'>
          <button type='button' className='w-full px-4 py-2 font-bold text-white bg-pink-700 border-4 border-pink-600 rounded md:w-auto hover:bg-pink-600 focus:bg-pink-600 md:text-2xl' onClick={rotate}>{isRotate ? 'Ver Carta' : 'Red de Talentos'}</button>
  </div>*/}
        <div className='flex items-center px-4 mb-6 md:px-0 md:mb-0'>
          <button type='button' className='w-full px-4 py-2 font-bold text-white bg-purple-700 border-4 border-purple-600 rounded md:w-auto hover:bg-purple-600 focus:bg-purple-600 md:text-2xl' onClick={addCompareHeroes}>Comparar</button>
        </div>
      </div>
    </div>
    , document.getElementById('modal'));
};

export default ModalHero;
