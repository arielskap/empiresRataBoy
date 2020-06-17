import React from 'react';
import star from '../assets/static/star.png';
import attackImg from '../assets/static/attack.png';
import defenseImg from '../assets/static/defense.png';
import healthImg from '../assets/static/health.png';
import '../assets/styles/card.css';
import TopCard from './TopCard';
import { useDataPj } from '../hooks';
import ButtonTutorial from './ButtonTutorial';

const Card = ({ img, json }) => {
  const { dataPj } = useDataPj({ stars: json.stars, element: json.element, classHero: json.classHero });
  return (
    <div className={`Card max-w-sm rounded-lg shadow-lg text-white pt-5 pb-6 px-4 bg-${dataPj.color}-700 border-2 border-${dataPj.color}-500`}>
      <TopCard data={{ src: dataPj.srcElement, alt: json.element, name: json.name }} />
      <div className='flex justify-center'>
        <div className='flex items-center justify-center w-2/5 bg-gray-900 border-r-4 border-l-4 border-gray-800 p-1'>
          {
            dataPj.starsNode.map((id) => {
              return (
                <div key={`star-${id}`}>
                  <img className='object-contain w-6 h-full' src={star} alt='star' />
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='relative'>
        <div className='flex justify-center items-start absolute div-power'>
          <div className='relative'>
            <p className='text-center rounded-full px-4 bg-red-900 border-4 border-red-500 text-border-black font-bold text-lg'>
              {`${json.power}`}
            </p>
            <div className='absolute div_power w-full text-center font-bold text-red-400'>
              <p className='text-border-black text-xs italic'>PODER</p>
            </div>
          </div>
        </div>
        <img className='object-contain w-full rounded-lg' src={img} alt={json.name} />
      </div>
      <div className='my-2 shadow-inner rounded-lg'>
        <div className={`px-4 py-2 grid grid-cols-3 gap-4 rounded-t-lg bg-${dataPj.color}-800`}>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={attackImg} alt='Attack' />
            <p className='text-center text-lg lg:text-3xl font-bold text-border-black'>{json.attack}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={defenseImg} alt='Defense' />
            <p className='text-center text-lg lg:text-3xl font-bold text-border-black'>{json.defense}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={healthImg} alt='Health' />
            <p className='text-center text-lg lg:text-3xl font-bold text-border-black'>{json.health}</p>
          </div>
        </div>
        <div className={`px-4 py-2 bg-${dataPj.color}-900 border-t border-b border-${dataPj.color}-600 text-lg`}>
          <h3 className='font-bold text-xl mb-2 text-center'>Informacion Extra</h3>
          <div>
            <p>
              Velocidad de Mana:
              {` ${json.manaSpeed}`}
            </p>
          </div>
          <div className='flex items-center'>
            <p>Clase:</p>
            <img className='ml-2 mr-1 object-contain h-full w-4' src={dataPj.srcClassHero} alt={json.classHero} />
            <p className='capitalize'>{json.classHero}</p>
          </div>
          <div>
            <p>
              Familia:
              <span className='capitalize'>{` ${json.family}`}</span>
            </p>
          </div>
          <div>
            <p>
              Evento:
              <span className='capitalize'>{` ${json.event}`}</span>
            </p>
          </div>
        </div>
        <div className={`px-4 py-2 bg-${dataPj.color}-900 rounded-b-lg`}>
          <div>
            <h3 className='font-bold text-xl mb-2 text-center'>Efectos</h3>
            <ul className='list-inside list-disc'>
              {
                json.effect.map((effect) => {
                  const { id, data } = effect;
                  if (!data) {
                    return null;
                  }
                  return (
                    <li key={id} className='capitalize'>{data}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <ButtonTutorial video={json.video} />
    </div>
  );
};

export default Card;
