import React from 'react';

const FilterButton = ({ children, handleOnClick, img, number, identity }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <button type='button' onClick={() => { handleOnClick(number); }}>
        <img className={`${identity} ${identity}-${number} object-contain filter-gray w-8 h-full`} src={img} alt={children} />
      </button>
    </div>
  );
};

export default FilterButton;
