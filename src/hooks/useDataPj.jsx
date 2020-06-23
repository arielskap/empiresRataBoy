import { useEffect, useState } from 'react';
import hielo from '../assets/static/hielo.png';
import naturaleza from '../assets/static/naturaleza.png';
import fuego from '../assets/static/fuego.png';
import oscuro from '../assets/static/oscuro.png';
import sagrado from '../assets/static/sagrado.png';
import barbarian from '../assets/static/barbarian.png';
import cleric from '../assets/static/cleric.png';
import druid from '../assets/static/druid.png';
import fighter from '../assets/static/fighter.png';
import monk from '../assets/static/monk.png';
import paladin from '../assets/static/paladin.png';
import ranger from '../assets/static/ranger.png';
import rogue from '../assets/static/rogue.png';
import sorcer from '../assets/static/sorcer.png';
import wizard from '../assets/static/wizard.png';

const useDataPj = (data) => {
  const [dataPj, setDataPj] = useState({
    starsNode: [],
    srcElement: '',
    srcClassHero: '',
    color: '',
  });
  useEffect(() => {
    let type,
      className,
      color;
    const stars = [];
    for (let i = 0; i < data.stars; i++) {
      stars.push(i);
    }
    type = data.element.toLowerCase();
    className = data.classHero.toLowerCase();
    switch (type) {
      case 'azul hielo':
        type = hielo;
        color = 'blue';
        break;
      case 'violeta oscuro':
        type = oscuro;
        color = 'purple';
        break;
      case 'verde naturaleza':
        type = naturaleza;
        color = 'green';
        break;
      case 'rojo fuego':
        type = fuego;
        color = 'red';
        break;
      case 'amarillo sagrado':
        type = sagrado;
        color = 'yellow';
        break;
      default:
        break;
    }
    switch (className) {
      case 'barbaro':
        className = barbarian;
        break;
      case 'clerigo':
        className = cleric;
        break;
      case 'druida':
        className = druid;
        break;
      case 'luchador':
        className = fighter;
        break;
      case 'monje':
        className = monk;
        break;
      case 'paladin':
        className = paladin;
        break;
      case 'guardabosques':
        className = ranger;
        break;
      case 'rebelde':
        className = rogue;
        break;
      case 'hechicero':
        className = sorcer;
        break;
      case 'brujo':
        className = wizard;
        break;
      default:
        break;
    }
    setDataPj({
      starsNode: stars,
      srcElement: type,
      srcClassHero: className,
      color,
    });
  }, []);
  return { dataPj };
};

export default useDataPj;
