import React, { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';
import { animateCSS } from '../funciones';

const CardAlianza = ({ json }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    if (!document.body.classList.contains('overflow-hidden')) {
      document.body.classList.add('overflow-hidden');
    }
    setOpen(true);
  };

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
    });
  };

  return (
    <>
      <ButtonModal onClick={handleOpenModal}>
        <img className='object-contain lg:w-48' src={json.picture} alt={json.name} />
      </ButtonModal>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <div className='max-w-sm rounded shadow-lg text-black'>
          <div className='relative text-white'>
            <div className='absolute top-0 flex w-full justify-center'>
              <h2 className='text-center bg-black-transparent px-3 py-1 rounded-b text-lg'>{json.name}</h2>
            </div>
            <div className='flex justify-center items-center w-full pt-10'>
              <img className='object-contain w-64' src={json.picture} alt={json.name} />
            </div>
          </div>
          <div className='px-6 py-4'>
            <h3 className='font-bold text-xl mb-2 text-center'>Información</h3>
            <div>
              <p>
                <span className='font-bold'>Titanes:</span>
                {` ${json.titans}`}
              </p>
            </div>
            <div className='mt-2'>
              <p>
                <span className='font-bold'>Requerimientos:</span>
                {` ${json.requirements}`}
              </p>
            </div>
            <div className='mt-2'>
              <p>
                <span className='font-bold'>Reseña:</span>
                {` ${json.review}`}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardAlianza;
