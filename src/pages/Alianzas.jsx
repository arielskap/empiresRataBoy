import React from 'react';
import kameHouse from '../assets/static/kameHouse.png';
import vamosPorMas from '../assets/static/vamosPorMas.png';
import torreKarin from '../assets/static/torreKarin.png';
import mjj from '../assets/static/mjj.png';
import capsuleCorp from '../assets/static/capsuleCorp.png';
import fenix from '../assets/static/fenix.png';
import palacioKamisama from '../assets/static/palacioKamisama.png';
import planetaKaio from '../assets/static/planetaKaio.png';

const Alianzas = () => {
  return (
    <div className='animated fadeIn faster'>
      <h2 className='text-center mb-4 text-xl font-bold'>Alianzas</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div>
          <img className='object-contain' src={kameHouse} alt='Kame House' />
        </div>
        <div>
          <img className='object-contain' src={vamosPorMas} alt='Vamos Por Mas' />
        </div>
        <div>
          <img className='object-contain' src={torreKarin} alt='Torre Karin' />
        </div>
        <div>
          <img className='object-contain' src={mjj} alt='Mjj' />
        </div>
        <div>
          <img className='object-contain' src={capsuleCorp} alt='Capsule Corp' />
        </div>
        <div>
          <img className='object-contain' src={fenix} alt='Fenix' />
        </div>
        <div>
          <img className='object-contain' src={palacioKamisama} alt='Palacio Kamisama' />
        </div>
        <div>
          <img className='object-contain' src={planetaKaio} alt='Planeta Kaio' />
        </div>
      </div>
    </div>
  );
};

export default Alianzas;
