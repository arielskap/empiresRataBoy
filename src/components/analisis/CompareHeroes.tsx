import React, { useState, useEffect } from 'react';
import { ModalCompareHeroes } from './index.js';
import ButtonModal from '../ButtonModal';
import { changeDevice, viewportOrientation, initialStateCompareHeroes } from '../../utils/funciones';
import Modal from '../Modal';
import { compareHeroes } from '../../interfaces/index.js';

interface Props {
  state: compareHeroes;
  dataTalents: any;
}

const CompareHeroes: React.FunctionComponent<Props> = ({ state, dataTalents }) => {
  const [readyCompare, setReadyCompare] = useState(false);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const removeCompare = (id: number) => {
    const newCompareHeroes = state.compareHeroes.map((hero) => {
      const { id: idHero } = hero;
      if (id === idHero) {
        return initialStateCompareHeroes(id)
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
    let count = 0;
    state.compareHeroes.forEach((hero) => {
      const { name } = hero;
      if (name) {
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
        <div className='grid grid-cols-3 gap-3 pt-2'>
          {state.compareHeroes.map((hero) => {
            const { id, img, name } = hero;
            return (
              <div className={`flex items-center justify-center ${!img && 'w-full max-w-xxs mx-auto min-h-75 bg-black rounded'}`} key={`${name}-${id}`}>
                { img && (
                  <div className='relative max-w-xxs'>
                    <>
                      <ButtonModal onClick={readyCompare ? handleCompare : () => { null }}>
                        <img className='object-contain w-full rounded' src={img} alt={name} />
                        <h3 className='absolute bottom-0 w-full text-lg font-bold text-center truncate bg-black-transparent'>{name}</h3>
                      </ButtonModal>
                      <button className='absolute z-10 px-2 py-1 font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => removeCompare(id)}>
                      x
                      </button>
                    </>
                  </div>
                )}
              </div>
            );
          })}
          {readyCompare &&
          <button type='button' className='col-span-3 py-2 mx-4 text-lg font-bold duration-200 transform border-2 border-pink-600 rounded hover:scale-110 hover:bg-pink-600 hover:text-white' onClick={handleCompare}>Comparar</button>}
        </div>
      </div>
      <Modal data={{ open: openError, setOpen: setOpenError }}>
        <div>
          <img className='object-contain w-64' src='/girar.jpg' alt='Landscape' />
          <p className='py-4 text-lg font-bold text-center'>Debe Girar la Pantalla</p>
        </div>
      </Modal>
      <ModalCompareHeroes dataCards={state.compareHeroes} data={{ open, setOpen }} dataTalents={dataTalents} />
    </>
  );
};

export default CompareHeroes;
