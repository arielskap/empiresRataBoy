import React, { useState, useEffect } from 'react';
import CardGuias from '../components/CardGuias';
import Modal from '../components/Modal';
import MessageErrorFetch from '../components/MessageErrorFetch';
import { fetchJson } from '../localFunction';
import { animateCSS } from '../funciones';

const Guias = () => {
  const [json, setJson] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
    });
  };

  useEffect(() => {
    fetchJson('guias', '5e8ba4cfff9c906bdf1d1275', { setOpen, setErrorResponse, setJson });
  }, []);
  return (
    <>
      <div className='animate fadeIn faster mx-4 lg:grid lg:grid-cols-2'>
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
          <ul className='rounded border-2 border-pink-500 flex flex-col items-center mt-2 list-decimal sm:grid sm:grid-cols-2 sm:list-inside p-2'>
            {json && json.map((guia) => {
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
      <Modal isOpen={open} onClose={handleCloseModal}>
        <MessageErrorFetch errorResponse={errorResponse} handleCloseModal={handleCloseModal}>Traer la Lista de Guias</MessageErrorFetch>
      </Modal>
    </>
  );
};

export default Guias;
