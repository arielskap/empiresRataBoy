import React, { useState } from 'react';
import Modal from './Modal';
import { animateCSS, changeDevice, vibrar } from '../funciones';

const CardGuias = ({ json }) => {
  const [open, setOpen] = useState(false);
  const [imgDevice, setImgDevice] = useState('mobile');

  const handleOpenModal = () => {
    console.log(json.mobile);
    const device = changeDevice();
    if (device !== imgDevice) {
      if (device === 'mobile') {
        setImgDevice('mobile');
      } else {
        setImgDevice('desktop');
      }
    }

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
      <button type='button' className='relative transform duration-500 hover:scale-110 border-transparent border-2 hover:border-pink-500 px-2' onClick={() => { vibrar();handleOpenModal(); }}>
        {json.name}
      </button>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <img className='object-contain w-full h-full' src={imgDevice === 'mobile' ? json.mobile : json.pc} alt={json.name} />
      </Modal>
    </>
  );
};

export default CardGuias;

