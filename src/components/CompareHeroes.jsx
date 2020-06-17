import React, { useState, useEffect } from 'react';
import ButtonModal from './ButtonModal';
import ModalCompareHeroes from './ModalCompareHeroes';
import black from '../assets/static/black.png';
import { changeDevice, viewportOrientation } from '../funciones';
import Modal from './Modal';
import girar from '../assets/static/girar.jpg';

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
          img: black,
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
                    <h3 className='text-center text-lg font-bold absolute bottom-0 text-center w-full bg-black-transparent truncate'>{alt}</h3>
                  </ButtonModal>
                  {alt && (
                    <button className='Modal__close-button leading-none z-10 text-white text-border-black bg-red-800 hover:bg-red-600 shadow border border-black px-2 py-1 rounded-lg font-bold absolute' type='button' onClick={() => removeCompare(id)}>
                      x
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {readyCompare &&
          <button type='button' className='col-span-3 rounded border-2 border-pink-600 py-2 mx-4 font-bold text-lg transform duration-200 hover:scale-110 hover:bg-pink-600 hover:text-white' onClick={handleCompare}>Comparar</button>}
        </div>
      </div>
      <Modal data={{ open: openError, setOpen: setOpenError }}>
        <div>
          <img className='object-contain w-64' src={girar} alt='Landscape' />
          <p className='text-center font-bold text-lg py-4'>Debe Girar la Pantalla</p>
        </div>
      </Modal>
      <ModalCompareHeroes dataCards={state.compareHeroes} data={{ open, setOpen }} />
    </>
  );
};

export default CompareHeroes;
