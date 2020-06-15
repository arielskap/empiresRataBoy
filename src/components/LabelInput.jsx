import React from 'react';

const LabelInput = ({ children, value, placeholder, handleChange }) => {
  return (
    <label htmlFor={children}>
      <span className='font-bold capitalize'>{`${children} `}</span>
      <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full max-w-xs py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        value={value}
        onChange={handleChange}
        type='text'
        name={children}
        id={children}
        placeholder={placeholder}
        tabIndex='0'
      />
    </label>
  );
};

export default LabelInput;
