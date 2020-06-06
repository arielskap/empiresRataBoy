import React, { useEffect } from 'react';
import '../assets/styles/modal.css';
import cross from '../assets/static/cross.svg';
import { vibrar } from '../funciones';
import Portal from './Portal';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  const closeModal = (e) => {
    if (e.target === document.querySelector('.Modal')) {
      onClose();
    }
  };

  useEffect(() => {
    document.querySelector('.Modal').addEventListener('click', (e) => {
      closeModal(e);
    });
  }, []);

  return (
    <Portal>
      <div className='Modal animated fadeIn faster z-30'>
        <div className='Modal__container animated slideInDown faster rounded-lg overflow-auto'>
          <button className='Modal__close-button z-10 m-2' type='button' onClick={() => { vibrar();onClose(); }}>
            <img className='object-contain h-6 w-6' src={cross} alt='close' />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
