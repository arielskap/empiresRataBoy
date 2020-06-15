import React from 'react';

const ButtonClassSearch = ({ image, name, handleClick }) => {
  return (
    <button type='button' className='buttonClassSearch border-2 border-transparent transform duration-200 rounded hover:scale-110 hover:border-purple-600' onClick={(e) => handleClick(e, name)}>
      <img src={image} alt={name} />
    </button>
  );
};

export default ButtonClassSearch;
