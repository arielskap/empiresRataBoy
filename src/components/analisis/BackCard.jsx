import { useEffect, useState } from 'react';
import TopCard from './TopCard';
import { useDataPj } from '../../hooks';
import BackCardHeader from './BackCardHeader';
import ButtonTutorial from './ButtonTutorial';
import ButtonTalent from './ButtonTalent';
import jsonLocal from '../../json/talentos.json';

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
    specialSkill: 0,
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
        <BackCardHeader upgrade={upgrade} color={dataPj.color} json={{ attack: json.attack, defense: json.defense, health: json.health, classHero: json.classHero }} />
        <div className='grid flex-grow grid-cols-2 row-gap-8 px-10 pt-6 overflow-y-auto shadow-inner bg-backCard'>
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
      <style jsx>
        {`
          .bg-backCard {
            background: rgb(30, 62, 90);
            background: radial-gradient(circle, rgba(30, 62, 90, 1) 70%, rgba(20, 27, 41, 1) 100%);
          }

          .bg-talent-active {
            background: rgb(161, 212, 220);
            background: radial-gradient(circle, rgba(161, 212, 220, 1) 50%, rgba(29, 127, 180, 1) 70%, rgba(15, 76, 110, 1) 100%);

            @apply border-4 border-yellow-600 rounded-lg;
          }

          .bg-talent {
            background: rgb(215, 215, 215);
            background: radial-gradient(circle, rgba(215, 215, 215, 1) 0%, rgba(75, 75, 75, 1) 100%);

            @apply border-4 rounded-lg border-gray-500;
          }

          .bg-talent:hover {
            @apply bg-talent-active;
          }

          .rotate-n-45 {
            transform: rotate(-45deg);
          }
        `}
      </style>
    </div>
  );
};

export default BackCard;
