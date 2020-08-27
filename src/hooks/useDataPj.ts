import { useEffect, useState } from 'react';
import { getImgClassHero } from '../utils/localFunction';

type Props = {
  stars: number,
  element: string,
  classHero: string,
}

type Return = {
  starsNode: number[];
  srcElement: string;
  srcClassHero: string | undefined;
  color: string | undefined;
}

const useDataPj = (data: Props):{ dataPj: Return } => {
  const [dataPj, setDataPj] = useState<Return>({
    starsNode: [],
    srcElement: '',
    srcClassHero: '',
    color: '',
  });
  useEffect(() => {
    let type: string,
      className: string | undefined,
      color: string | undefined;
    const stars = [];
    for (let i = 0; i < data.stars; i++) {
      stars.push(i);
    }

    type = data.element.toLowerCase();
    if (data.classHero) {
      className = getImgClassHero(data.classHero.toLowerCase());
    }
    switch (type) {
      case 'azul hielo':
        type = './hielo.png';
        color = 'blue';
        break;
      case 'violeta oscuro':
        type = './oscuro.png';
        color = 'purple';
        break;
      case 'verde naturaleza':
        type = './naturaleza.png';
        color = 'green';
        break;
      case 'rojo fuego':
        type = './fuego.png';
        color = 'red';
        break;
      case 'amarillo sagrado':
        type = './sagrado.png';
        color = 'yellow';
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
