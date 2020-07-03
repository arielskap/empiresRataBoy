import React from 'react';
import { animated } from 'react-spring';
import { useFetch } from '../hooks';
import { Modal, CardGuias, MessageErrorFetch, SEO } from '../components';
import { useFade } from '../animations';

export default () => {
  const { fade } = useFade();
  const { open, setOpen, errorResponse, data } = useFetch('5efe77017f16b71d48aa39c3');

  return (
    <>
      <SEO title='Guias' />
      <animated.main className='mx-4 lg:grid lg:grid-cols-2' style={fade}>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <div className='py-4'>
            <h1 className='text-xl font-bold text-center'>¡Todas mis Guías!</h1>
          </div>
          <div className='w-full flex items-center justify-center'>
            <a target='_blank' rel='noopener noreferrer' href='https://drive.google.com/drive/folders/1DqpgV7wugGVlbo5TvehZ7YrBG5NpMPEA' className='bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded'>Ir al Drive</a>
          </div>
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-bold'>Listado de Guías</h2>
          <ul className='rounded border-2 border-pink-500 flex flex-col items-center mt-2 sm:grid sm:grid-cols-2 p-2'>
            {data && Array.isArray(data) && data.map((guia) => {
              const { id } = guia;
              return (
                <li className='text-center mb-1' key={id}>
                  <CardGuias json={guia} />
                </li>
              );
            })}
          </ul>
        </div>
      </animated.main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Guias</MessageErrorFetch>
      </Modal>
    </>
  );
};
