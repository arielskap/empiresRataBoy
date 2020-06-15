import React from 'react';

const ButtonModal = ({ children, onClick = () => {} }) => {
  return (
    <button type='button' className='w-full flex justify-center items-center relative transform duration-200 hover:scale-110 border-transparent border-2 hover:border-pink-500 rounded' onClick={() => { onClick(); }}>
      {children}
    </button>
  );
};

export default ButtonModal;
