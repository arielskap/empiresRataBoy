import React from 'react';
import json from '../json/guias.json';
import CardGuias from '../components/CardGuias';

const Guias = () => {
  return (
    <div className='animate fadeIn faster mx-4 lg:grid lg:grid-cols-2'>
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div className='py-4'>
          <h1 className='text-xl font-bold text-center'>¡Todas mis Guías!</h1>
        </div>
        <div className='w-full flex items-center justify-center'>
          <a target='_blank' rel='noopener noreferrer' href='https://drive.google.com/drive/folders/1DqpgV7wugGVlbo5TvehZ7YrBG5NpMPEA' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Guías Drive</a>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-bold'>Listado de Guías</h2>
        <ul className='border-2 border-pink-500 flex flex-col items-center mt-2 list-decimal sm:grid sm:grid-cols-2 sm:list-inside p-2'>
          {json.map((guia) => {
            const { id } = guia;
            return (
              <li className='text-center' key={id}>
                <CardGuias json={guia} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Guias;
