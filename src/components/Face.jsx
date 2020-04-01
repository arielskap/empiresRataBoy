import React, { useState } from 'react';
import Modal from './Modal';
import { animateCSS, vibrar } from '../funciones';
import Card from './Card';

const Face = ({ children, img, json }) => {
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
      <button type='button' className='w-full relative' onClick={() => { vibrar();handleOpenModal(); }}>
        <img className='object-contain w-full' src={img} alt={children} />
        <h3 className='text-center text-lg font-bold absolute bottom-0 text-center w-full bg-black-transparent truncate'>{children}</h3>
      </button>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <Card img={img} json={json} onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Face;
