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
    <footer className='py-3 mt-16'>
      <div className='container px-2 mx-auto'>
        <div className='flex flex-col items-center justify-center mt-2 mb-4'>
          {buttonTranslate && (
            <button id='buttonTranslate' type='button' onClick={translatePage} className='px-4 py-2 font-bold text-white bg-indigo-500 border-b-4 border-indigo-700 rounded button_translate hover:bg-indigo-400 hover:border-indigo-500'>Translate Page</button>
          )}
          <div id='google_translate_element' className='hidden w-full p-2 border border-pink-500 rounded' />
        </div>
        <div className='border-t-2 border-pink-500 lg:border-0'>
          <div>
            <div className='flex items-center justify-center lg:hidden'>
              <img className='object-contain max-w-sm lg:max-w-lg' src='./firma.png' alt='firma' />
            </div>
            <div className='lg:flex lg:justify-center'>
              <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
                <h3 className='mb-4 text-xl font-bold text-center'>¡Seguime en mis redes!</h3>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='flex justify-center'>
                    <a href='https://www.facebook.com/groups/alianzaratabboy' target='_blank' rel='noopener noreferrer'>
                      <img className='object-contain w-10 h-full' src='./facebook.svg' alt='' />
                    </a>
                  </div>
                  <div className='flex justify-center'>
                    <a href='https://www.twitch.tv/ratabboypda' target='_blank' rel='noopener noreferrer'>
                      <img className='object-contain w-10 h-full' src='./twitch.png' alt='twitch' />
                    </a>
                  </div>
                  <div className='flex justify-center'>
                    <a href='https://www.youtube.com/user/ratabboy' target='_blank' rel='noopener noreferrer'>
                      <img className='object-contain w-10 h-full' src='./youtube.svg' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center mt-4 lg:mt-0 lg:ml-12'>
                <a target='_blank' rel='noopener noreferrer' href='https://forms.gle/qAhte7R124TcLw9X6' className='text-lg font-bold text-blue-600 underline hover:text-blue-500 lg:hover:underline lg:no-underline'>¡Contactame!</a>
              </div>
            </div>
            <div className='flex items-center justify-center mt-4'>
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
            <div className='flex items-center justify-center'>
              <img className='object-contain max-w-sm lg:max-w-lg' src='./firma.png' alt='firma' />
            </div>
          </div>
          <div className='p-4 my-6 border-t-2 border-pink-500 rounded lg:p-2 lg:ml-3'>
            <h3 className='text-lg text-center'>Programador:</h3>
            <p className='font-bold text-center'>Ariel Santiago Villarreal Gutierrez</p>
            <div className='flex items-center justify-center'>
              <a className='flex' href='https://play.google.com/store/apps/developer?id=Marte&hl=es_419' target='_blank' rel='noopener noreferrer'>
                <p className='mr-4 text-sm font-bold text-center'>Marte</p>
                <img className='object-contain w-6 h-6' src='./logoDeveloper.png' alt='Marte Industria' />
              </a>
            </div>
            <div className='mt-4'>
              <h3 className='text-xl font-bold text-center'>Redes</h3>
              <div className='flex justify-center my-4 space-x-12'>
                <div className='flex items-center justify-center'>
                  <a href='https://github.com/arielskap' target='_blank' rel='noopener noreferrer'>
                    <img className='object-contain w-10 h-full' src='./github.svg' alt='Github' />
                  </a>
                </div>
                <div className='flex items-center justify-center'>
                  <a href='https://www.instagram.com/ecstasy_ring/' target='_blank' rel='noopener noreferrer'>
                    <img className='object-contain w-10 h-full' src='./instagram.svg' alt='Instagram' />
                  </a>
                </div>
              </div>
            </div>
            <div className='text-right'>
              <a href='mailto:Arielvillagu@hotmail.com' className='text-xs italic text-gray-600' target='_blank' rel='noopener noreferrer'>Contacto: Arielvillagu@hotmail.com</a>
            </div>
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
