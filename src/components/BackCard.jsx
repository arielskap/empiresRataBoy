import React, { useEffect, useState, useRef } from 'react';
import TopCard from './TopCard';
import { useDataPj } from '../hooks';
import BackCardHeader from './BackCardHeader';
import ButtonTutorial from './ButtonTutorial';
import ButtonTalent from './ButtonTalent';
import '../assets/styles/backCard.css';
import jsonLocal from '../json/talentos.json';

const BackCard = ({ json }) => {
  const { dataPj } = useDataPj({ stars: json.stars, element: json.element, classHero: json.classHero });
  const [talents, setTalents] = useState(null);
  const noSingleTalent = {
    count: 0,
    row: 0,
  };
  const [upgrade, setUpgrade] = useState({
    attack: 0,
    defense: 0,
    health: 0,
  });

  useEffect(() => {
    jsonLocal.some((element) => {
      if (element.className === json.classHero) {
        setTalents(element.talents);
      }
      return element.className === json.classHero;
    });
  }, []);

  return (
    <div className='w-full h-full'>
      <TopCard data={{ src: dataPj.srcElement, alt: json.element, name: json.name }} />
      <div className='flex flex-col h-full'>
        <BackCardHeader upgrade={upgrade} color={dataPj.color} json={{ attack: json.attack, defense: json.defense, health: json.health }} />
        <div className='grid grid-cols-2 row-gap-8 bg-backCard overflow-y-auto flex-grow pt-6 px-10 shadow-inner'>
          {talents && talents.map((talent, index) => {
            const { id, skill, title, text, skillData } = talent;
            if (!skill) {
              if (noSingleTalent.count <= 1) {
                noSingleTalent.count++;
              } else {
                noSingleTalent.count = 1;
                noSingleTalent.row++;
              }
            }
            return (
              <div key={`button:${title}-${id}`} className={`${skill && 'col-span-2'} flex justify-center`}>
                <ButtonTalent powerUp={{ upgrade, setUpgrade }} data={{ title, srcClassHero: dataPj.srcClassHero, classHero: json.classHero, index, row: noSingleTalent.row, skill, skillData }} />
              </div>
            );
          })}
        </div>
        <div className={`w-full h-20 rounded-b-lg bg-${dataPj.color}-800`} />
      </div>
      <ButtonTutorial video={json.video} />
    </div>
  );
};

export default BackCard;
