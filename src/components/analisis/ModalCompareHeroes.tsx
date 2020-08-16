import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { animated } from 'react-spring';
import { useSlide } from '../../animations';
import ButtonShowTalents from './ButtonShowTalents';
import useRotateCard from '../../hooks/useRotateCard';
import CompleteCard from './CompleteCard';
import styles from '../../../public/styles/ModalCompareHeroes.module.css'

const ModalCompareHeroes = ({ dataCards, data, dataTalents }: any) => {

  if (!data.open) {
    return null;
  }

  const { isRotate, setIsRotate, rotateY } = useRotateCard();
  const { slide, setSlide } = useSlide(0, -500);

  const closeModal = () => {
    const elementModal = document.querySelector('.Modal');
    if (elementModal) {
      elementModal.classList.remove('Modal_active')
    }
    setSlide({
      to: {
        transform: 'translate(0px, -500px)',
      },
      onRest: () => {
        if (document.body.classList.contains('overflow-hidden')) {
          document.body.classList.remove('overflow-hidden');
        }
        data.setOpen(false);
      },
    });
  };

  const handleClickBackground = (e: Event) => {
    if (e.target === document.querySelector('.Modal__bg')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (document.querySelector('.Modal')) {
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      document.querySelector('.Modal__bg')?.addEventListener('click', (e) => {
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
      <div className='flex justify-center mt-2'>
        <ButtonShowTalents setIsRotate={setIsRotate} isRotate={isRotate} />
      </div>
      <div className='flex items-start justify-center w-full min-h-screen py-6 space-x-3 Modal__bg'>
        {dataCards.map((card: any, index:number) => {
          const { id, img, json } = card;
          if (!json) {
            return null;
          }
          return (
            <div key={`${id}-${json.name}`} className='flex justify-center'>
              <animated.div className={`rounded-lg ${styles.Modal__container}`} style={slide}>
                <CompleteCard img={img} json={json} rotateY={rotateY} dataTalents={dataTalents} closeModal={closeModal} uniqueId={`${json.name}-${index}`} />
              </animated.div>
              {/*<animated.div className='rounded-lg Modal__container' style={slide}>
                <button className='absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => { closeModal(); }}>
                  x
                </button>
                <Card img={img} json={json} />
          </animated.div>*/}
            </div>
          );
        })}
      </div>
    </div>
    , (document.getElementById('modal') as HTMLElement));
};

export default ModalCompareHeroes;
