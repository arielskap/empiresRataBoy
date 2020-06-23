import React from 'react';
import useNearScreen from '../hooks/useNearScreen';

const ButtonModal = ({ children, ref, onClick = () => {} }) => {
  const [element, show] = useNearScreen();
  return (
    <button ref={element} type='button' className='w-full min-h-75 flex justify-center items-center relative transform duration-200 hover:scale-110 border-transparent border-2 hover:border-pink-500 rounded' onClick={() => { onClick(); }}>
      {show && children}
    </button>
  );
};

export default ButtonModal;
