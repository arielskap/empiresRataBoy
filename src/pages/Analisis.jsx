import React from 'react';
import json from '../json/data.json';
import Face from '../components/Face';

const Analisis = () => {
  return (
    <div className='pt-2 mx-2'>
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
  );
};

export default Analisis;
