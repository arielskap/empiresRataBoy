import React from 'react';
import { animated } from 'react-spring';
import { useFetch } from '../hooks';
import { useFade } from '../animations';
import { MessageErrorFetch, Modal, Twitch, LinkH1, SEO } from '../components';
import '../assets/styles/home.css';
import '../assets/styles/hr.css';
import redAlianzas from '../assets/static/redAlianzas2.png';
import redDeAlianzas from '../assets/static/redDeAlianzas.png';

export default () => {
  const { fade } = useFade();
  const { open, setOpen, errorResponse, data } = useFetch('5efe77127f16b71d48aa39cb');
  console.log(data);
  return (
    <>
      <SEO title='Home' />
      <animated.main style={fade}>
        <div className='md:hidden'>
          <img className='object-contain w-full max-h-screen' src={redAlianzas} alt='Red Alianzas' />
          <LinkH1 />
        </div>
        <div className='hidden md:flex md:flex-col md:items-center md:justify-center md:my-6'>
          <LinkH1 />
          <img className='object-contain md:max-w-4xl xl:max-w-6xl' src={redDeAlianzas} alt='Red de Alianzas' />
        </div>
        <div className='px-8'>
          <hr className='hr-home my-8 md:hidden' />
          <div>
            <h2 className='text-center mb-4 text-xl md:text-2xl font-bold'>¡Ver Directo Ahora!</h2>
            <div className='flex justify-center items-center'>
              <Twitch theme='dark' width='100%' height={480} channel='ratabboypda' />
            </div>
          </div>
          <hr className='hr-home my-8' />
          <div>
            <h2 className='text-center mb-4 text-xl md:text-2xl font-bold'>¡Listas de Reproducción!</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {data && Array.isArray(data) && data.map((video) => {
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
      </animated.main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Reproducción</MessageErrorFetch>
      </Modal>
    </>
  );
};
