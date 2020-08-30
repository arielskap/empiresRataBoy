import { useEffect } from 'react';
import { animated } from 'react-spring';
import { useSlide } from '../../animations';
import ButtonShowTalents from './ButtonShowTalents';
import useRotateCard from '../../hooks/useRotateCard';
import CompleteCard from './CompleteCard';
import styles from '../../styles/ModalCompareHeroes.module.css'
import { Modal, Analisis } from '../../interfaces';
import ClientOnlyPortal from '../ClientOnlyPortal';

interface Props {
  dataCards: Analisis[];
  data: Modal;
  dataTalents: any;
}

const ModalCompareHeroes: React.FunctionComponent<Props> = ({ dataCards, data, dataTalents }) => {

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
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      setTimeout(() => {
        document.querySelector('.Modal__bg')?.addEventListener('click', (e) => {
          handleClickBackground(e);
        });
      }, 0);
    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);

  return (
    <ClientOnlyPortal selector='#modal'>
      <div className='z-30 overflow-x-hidden overflow-y-auto Modal Modal_active'>
        <div className='flex justify-center mt-2'>
          <ButtonShowTalents setIsRotate={setIsRotate} isRotate={isRotate} />
        </div>
        <div className='flex items-start justify-center w-full min-h-screen py-6 space-x-3 Modal__bg'>
          {dataCards.map((card, index) => {
            const { id, img } = card;
            if (!img) {
              return null;
            }
            return (
              <div key={`${id}-${card.name}`} className='flex justify-center'>
                <animated.div className={`rounded-lg ${styles.Modal__container}`} style={slide}>
                  <CompleteCard img={img} json={card} rotateY={rotateY} dataTalents={dataTalents} closeModal={closeModal} uniqueId={`${card.name}-${index}`} />
                </animated.div>
              </div>
            );
          })}
        </div>
      </div>
    </ClientOnlyPortal>
  )
};

export default ModalCompareHeroes;
