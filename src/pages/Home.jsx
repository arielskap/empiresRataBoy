import React, { useEffect, useState } from 'react';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';
import '../assets/styles/home.css';
import '../assets/styles/hr.css';
import redAlianzas from '../assets/static/redAlianzas2.png';
import redDeAlianzas from '../assets/static/redDeAlianzas.png';
import '../twitch';
import json from '../json/home.json';

const Home = () => {
  const [pageLoad, setPageLoad] = useState(true);
  useEffect(() => {
    const twitch = new Twitch.Embed('twitch-embed', {
      theme: 'dark',
      width: '100%',
      height: 480,
      channel: 'ratabboypda',
    });
    const iframe = document.querySelector('iframe');
    iframe.setAttribute('allow', 'fullscreen'); // must be 1st
    iframe.setAttribute('allowFullScreen', '');
    animateCSS('.BlackBackground', 'fadeOut faster', () => {
      setPageLoad(false);
    });
    animateCSS('.LoaderColors', 'fadeOut faster');
  }, []);
  return (
    <>
      <div className='animated fadeIn faster'>
        <div className='lg:hidden'>
          <img className='object-contain w-full max-h-screen' src={redAlianzas} alt='Red Alianzas' />
        </div>
        <div className='hidden lg:flex lg:items-center lg:justify-center lg:my-6'>
          <img className='object-contain lg:max-w-4xl xl:max-w-6xl' src={redDeAlianzas} alt='Red de Alianzas' />
        </div>
        <div className='px-8'>
          <hr className='my-8 lg:hidden' />
          <div>
            <h2 className='text-center mb-4 text-xl lg:text-2xl font-bold'>¡Ver Directo Ahora!</h2>
            <div className='flex justify-center items-center'>
              <div id='twitch-embed' className='max-w-6xl w-full' />
            </div>
          </div>
          <hr className='my-8' />
          <div>
            <h2 className='text-center mb-4 text-xl lg:text-2xl font-bold'>¡Listas de Reproducción!</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              {json.map((video) => {
                const { id, name, link } = video;
                return (
                  <div className='mt-2 lg:mt-0' key={id}>
                    <h3 className='text-center mb-2 text-lg font-bold underline'>{name}</h3>
                    <iframe className='w-full lg:h-64' title={name} src={link} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {pageLoad && (
        <BlackBackground>
          <LoaderColors />
        </BlackBackground>
      )}
    </>
  );
};

export default Home;
