import React from 'react';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import SEO from '../components/seo';
import muggy from '../assets/static/muggy.png';
import { usePageTransition } from '../hooks';

export default () => {
  const { transitions } = usePageTransition();
  return (
    <>
      <SEO title='404: Not found' />
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.main className='flex flex-col justify-center items-center py-12 space-y-4' key={key} style={props}>
            <div>
              <h1 className='text-center font-bold text-lg'>Pagina No Encontrada</h1>
              <h2 className='text-center font-bold'>Error 404</h2>
            </div>
            <img className='object-contain rounded' src={muggy} alt='muggy not found' />
            <Link className='hover:underline hover:scale-105 font-bold text-lg' to='/'>Volver al Home</Link>
          </animated.main>
        );
      })}
    </>
  );
};
