import React, { useEffect } from 'react';
import '../assets/styles/home.css';
import '../assets/styles/hr.css';
import redAlianzas from '../assets/static/redAlianzas2.png';
import '../twitch';

const Home = () => {
  useEffect(() => {
    const twitch = new Twitch.Embed('twitch-embed', {
      width: '100%',
      height: 480,
      channel: 'ratabboypda',
      // only needed if your site is also embedded on embed.example.com and othersite.example.com
      parent: ['embed.example.com', 'othersite.example.com'],
    });
  }, []);
  return (
    <div>
      <div>
        <div>
          <img className='object-contain w-full max-h-screen' src={redAlianzas} alt='Red Alianzas' />
        </div>
        <div className='px-8'>
          <hr className='my-8' />
          <div>
            <h2 className='text-center mb-4 text-xl font-bold'>¡Ver Directo Ahora!</h2>
            <div id='twitch-embed' />
          </div>
          <hr className='my-8' />
          <div>
            <h2 className='text-center mb-4 text-xl font-bold'>¡Listas de Reproducción!</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div>
                <h3 className='text-center mb-4 text-lg font-bold underline'>Ultimo Video</h3>
                <iframe className='w-full lg:h-64' title='Presentacion Alianzas' src='https://www.youtube.com/embed/FvTvQCiHbao?controls=0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <div>
                <h3 className='text-center mb-4 text-lg font-bold underline'>Otro Video</h3>
                <iframe className='w-full lg:h-64' title='Empires y Puzzles Super Guía' src='https://www.youtube.com/embed/videoseries?list=PLAXmR7GJjquU7xdOCIYuLr_wvNN6P0BkD' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
              <div>
                <h3 className='text-center mb-4 text-lg font-bold underline'>Otro Video</h3>
                <iframe className='w-full lg:h-64' title='Jugando desde 0' src='https://www.youtube.com/embed/videoseries?list=PLAXmR7GJjquUABKJI6q_EL66vsqFO0ToX' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
