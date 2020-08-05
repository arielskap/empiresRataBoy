import { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {

  const handleMenu = () => {
    document.querySelector('.header_content').classList.toggle('menuOpen');
  };

  const closeMenu = () => {
    if (document.querySelector('.header_content').classList.contains('menuOpen')) {
      document.querySelector('.header_content').classList.remove('menuOpen');
    }
  };

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      window.addEventListener('scroll', () => {
        closeMenu();
      });
      switch (window.location.pathname) {
        case '/':
          document.querySelector('.Link_home').classList.remove('text-white');
          document.querySelector('.Link_home').classList.add('text-pink-500', 'font-bold');
          break;
        case '/guias':
          document.querySelector('.Link_guias').classList.remove('text-white');
          document.querySelector('.Link_guias').classList.add('text-pink-500', 'font-bold');
          break;
        case '/alianzas':
          document.querySelector('.Link_alianzas').classList.remove('text-white');
          document.querySelector('.Link_alianzas').classList.add('text-pink-500', 'font-bold');
          break;
        case '/analisis':
          document.querySelector('.Link_analisis').classList.remove('text-white');
          document.querySelector('.Link_analisis').classList.add('text-pink-500', 'font-bold');
          break;
        case '/donar':
          document.querySelector('.Link_donar').classList.remove('text-white');
          document.querySelector('.Link_donar').classList.add('text-gold', 'font-bold', 'border-gold');
          document.querySelector('.Link_donar_center').classList.add('hidden');
          break;
      }
    }
  }, []);

  return (
    <header className='sticky top-0 left-0 z-10 w-full px-6 py-4 border-b border-black'>
      <nav className='flex flex-wrap items-center justify-between w-full'>
        <Link href='/'>
          <a>
            <img className='object-contain w-8 h-full mb-0' src='./static/logo.png' alt='logo' />
          </a>
        </Link>
        <Link href='/donar'>
          <a className='inline-block px-4 py-2 text-sm leading-none text-white border border-white rounded Link_donar_center hover:border-gold hover:text-gold lg:hidden'>
            <span role='img' aria-label='$'>💰</span>
            {' '}
            ¡Donar!
            {' '}
            <span role='img' aria-label='$'>💰</span>
          </a>
        </Link>
        <div className='block lg:hidden'>
          <button type='button' className='flex items-center px-3 py-2 text-pink-200 border border-pink-400 rounded button_header hover:text-white hover:border-white' onClick={() => { handleMenu(); }}>
            <svg className='w-3 h-3 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='flex-grow block w-full text-center header_content lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <Link href='/'>
              <a className='block mt-4 text-white Link_home Link_1 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg'>
                Home
              </a>
            </Link>
            <Link href='/guias'>
              <a className='block mt-4 text-white Link_guias Link_2 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg'>
                Guías
              </a>
            </Link>
            <Link href='/alianzas'>
              <a className='block mt-4 text-white Link_alianzas Link_3 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg'>
                Alianzas
              </a>
            </Link>
            <Link href='/analisis'>
              <a className='block mt-4 text-white Link_analisis Link_4 lg:inline-block lg:mt-0 hover:text-pink-500 lg:text-lg'>
                Analisis de Heroes
              </a>
            </Link>
            <Link href='/donar'>
              <a className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded Link_donar Link_5 hover:border-gold hover:text-gold lg:mt-0 lg:ml-4'>
                <span role='img' aria-label='$'>💰</span>
                {' '}
                ¡Donar!
                {' '}
                <span role='img' aria-label='$'>💰</span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          header {
            background-color: rgba(1, 31, 105, 0.99);
          }

          @media screen and (max-width: 1023px) {
            .header_content {
              max-height: 0;
              transition: max-height 0.4s ease-out;
              overflow: hidden;
            }

            .menuOpen {
              max-height: 500px;
              transition: max-height 0.4s ease-in;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
