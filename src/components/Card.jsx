import React, { useEffect, useState } from 'react';
import { vibrar } from '../funciones';
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

const Card = ({ img, json, onClose }) => {
  const [dataPj, setDataPj] = useState({
    starsNode: [],
    srcElement: '',
    srcClassHero: '',
  });
  useEffect(() => {
    let type,
      className;
    const stars = [];
    for (let i = 0; i < json.stars; i++) {
      stars.push(i);
    }
    type = json.element.toLowerCase();
    className = json.classHero.toLowerCase();
    switch (type) {
      case 'azul hielo':
        type = hielo;
        break;
      case 'violeta oscuro':
        type = oscuro;
        break;
      case 'verde naturaleza':
        type = naturaleza;
        break;
      case 'rojo fuego':
        type = fuego;
        break;
      case 'amarillo sagrado':
        type = sagrado;
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
    });
  }, []);
  return (
    <div className='Card max-w-sm rounded shadow-lg text-black'>
      <div className='relative text-white'>
        <div className='absolute top-0 flex w-full justify-center'>
          <h2 className='text-center bg-black-transparent px-3 py-1 rounded-b text-lg'>{json.name}</h2>
        </div>
        <img className='object-contain w-full' src={img} alt={json.name} />
        <div className='absolute bottom-0 w-full grid grid-cols-3 gap-4 py-2 bg-black-transparent'>
          <div className='flex items-center justify-center'>
            <img className='object-contain w-8 h-full' src={dataPj.srcElement} alt={json.element} />
          </div>
          <div className='flex items-center justify-around'>
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
          <div className='flex justify-center items-start'>
            <div className='relative'>
              <p className='text-center rounded-full px-4 bg-red-900 border-4 border-red-500 text-border-black'>
                {`${json.power}`}
              </p>
              <div className='absolute div_power w-full text-center font-bold text-red-400'>
                <p className='text-border-black text-xs italic'>PODER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-6 py-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={attackImg} alt='Attack' />
            <p className='text-center text-2xl'>{json.attack}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={defenseImg} alt='Defense' />
            <p className='text-center text-2xl'>{json.defense}</p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain w-6 h-full mr-1' src={healthImg} alt='Health' />
            <p className='text-center text-2xl'>{json.health}</p>
          </div>
        </div>
        <div className='mt-4'>
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
            <p>{json.classHero}</p>
          </div>
          <div>
            <p>
              Familia:
              {` ${json.family}`}
            </p>
          </div>
          <div>
            <p>
              Evento:
              {` ${json.event}`}
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-xl mb-2 text-center'>Efectos</h3>
          <ul className='list-inside list-disc'>
            {
              json.effect.map((effect) => {
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
        <a href={json.video} target='_blank' rel='noopener noreferrer'>
          <div className='text-center lg:no-underline mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            Tutorial
          </div>
        </a>
        <div className='mt-2 text-center'>
          <button onClick={() => { vibrar(); onClose(); }} type='button' className='hover:underline text-sm'>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
