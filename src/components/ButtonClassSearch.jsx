import React from 'react';

const ButtonClassSearch = ({ image, name, handleClick }) => {
  return (
    <div className='flex justify-center'>
      <button type='button' className='buttonClassSearch border-2 border-transparent transform duration-200 rounded hover:scale-110 hover:border-purple-600 w-8' onClick={(e) => handleClick(e, name)}>
        <img className='object-contain' src={image} alt={name} />
      </button>
    </div>
  );
};

export default ButtonClassSearch;
