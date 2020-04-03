import React from 'react';
import kameHouse from '../assets/static/kameHouse.png';
import vamosPorMas from '../assets/static/vamosPorMas.png';
import torreKarin from '../assets/static/torreKarin.png';
import mjj from '../assets/static/mjj.png';
import capsuleCorp from '../assets/static/capsuleCorp.png';
import fenix from '../assets/static/fenix.png';
import palacioKamisama from '../assets/static/palacioKamisama.png';
import planetaKaio from '../assets/static/planetaKaio.png';
import montañaPaoz from '../assets/static/montañaPaoz.png';

const Alianzas = () => {
  return (
    <div className='animated fadeIn faster'>
      <h2 className='text-center mb-4 text-2xl font-bold'>Alianzas</h2>
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mx-2 lg:mx-6'>
        <button type='button'>
          <div>
            <img className='object-contain' src={kameHouse} alt='Kame House' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={vamosPorMas} alt='Vamos Por Mas' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={torreKarin} alt='Torre Karin' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={mjj} alt='Mjj' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={capsuleCorp} alt='Capsule Corp' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={fenix} alt='Fenix' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={palacioKamisama} alt='Palacio Kamisama' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={planetaKaio} alt='Planeta Kaio' />
          </div>
        </button>
        <button type='button'>
          <div>
            <img className='object-contain' src={montañaPaoz} alt='Planeta Kaio' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Alianzas;
