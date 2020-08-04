import React, { useState, useEffect } from 'react';
import ButtonModal from '../ButtonModal';
import ModalCompareHeroes from './ModalCompareHeroes';
import { changeDevice, viewportOrientation } from '../../funciones';
import Modal from '../Modal';

const CompareHeroes = ({ state }) => {
  const [readyCompare, setReadyCompare] = useState(false);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const removeCompare = (id) => {
    const newCompareHeroes = state.compareHeroes.map((hero) => {
      const { id: idHero } = hero;
      if (id === idHero) {
        return {
          id,
          img: './static/black.png',
          alt: '',
        };
      }
      return hero;
    });
    state.setCompareHeroes(newCompareHeroes);
  };

  const handleCompare = () => {
    if (changeDevice() === 'mobile' && viewportOrientation() === 'portrait') {
      setOpenError(true);
      setOpen(false);
    } else {
      setOpenError(false);
      setOpen(true);
    }
  };

  useEffect(() => {
    return () => {
    };
  }, []);

  useEffect(() => {
    let count = 0;
    state.compareHeroes.forEach((hero) => {
      const { alt } = hero;
      if (alt) {
        count++;
      }
    });
    if (count >= 2) {
      setReadyCompare(true);
    } else {
      setReadyCompare(false);
    }
  }, [state.compareHeroes]);
  return (
    <>
      <div className='pt-4'>
        <h2 className='text-lg font-bold'>Comparación de Heroes:</h2>
        <div className='grid grid-cols-3 gap-4 pt-2'>
          {state.compareHeroes.map((hero) => {
            const { id, img, alt } = hero;
            return (
              <div className='relative flex justify-center' key={`${alt}-${id}`}>
                <div className='max-w-xxs'>
                  <ButtonModal onClick={readyCompare ? handleCompare : () => {}}>
                    <img className='object-contain w-full rounded' src={img} alt={alt} />
                    <h3 className='absolute bottom-0 w-full text-lg font-bold text-center truncate bg-black-transparent'>{alt}</h3>
                  </ButtonModal>
                  {alt && (
                    <button className='absolute z-10 px-2 py-1 font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => removeCompare(id)}>
                      x
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {readyCompare &&
          <button type='button' className='col-span-3 py-2 mx-4 text-lg font-bold duration-200 transform border-2 border-pink-600 rounded hover:scale-110 hover:bg-pink-600 hover:text-white' onClick={handleCompare}>Comparar</button>}
        </div>
      </div>
      <Modal data={{ open: openError, setOpen: setOpenError }}>
        <div>
          <img className='object-contain w-64' src='./static/girar.jpg' alt='Landscape' />
          <p className='py-4 text-lg font-bold text-center'>Debe Girar la Pantalla</p>
        </div>
      </Modal>
      <ModalCompareHeroes dataCards={state.compareHeroes} data={{ open, setOpen }} />
    </>
  );
};

export default CompareHeroes;
