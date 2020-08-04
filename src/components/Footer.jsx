import { useState, useRef } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [buttonTranslate, setButtonTranslate] = useState(true);
  const timeOut = useRef(null);
  const timeOutGoogleOptions = useRef(null);

  const hideGoogleOptions = () => {
    if (document.body.style.top === '40px' && document.querySelector('.skiptranslate')) {
      if (timeOutGoogleOptions.current) {
        window.clearTimeout(timeOutGoogleOptions.current);
      }
      document.body.style.top = '0px';
      document.querySelector('.skiptranslate').classList.add('hidden');
    } else {
      timeOutGoogleOptions.current = setTimeout(() => {
        hideGoogleOptions();
      }, 1500);
    }
  };

  const translatePage = () => {
    document.querySelector('#buttonTranslate').disabled = true;
    if (document.querySelector('#googleScript')) {
      if (timeOut.current) {
        window.clearTimeout(timeOut.current);
      }
      document.querySelector('#google_translate_element').classList.remove('hidden');
      const googleConst = new google.translate.TranslateElement({ pageLanguage: 'es' }, 'google_translate_element');
      setButtonTranslate(false);
      hideGoogleOptions();
    } else {
      timeOut.current = setTimeout(() => {
        translatePage();
      }, 1000);
    }
  };

  return (
    <footer className='p-3 mt-16'>
      <div className='flex flex-col items-center justify-center mt-2 mb-4'>
        {buttonTranslate && (
          <button id='buttonTranslate' type='button' onClick={translatePage} className='px-4 py-2 font-bold text-white bg-indigo-500 border-b-4 border-indigo-700 rounded button_translate hover:bg-indigo-400 hover:border-indigo-500'>Translate Page</button>
        )}
        <div id='google_translate_element' className='hidden w-full p-2 border border-pink-500 rounded' />
      </div>
      <div className='lg:grid lg:grid-cols-2'>
        <div className='lg:border-r lg:border-pink-500'>
          <div className='flex items-center justify-center lg:hidden'>
            <img className='object-contain lg:max-w-lg' src='./static/firma.png' alt='firma' />
          </div>
          <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
              <h3 className='mb-4 text-xl font-bold text-center'>¡Seguime en mis redes!</h3>
              <div className='grid grid-cols-3 gap-4 lg:grid-cols-7'>
                <div className='flex justify-center lg:col-start-3'>
                  <a href='https://www.facebook.com/groups/alianzaratabboy' target='_blank' rel='noopener noreferrer'>
                    <img className='object-contain w-10 h-full' src='./static/facebook.svg' alt='' />
                  </a>
                </div>
                <div className='flex justify-center'>
                  <a href='https://www.twitch.tv/ratabboypda' target='_blank' rel='noopener noreferrer'>
                    <img className='object-contain w-10 h-full' src='./static/twitch.png' alt='twitch' />
                  </a>
                </div>
                <div className='flex justify-center'>
                  <a href='https://www.youtube.com/user/ratabboy' target='_blank' rel='noopener noreferrer'>
                    <img className='object-contain w-10 h-full' src='./static/youtube.svg' alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-4 lg:mt-0'>
              <a target='_blank' rel='noopener noreferrer' href='https://forms.gle/qAhte7R124TcLw9X6' className='text-lg font-bold text-blue-600 underline hover:text-blue-500 lg:hover:underline lg:no-underline'>¡Contactame!</a>
            </div>
            <div className='flex items-center justify-center mt-4 lg:mt-0 lg:col-span-2'>
              <Link href='/donar'>
                <a className='inline-block px-6 py-2 text-lg leading-none text-white border border-white rounded hover:border-gold hover:text-gold'>
                  <span role='img' aria-label='$'>💰</span>
                  {' '}
                  ¡Donar!
                  {' '}
                  <span role='img' aria-label='$'>💰</span>
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img className='object-contain lg:max-w-lg' src='./static/firma.png' alt='firma' />
          </div>
        </div>
        <div className='p-4 my-6 border border-pink-500 rounded lg:p-2 lg:ml-3 lg:border-2'>
          <h3 className='text-lg text-center'>Pagina hecha por:</h3>
          <p className='font-bold text-center'>Ariel Santiago Villarreal Gutierrez</p>
          <div className='flex items-center justify-center'>
            <a className='flex' href='https://play.google.com/store/apps/developer?id=Marte&hl=es_419' target='_blank' rel='noopener noreferrer'>
              <p className='mr-4 text-sm font-bold text-center'>Marte</p>
              <img className='object-contain w-6 h-6' src='./static/logoDeveloper.png' alt='Marte Industria' />
            </a>
          </div>
          <div className='mt-4'>
            <h3 className='text-xl font-bold text-center'>Redes</h3>
            <div className='grid grid-cols-2 my-4 sm:grid-cols-4'>
              <div className='flex items-center justify-center sm:col-start-2'>
                <a href='https://github.com/arielskap' target='_blank' rel='noopener noreferrer'>
                  <img className='object-contain w-10 h-full' src='./static/github.svg' alt='Github' />
                </a>
              </div>
              <div className='flex items-center justify-center'>
                <a href='https://www.instagram.com/ecstasy_ring/' target='_blank' rel='noopener noreferrer'>
                  <img className='object-contain w-10 h-full' src='./static/instagram.svg' alt='Instagram' />
                </a>
              </div>
            </div>
          </div>
          <div className='text-right'>
            <a href='mailto:Arielvillagu@hotmail.com' className='text-xs italic text-gray-600' target='_blank' rel='noopener noreferrer'>Contacto: Arielvillagu@hotmail.com</a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            background-color: #140442;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
