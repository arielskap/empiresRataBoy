import React from 'react';

const TopCard = ({ data }) => {
  return (
    <div className='div-name absolute bg-yellow-700 border-t-4 border-b-4 border-yellow-600 center-horizontally-absolute max-w-85'>
      <div className='relative'>
        <img className='object-contain w-10 absolute img-element' src={data.src} alt={data.alt} />
      </div>
      <h2 className='text-center text-lg font-bold px-12 truncate text-white'>{data.name}</h2>
    </div>
  );
};

export default TopCard;
