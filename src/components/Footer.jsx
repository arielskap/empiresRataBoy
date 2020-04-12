import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vibrar } from '../funciones';
import { pageActive } from '../localFunction';
import '../assets/styles/footer.css';
import facebook from '../assets/static/facebook.svg';
import twitch from '../assets/static/twitch.png';
import youtube from '../assets/static/youtube.svg';
import firma from '../assets/static/firma.png';
import github from '../assets/static/github.svg';
import instagram from '../assets/static/instagram.svg';
import logoDeveloper from '../assets/static/logoDeveloper.png';

const Footer = () => {
  const [buttonTranslate, setButtonTranslate] = useState(true);
  const translatePage = () => {
    document.querySelector('#google_translate_element').classList.remove('hidden');
    const googleConst = new google.translate.TranslateElement({ pageLanguage: 'es' }, 'google_translate_element');
    setButtonTranslate(false);
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => {
      document.body.style.top = 'auto';
    }, 1500);
  };
  return (
    <footer className='p-3 mt-16'>
      <div className='flex justify-center items-center flex-col mt-2 mb-4'>
        {buttonTranslate && (
          <button type='button' onClick={translatePage} className='button_translate bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded'>Translate Page</button>
        )}
        <div id='google_translate_element' className='w-full border rounded border-pink-500 p-2 hidden' />
      </div>
      <div className='lg:grid lg:grid-cols-2'>
        <div className='lg:border-r lg:border-pink-500'>
          <div className='flex justify-center items-center lg:hidden'>
            <img className='object-contain lg:max-w-lg' src={firma} alt='firma' />
          </div>
          <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
              <h3 className='text-center font-bold text-xl mb-4'>¡Seguime en mis redes!</h3>
              <div className='grid grid-cols-3 gap-4 lg:grid-cols-7'>
                <div className='flex justify-center lg:col-start-3'>
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
            <div className='mt-4 lg:mt-0 flex justify-center items-center'>
              <a target='_blank' rel='noopener noreferrer' href='https://forms.gle/qAhte7R124TcLw9X6' className='text-lg font-bold text-blue-600 hover:text-blue-500 underline lg:hover:underline lg:no-underline'>¡Contactame!</a>
            </div>
            <div className='flex items-center justify-center mt-4 lg:mt-0 lg:col-span-2'>
              <Link onClick={() => { vibrar(); pageActive('Link_5'); }} to='/donar' className='Link_donar Link_5 inline-block text-lg px-6 py-2 leading-none border rounded text-white border-white hover:border-gold hover:text-gold'>
                <span role='img' aria-label='$'>💰</span>
                {' '}
                ¡Donar!
                {' '}
                <span role='img' aria-label='$'>💰</span>
              </Link>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img className='object-contain lg:max-w-lg' src={firma} alt='firma' />
          </div>
        </div>
        <div className='my-6 border rounded border-pink-500 p-4 lg:p-2 lg:ml-3 lg:border-2'>
          <h3 className='text-center text-lg'>Pagina hecha por:</h3>
          <p className='text-center font-bold'>Ariel Santiago Villarreal Gutierrez</p>
          <div className='flex justify-center items-center'>
            <a className='flex' href='https://play.google.com/store/apps/developer?id=Marte&hl=es_419' target='_blank' rel='noopener noreferrer'>
              <p className='text-center text-sm mr-4 font-bold'>Marte</p>
              <img className='object-contain w-6 h-6' src={logoDeveloper} alt='Marte Industria' />
            </a>
          </div>
          <div className='mt-4'>
            <h3 className='font-bold text-center text-xl'>Redes</h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 my-4'>
              <div className='flex justify-center items-center sm:col-start-2'>
                <a href='https://github.com/arielskap' target='_blank' rel='noopener noreferrer'>
                  <img className='object-contain w-10 h-full' src={github} alt='Github' />
                </a>
              </div>
              <div className='flex justify-center items-center'>
                <a href='https://www.instagram.com/ecstasy_ring/' target='_blank' rel='noopener noreferrer'>
                  <img className='object-contain w-10 h-full' src={instagram} alt='Instagram' />
                </a>
              </div>
            </div>
          </div>
          <div className='text-right'>
            <a href='mailto:Arielvillagu@hotmail.com' className='text-gray-600 text-xs italic' target='_blank' rel='noopener noreferrer'>Contacto: Arielvillagu@hotmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
