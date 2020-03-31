import React from 'react';
import '../assets/styles/footer.css';
import facebook from '../assets/static/facebook.svg';
import twitch from '../assets/static/twitch.png';
import youtube from '../assets/static/youtube.svg';
import firma from '../assets/static/firma.png';

const Footer = () => {
  return (
    <footer className='p-3 mt-16 '>
      <div>
        <img className='object-contain' src={firma} alt='' />
      </div>
      <div>
        <h3 className='text-center font-bold text-xl mb-4'>¡Seguime en mis redes!</h3>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex justify-center'>
            <a href='https://www.facebook.com/groups/alianzaratabboy' target='_blank' rel='noopener noreferrer'>
              <img className='object-contain w-10 h-full' src={facebook} alt='' />
            </a>
          </div>
          <div className='flex justify-center'>
            <a href='https://www.twitch.tv/ratabboypda' target='_blank' rel='noopener noreferrer'>
              <img className='object-contain w-10 h-full' src={twitch} alt='twitch' />
            </a>
          </div>
          <div className='flex justify-center'>
            <a href='https://www.youtube.com/user/ratabboy' target='_blank' rel='noopener noreferrer'>
              <img className='object-contain w-10 h-full' src={youtube} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='text-center font-bold text-lg underline'>Contacto</h3>
        <form action=''>
          <label className='mb-4' htmlFor='nombre'>
            <p className='block uppercase tracking-wide text-xs font-bold mb-2'>Email:</p>
            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='email' name='nombre' id='nombre' placeholder='rataboy@alianza.com' required />
          </label>
          <label className='mb-4' htmlFor='texto'>
            <p className='block uppercase tracking-wide text-xs font-bold mb-2'>Comentario:</p>
            <textarea className='resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' name='texto' id='texto' cols='30' rows='4' placeholder='Hola...' required />
          </label>
          <div className='text-right'>
            <button className='bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded' type='submit'>¡Enviar!</button>
          </div>
        </form>
      </div>
      <div>
        <img className='object-contain' src={firma} alt='' />
      </div>
      <div className='my-6'>
        <p className='text-gray-600 text-xs italic'>Programador: Ariel Santiago Villarreal Gutierrez</p>
      </div>
    </footer>
  );
};

export default Footer;
