import React, { useEffect, useState } from 'react';
import { MessageErrorFetch, Modal, Twitch, LinkH1, SEO } from '../components';
import { animateCSS } from '../funciones';
import { fetchJson } from '../localFunction';
import '../assets/styles/home.css';
import '../assets/styles/hr.css';
import redAlianzas from '../assets/static/redAlianzas2.png';
import redDeAlianzas from '../assets/static/redDeAlianzas.png';

const Index = () => {
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
    if (typeof window !== 'undefined' && document.querySelector('iframe')) {
      const iframe = document.querySelector('iframe');
      iframe.setAttribute('allow', 'fullscreen'); // must be 1st
      iframe.setAttribute('allowFullScreen', '');
    }
    fetchJson('home', '5e8b22e55eb7f3517e29cd78', { setOpen, setErrorResponse, setJson });
  }, []);

  return (
    <>
      <SEO title='Home' />
      <div className='animated fadeIn faster'>
        <div className='md:hidden'>
          <img className='object-contain w-full max-h-screen' src={redAlianzas} alt='Red Alianzas' />
          <LinkH1 />
        </div>
        <div className='hidden md:flex md:flex-col md:items-center md:justify-center md:my-6'>
          <img className='object-contain md:max-w-4xl xl:max-w-6xl' src={redDeAlianzas} alt='Red de Alianzas' />
        </div>
        <div className='px-8'>
          <hr className='my-8 md:hidden' />
          <div>
            <h2 className='text-center mb-4 text-xl md:text-2xl font-bold'>¡Ver Directo Ahora!</h2>
            <div className='flex justify-center items-center'>
              <Twitch theme='dark' width='100%' height={480} channel='ratabboypda' />
            </div>
          </div>
          <hr className='my-8' />
          <div>
            <h2 className='text-center mb-4 text-xl md:text-2xl font-bold'>¡Listas de Reproducción!</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {json && json.map((video) => {
                const { id, name, link } = video;
                return (
                  <div className='mt-2 md:mt-0' key={id}>
                    <h3 className='text-center mb-2 text-md font-bold underline'>{name}</h3>
                    <iframe className='w-full md:h-64 rounded' title={name} src={link} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <MessageErrorFetch errorResponse={errorResponse} handleCloseModal={handleCloseModal}>Traer la Lista de Reproducción</MessageErrorFetch>
      </Modal>
    </>
  );
};

export default Index;
