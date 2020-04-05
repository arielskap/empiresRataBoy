import React, { useState, useEffect } from 'react';
import json from '../json/alianzas.json';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';
import CardAlianza from '../components/CardAlianza';

const Alianzas = () => {
  const [pageLoad, setPageLoad] = useState(true);

  useEffect(() => {
    animateCSS('.BlackBackground', 'fadeOut faster', () => {
      setPageLoad(false);
    });
    animateCSS('.LoaderColors', 'fadeOut faster');
  }, []);

  return (
    <>
      <div className='animated fadeIn faster'>
        <h2 className='text-center mb-4 text-2xl font-bold'>Alianzas</h2>
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 mx-2 lg:mx-6'>
          {json.map((alianza) => {
            const { id } = alianza;
            return (
              <div key={id}>
                <CardAlianza json={alianza} />
              </div>
            );
          })}
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

export default Alianzas;
