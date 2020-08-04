import { useEffect, useState } from 'react';
import { getImgClassHero } from '../localFunction';

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
        type = './static/hielo.png';
        color = 'blue';
        break;
      case 'violeta oscuro':
        type = './static/oscuro.png';
        color = 'purple';
        break;
      case 'verde naturaleza':
        type = './static/naturaleza.png';
        color = 'green';
        break;
      case 'rojo fuego':
        type = './static/fuego.png';
        color = 'red';
        break;
      case 'amarillo sagrado':
        type = './static/sagrado.png';
        color = 'yellow';
        break;
      default:
        break;
    }
    className = getImgClassHero(className);
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
