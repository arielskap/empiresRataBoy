import { useEffect } from 'react';
import { animated } from 'react-spring';
import { useSlide } from '../animations';
import ClientOnlyPortal from './ClientOnlyPortal';

interface Props {
  children: React.ReactNode;
  data: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  },
  bgColor?: string;
}

const Modal: React.FunctionComponent<Props> = ({ children, data, bgColor }) => {

  if (!data.open) {
    return null;
  }

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
        <div className='flex items-center justify-center w-full min-h-screen py-6 Modal__bg'>
          <animated.div className={`rounded-lg border border-black ${bgColor ? `relative ${bgColor}` : 'Modal__container'}`} style={slide}>
            <button className='absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => { closeModal(); }}>
                x
            </button>
            {children}
          </animated.div>
        </div>
      </div>
    </ClientOnlyPortal>
  )
};

export default Modal;
