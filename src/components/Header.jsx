import React from 'react';
import { Link } from 'react-router-dom';
import { vibrar } from '../funciones';
import logo from '../assets/static/logo.png';
import '../assets/styles/header.css';

const Header = () => {

  const handleMenu = () => {
    document.querySelector('.header_content').classList.toggle('menuOpen');
  };

  const closeMenu = () => {
    if (document.querySelector('.header_content').classList.contains('menuOpen')) {
      document.querySelector('.header_content').classList.remove('menuOpen');
    }
  };

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
        <div className='header_content truncate w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center'>
          <div className='text-sm lg:flex-grow'>
            <Link onClick={() => { vibrar();handleMenu(); }} to='/' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black lg:mr-4'>
              Home
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); }} to='/guias' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black lg:mr-4'>
              Guias
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); }} to='/alianzas' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black lg:mr-4'>
              Alianzas
            </Link>
            <Link onClick={() => { vibrar();handleMenu(); }} to='/analisis' className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black'>
              Analisis de Heroes
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
