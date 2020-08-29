import { useEffect } from 'react';
import { animated } from 'react-spring';
import { useSlide } from '../../animations';
import styles from '../../styles/ModalHero.module.css'
import ButtonShowTalents from './ButtonShowTalents';
import useRotateCard from '../../hooks/useRotateCard';
import { changeDeviceTablet } from '../../utils/funciones';
import CompleteCard from './CompleteCard';
import { Analisis, compareHeroes } from '../../interfaces';
import ClientOnlyPortal from '../ClientOnlyPortal';

interface Props {
  dataCard: Analisis;
  data: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  },
  compareHeroes: compareHeroes;
  dataTalents: any;
}

const ModalHero: React.FunctionComponent<Props> = ({ dataCard, data, compareHeroes, dataTalents }) => {
  if (!data.open) {
    return null;
  }

  const { isRotate, setIsRotate, rotateY } = useRotateCard();
  const { slide, setSlide } = useSlide(0, -500);

  const closeModal = () => {
    document.querySelector('.Modal')?.classList.remove('Modal_active')
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

  const handleClickBackground = (e: Event, index: number) => {
    if (e.target === document.querySelectorAll('.bg-modal')[index]) {
      closeModal();
    }
  };

  const addCompareHeroes = () => {
    const { compareHeroes: compare, setCompareHeroes } = compareHeroes;
    let newDataCard = dataCard;
    let flag = 0;
    const newCompare = compare.map((hero) => {
      const { id, name } = hero;
      if (flag === 0 && !name) {
        newDataCard = { ...newDataCard, id };
        flag = 1;
        return newDataCard;
      }
      return hero;
    });
    setCompareHeroes(newCompare);
    closeModal();
  };

  useEffect(() => {
    if (!document.body.classList.contains('overflow-hidden')) {
      document.body.classList.add('overflow-hidden');
    }
    setTimeout(() => {
      const bgModals = document.querySelectorAll('.bg-modal');
      bgModals.forEach((bg, index) => {
        bg.addEventListener('click', (e) => {
          handleClickBackground(e, index);
        });
      })
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
        <div className='flex flex-col-reverse w-full min-h-screen pb-6 bg-modal md:py-6 md:space-y-0 md:grid md:grid-cols-3'>
          {changeDeviceTablet() === 'tablet' && <ButtonShowTalents setIsRotate={setIsRotate} isRotate={isRotate}  />}
          <div className='flex items-center justify-center col-start-2 bg-modal'>
            <animated.div className={`rounded-lg ${styles.Modal__container} ${styles.cartaBox}`} style={slide}>
              <CompleteCard img={dataCard.img} json={{...dataCard}} dataTalents={dataTalents} rotateY={rotateY} closeModal={closeModal} uniqueId={dataCard.name} />
            </animated.div>
          </div>
          {changeDeviceTablet() === 'mobile' && <ButtonShowTalents setIsRotate={setIsRotate} isRotate={isRotate}  />}
          <div className='flex items-center px-4 mb-6 bg-modal md:px-0 md:mb-0'>
            <button type='button' className='w-full px-4 py-2 font-bold text-white bg-purple-700 border-4 border-purple-600 rounded md:w-auto hover:bg-purple-600 focus:bg-purple-600 md:text-2xl' onClick={addCompareHeroes}>Comparar</button>
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  )
};

export default ModalHero;
