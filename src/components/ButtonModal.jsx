import React from 'react';

const ButtonModal = ({ children, onClick = () => {} }) => {
  return (
    <button type='button' className='relative flex items-center justify-center w-full duration-200 transform border-2 border-transparent rounded min-h-75 hover:scale-110 hover:border-pink-500' onClick={() => { onClick(); }}>
      {children}
    </button>
  );
};

export default ButtonModal;
