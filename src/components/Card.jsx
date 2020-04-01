import React from 'react';
import star from '../assets/static/star.png';
import attackImg from '../assets/static/attack.png';
import defenseImg from '../assets/static/defense.png';
import healthImg from '../assets/static/health.png';
import hielo from '../assets/static/hielo.png';
import naturaleza from '../assets/static/naturaleza.png';
import fuego from '../assets/static/fuego.png';
import oscuro from '../assets/static/oscuro.png';
import barbarian from '../assets/static/barbarian.png';
import cleric from '../assets/static/cleric.png';
import druid from '../assets/static/druid.png';
import fighter from '../assets/static/fighter.png';
import monk from '../assets/static/monk.png';
import paladin from '../assets/static/paladin.png';
import ranger from '../assets/static/ranger.png';
import rogue from '../assets/static/rogue.png';
import sorcer from '../assets/static/sorcer.png';
import wizard from '../assets/static/wizard.png';
import '../assets/styles/card.css';

const Card = ({ img, json, onClose }) => {
  const { name, power, element, stars, attack, defense, health, manaSpeed, family, event, classHero, effect, video } = json;
  const starsNode = [];
  let srcElement;
  let srcClassHero;
  for (let i = 0; i < stars; i++) {
    starsNode.push(i);
  }
  switch (element) {
    case 'Azul Hielo':
      srcElement = hielo;
      break;
    case 'Violeta Oscuro':
      srcElement = oscuro;
      break;
    case 'Verde Naturaleza':
      srcElement = naturaleza;
      break;
    case 'Rojo Fuego':
      srcElement = fuego;
      break;
    case 'Amarillo Sagrado':
      srcElement = sagrado;
      break;
    default:
      break;
  }
  switch (classHero) {
    case 'Barbaro':
      srcClassHero = barbarian;
      break;
    case 'Clerico':
      srcClassHero = cleric;
      break;
    case 'Druida':
      srcClassHero = druid;
      break;
    case 'Luchador':
      srcClassHero = fighter;
      break;
    case 'Monje':
      srcClassHero = monk;
      break;
    case 'Paladin':
      srcClassHero = paladin;
      break;
    case 'Guardabosques':
      srcClassHero = ranger;
      break;
    case 'Rebelde':
      srcClassHero = rogue;
      break;
    case 'Hechizero':
      srcClassHero = sorcer;
      break;
    case 'Mago':
      srcClassHero = wizard;
      break;
    default:
      break;
  }
  return (
    <div className='Card max-w-sm rounded shadow-lg text-black'>
      <div className='relative text-white'>
        <div className='absolute top-0 flex w-full justify-center'>
          <h2 className='text-center bg-black-transparent px-3 rounded-b'>{name}</h2>
        </div>
        <img className='object-contain w-full' src={img} alt='Sunset in the mountains' />
        <div className='absolute bottom-0 w-full grid grid-cols-3 gap-4 py-2 bg-black-transparent'>
          <div className='flex items-center justify-center'>
            <img className='object-contain w-8 h-full' src={srcElement} alt={element} />
          </div>
          <div className='flex items-center justify-around'>
            {
              starsNode.map((id) => {
                return (
                  <div key={id}>
                    <img className='object-contain w-6 h-full' src={star} alt='star' />
                  </div>
                );
              })
            }
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-center px-1 text-red-500'>
              Poder:
              {` ${power}`}
            </p>
          </div>
        </div>
      </div>
      <div className='px-6 py-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-4 h-full mr-2' src={attackImg} alt='Attack' />
            <p className='text-center'>{attack}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-4 h-full mr-2' src={defenseImg} alt='Defense' />
            <p className='text-center'>{defense}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-4 h-full mr-2' src={healthImg} alt='Health' />
            <p className='text-center'>{health}</p>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-xl mb-2 text-center'>Informacion Extra</h3>
          <div>
            <p>
              Velocidad de Mana:
              {` ${manaSpeed}`}
            </p>
          </div>
          <div className='flex items-center'>
            <p>Clase:</p>
            <img className='ml-2 mr-1 object-contain h-full w-4' src={srcClassHero} alt={classHero} />
            <p>{classHero}</p>
          </div>
          <div>
            <p>
              Familia:
              {` ${family}`}
            </p>
          </div>
          <div>
            <p>
              Evento:
              {` ${event}`}
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-xl mb-2 text-center'>Effectos</h3>
          <ul className='list-inside list-disc'>
            {
              effect.map((effect) => {
                const { id, data } = effect;
                if (!data) {
                  return null;
                }
                return (
                  <li key={id}>{data}</li>
                );
              })
            }
          </ul>
        </div>
        <a href={video} target='_blank' rel='noopener noreferrer'>
          <div className='text-center lg:no-underline mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            Tutorial
          </div>
        </a>
        <div className='mt-2 text-center'>
          <button onClick={onClose} type='button' className='hover:underline text-sm'>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
