import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { vibrar } from '../funciones';
import logo from '../assets/static/logo.png';
import '../assets/styles/header.css';

const Header = () => {
  const location = useLocation();

  const handleMenu = () => {
    document.querySelector('.header_content').classList.toggle('menuOpen');
  };

  const closeMenu = () => {
    if (document.querySelector('.header_content').classList.contains('menuOpen')) {
      document.querySelector('.header_content').classList.remove('menuOpen');
    }
  };

  const pageActive = (className) => {
    const ALL_LINKS = 4;
    if (!document.querySelector(`.${className}`).classList.contains('font-bold')) {
      for (let i = 1; i <= ALL_LINKS; i++) {
        if (`Link_${i}` === className) {
          document.querySelector(`.${className}`).classList.remove('text-white');
          document.querySelector(`.${className}`).classList.add('font-bold', 'text-pink-500');
        } else {
          if (document.querySelector(`.Link_${i}`).classList.contains('font-bold')) {
            document.querySelector(`.Link_${i}`).classList.add('text-white');
            document.querySelector(`.Link_${i}`).classList.remove('font-bold', 'text-pink-500');
          }
        }
      }
    }
  };

  useEffect(() => {
    switch (location.pathname) {
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
    }
  }, []);

  return (
    <header className='w-full fixed top-0 left-0 lg:static px-6 py-4 z-10 border-b border-black'>
      <nav className='w-full flex items-center justify-between flex-wrap'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Link onClick={() => { vibrar();closeMenu(); }} to='/'>
            <img className='object-contain h-full w-8 mr-4' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button type='button' className='button_header flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white' onClick={() => { vibrar();handleMenu(); }}>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='header_content w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center'>
          <div className='text-sm lg:flex-grow'>
            <Link onClick={() => { vibrar();handleMenu(); pageActive('Link_1'); }} to='/' className='Link_home Link_1 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-500 lg:mr-4 lg:text-lg'>
              Home
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); pageActive('Link_2'); }} to='/guias' className='Link_guias Link_2 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-500 lg:mr-4 lg:text-lg'>
              Guias
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); pageActive('Link_3'); }} to='/alianzas' className='Link_alianzas Link_3 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-500 lg:mr-4 lg:text-lg'>
              Alianzas
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); pageActive('Link_4'); }} to='/analisis' className='Link_analisis Link_4 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-500 lg:text-lg'>
              Analisis de Heroes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
