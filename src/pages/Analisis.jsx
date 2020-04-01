import React, { useState, useEffect } from 'react';
import json from '../json/data.json';
import Face from '../components/Face';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';

const Analisis = () => {
  const [pageLoad, setPageLoad] = useState(true);
  useEffect(() => {
    animateCSS('.BlackBackground', 'fadeOut faster', () => {
      setPageLoad(false);
    });
    animateCSS('.LoaderColors', 'fadeOut faster');
  }, []);
  return (
    <>
      <div className='pt-2 mx-2 animated fadeIn faster'>
        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8  lg:grid-cols-12 gap-4'>
          {json.map((heroe) => {
            const { id, name, power, element, stars, attack, defense, health, manaSpeed, family, event, effect, video, img } = heroe;
            const classHero = heroe.class;
            const newJson = {
              name,
              power,
              element,
              stars,
              attack,
              defense,
              health,
              manaSpeed,
              classHero,
              family,
              event,
              effect,
              video,
            };
            return (
              <div key={id}>
                <Face img={img} json={newJson}>{name}</Face>
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

export default Analisis;
