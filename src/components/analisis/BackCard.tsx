import { useEffect, useState } from 'react';
import TopCard from './TopCard';
import { useDataPj } from '../../hooks';
import { ButtonTutorial, ButtonTalent, BackCardHeader } from './index.js';

enum Side {
  Left = 'left',
  Right = 'right'
}

interface props {
  json: any,
  dataTalents: any,
  uniqueId: any
}

interface noSingleTalent {
  nextRowIsOther: boolean,
  side: Side,
  row: number,
  firstFlag: boolean
}

const BackCard: React.FunctionComponent<props> = ({ json, dataTalents, uniqueId }) => {

  const { dataPj } = useDataPj({ stars: json.stars, element: json.element, classHero: json.classHero });
  const [talents, setTalents] = useState([]);
  const [upgrade, setUpgrade] = useState({
    attack: 0,
    defense: 0,
    health: 0,
    specialSkill: 0,
    critic: 0,
    extraHealth: 0,
    mana: 0,
  });

  const noSingleTalent: noSingleTalent = {
    nextRowIsOther: false,
    side: Side.Left,
    row: 0,
    firstFlag: true,
  };

  useEffect(() => {
    dataTalents.some((element: any) => {
      if (element.className.trim() === json.classHero) {
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
            const { id, skill, title, skillData, alone } = talent;
            if (!alone) {
              if (!noSingleTalent.nextRowIsOther) {
                if (noSingleTalent.firstFlag) {
                  noSingleTalent.row++;
                  noSingleTalent.firstFlag = false;
                } else if (noSingleTalent.side === Side.Left) {
                  noSingleTalent.side = Side.Right
                  noSingleTalent.nextRowIsOther = true;
                }
              } else {
                noSingleTalent.side = Side.Left
                noSingleTalent.row++;
                noSingleTalent.nextRowIsOther = false;
              }
            } else {
              if (!noSingleTalent.firstFlag) {
                noSingleTalent.row++;
              }
            }
            return (
              <div key={`button:${title}-${id}`} className={`${alone ? 'col-span-2' : 'col-span-1'} flex justify-center`}>
                <ButtonTalent powerUp={{ upgrade, setUpgrade }} data={{ title, srcClassHero: dataPj.srcClassHero, classHero: json.classHero, index, row: noSingleTalent.row, skill, alone, skillData, side: noSingleTalent.side }} uniqueId={uniqueId} />
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
        `}
      </style>
    </div>
  );
};

export default BackCard;
