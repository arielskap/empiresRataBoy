import React from 'react';
import star from '../assets/static/star.png';

const Card = ({ img, json }) => {
  const { name, power, element, stars, attack, defense, health, classHero, effect, video } = json;
  const starsNode = [];
  for (let i = 0; i < stars; i++) {
    starsNode.push(i);
  }
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className='relative'>
        <div className='absolute top-0 flex w-full justify-center'>
          <h2 className='text-center bg-black-transparent px-3'>{name}</h2>
        </div>
        <img className='object-contain w-full' src={img} alt='Sunset in the mountains' />
        <div className='absolute bottom-0 w-full grid grid-cols-3 gap-4 bg-black-transparent'>
          <p className='text-center'>{element}</p>
          <div className='flex items-center justify-around'>
            {
              starsNode.map((id) => {
                return (
                  <div key={id}>
                    <img className='object-contain w-4 h-4' src={star} alt='star' />
                  </div>
                );
              })
            }
          </div>
          <p className='text-center'>{power}</p>
        </div>
      </div>
      <div className='px-6 py-4'>
        <div className='grid grid-cols-3 gap-4'>
          <p className='text-center'>{attack}</p>
          <p className='text-center'>{defense}</p>
          <p className='text-center'>{health}</p>
        </div>
      </div>
      <div className='px-6 py-4 text-center underline lg:no-underline'>
        <a className='lg:hover:underline' href={video} target='_blank' rel='noopener noreferrer'>Tutorial</a>
      </div>
    </div>
  );
};

export default Card;
