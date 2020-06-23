import React from 'react';
import attackImg from '../assets/static/attack.png';
import defenseImg from '../assets/static/defense.png';
import healthImg from '../assets/static/health.png';

const BackCardHeader = ({ color, json, upgrade }) => {
  return (
    <div className={`pt-4 grid grid-cols-4 rounded-t-lg bg-${color}-800`}>
      <div className='text-white p-4 space-y-2'>
        <div className='flex'>
          <img className='object-contain w-6' src={attackImg} alt='Ataque' />
          <span className='text-bold ml-1'>{json.attack}</span>
        </div>
        <div className='flex'>
          <img className='object-contain w-6' src={defenseImg} alt='Defensa' />
          <span className='text-bold ml-1'>{json.defense}</span>
        </div>
        <div className='flex'>
          <img className='object-contain w-6' src={healthImg} alt='Vida' />
          <span className='text-bold ml-1'>{json.health}</span>
        </div>
      </div>
      <div className='text-white p-4 space-y-2'>
        <div className='flex'>
          <span className='text-bold text-green-600'>
            +
            {upgrade.attack}
          </span>
        </div>
        <div className='flex'>
          <span className='text-bold text-green-600'>
            +
            {upgrade.defense}
          </span>
        </div>
        <div className='flex'>
          <span className='text-bold text-green-600'>
            +
            {upgrade.health}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackCardHeader;
