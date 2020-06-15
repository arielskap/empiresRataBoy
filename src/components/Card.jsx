import React, { useEffect, useState } from 'react';
import star from '../assets/static/star.png';
import attackImg from '../assets/static/attack.png';
import defenseImg from '../assets/static/defense.png';
import healthImg from '../assets/static/health.png';
import hielo from '../assets/static/hielo.png';
import naturaleza from '../assets/static/naturaleza.png';
import fuego from '../assets/static/fuego.png';
import oscuro from '../assets/static/oscuro.png';
import sagrado from '../assets/static/sagrado.png';
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

const Card = ({ img, json }) => {
  const [dataPj, setDataPj] = useState({
    starsNode: [],
    srcElement: '',
    srcClassHero: '',
    color: '',
  });
  useEffect(() => {
    let type,
      className,
      color;
    const stars = [];
    for (let i = 0; i < json.stars; i++) {
      stars.push(i);
    }
    type = json.element.toLowerCase();
    className = json.classHero.toLowerCase();
    switch (type) {
      case 'azul hielo':
        type = hielo;
        color = 'blue';
        break;
      case 'violeta oscuro':
        type = oscuro;
        color = 'purple';
        break;
      case 'verde naturaleza':
        type = naturaleza;
        color = 'green';
        break;
      case 'rojo fuego':
        type = fuego;
        color = 'red';
        break;
      case 'amarillo sagrado':
        type = sagrado;
        color = 'yellow';
        break;
      default:
        break;
    }
    switch (className) {
      case 'barbaro':
        className = barbarian;
        break;
      case 'clerico':
        className = cleric;
        break;
      case 'druida':
        className = druid;
        break;
      case 'luchador':
        className = fighter;
        break;
      case 'monje':
        className = monk;
        break;
      case 'paladin':
        className = paladin;
        break;
      case 'guardabosques':
        className = ranger;
        break;
      case 'rebelde':
        className = rogue;
        break;
      case 'hechizero':
        className = sorcer;
        break;
      case 'brujo':
        className = wizard;
        break;
      default:
        break;
    }
    setDataPj({
      starsNode: stars,
      srcElement: type,
      srcClassHero: className,
      color,
    });
  }, []);

  return (
    <div className={`Card max-w-sm rounded-lg shadow-lg text-white pt-5 pb-6 px-4 bg-${dataPj.color}-700 border-2 border-${dataPj.color}-500`}>
      <div className='div-name absolute bg-yellow-700 border-t-4 border-b-4 border-yellow-600 center-horizontally-absolute max-w-85'>
        <div className='relative'>
          <img className='object-contain w-10 absolute img-element' src={dataPj.srcElement} alt={json.element} />
        </div>
        <h2 className='text-center text-lg font-bold px-12 truncate'>{json.name}</h2>
      </div>
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
        <div className={`px-4 py-2 grid grid-cols-3 gap-4 rounded-t-lg bg-${dataPj.color}-800 border-b border-${dataPj.color}-600`}>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={attackImg} alt='Attack' />
            <p className='text-center text-2xl font-bold text-border-black'>{json.attack}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={defenseImg} alt='Defense' />
            <p className='text-center text-2xl font-bold text-border-black'>{json.defense}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={healthImg} alt='Health' />
            <p className='text-center text-2xl font-bold text-border-black'>{json.health}</p>
          </div>
        </div>
        <div className={`px-4 py-2 space-y-4 bg-${dataPj.color}-900 rounded-b-lg`}>
          <div>
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
      <div className='absolute button-tutorial inset-x-0 flex justify-center'>
        <a href={json.video} target='_blank' rel='noopener noreferrer'>
          <div className='text-center lg:no-underline mt-4 bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-black rounded'>
            Tutorial
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
