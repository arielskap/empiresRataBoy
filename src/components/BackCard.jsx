import React from 'react';
import TopCard from './TopCard';
import { useDataPj } from '../hooks';
import ButtonTutorial from './ButtonTutorial';

const BackCard = ({ json }) => {
  const { dataPj } = useDataPj({ stars: json.stars, element: json.element, classHero: json.classHero });
  return (
    <div>
      <TopCard data={{ src: dataPj.srcElement, alt: json.element, name: json.name }} />
      <ButtonTutorial video={json.video} />
    </div>
  );
};

export default BackCard;
