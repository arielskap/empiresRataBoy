import React from 'react';
import { vibrar } from '../funciones';

const ButtonModal = ({ children, onClick }) => {
  return (
    <button type='button' className='w-full flex justify-center items-center relative transform duration-500 hover:scale-110 border-transparent border-2 hover:border-pink-500' onClick={() => { vibrar();onClick(); }}>
      {children}
    </button>
  );
};

export default ButtonModal;
