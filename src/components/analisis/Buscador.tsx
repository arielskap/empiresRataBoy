import React from 'react';
import LabelInput from './LabelInput'
import FilterButton from './FilterButton'
import ButtonClassSearch from './ButtonClassSearch';

const Buscador = ({ dataHeroes, setData, setClean }: any) => {

  const handleFilterStars = (cantStars: number) :void => {
    const { stars } = dataHeroes;
    let result: string[] | string | number = 0;
    let documentCurrentStar = document.querySelector(`.star-${cantStars}`);
    if (cantStars === 0) {
      for (let i = cantStars + 1; i <= 5; i++) {
        let documentStar = document.querySelector(`.star-${i}`);
        if (documentStar !== null && !documentStar.classList.contains('filter-gray')) {
          documentStar.classList.add('filter-gray');
        }
      }
    } else if (documentCurrentStar !== null) {
      if (documentCurrentStar.classList.contains('filter-gray')) {
        documentCurrentStar.classList.remove('filter-gray');
        if (stars) {
          result = [...stars, `${cantStars}`]
        } else {
          result = `${cantStars}`
        }
      } else {
        documentCurrentStar.classList.add('filter-gray');
        if (stars === `${cantStars}`) {
          result = 0;
        } else {
          result = stars.filter((star: string) => star !== `${cantStars}`);
          if (Array.isArray(result) && result.length === 1 ) {
            result = `${(result)[0]}`;
          }
        }
      }
    }
    setData({
      ...dataHeroes,
      stars: result !== 0 ? result : '',
    });
  };

  const handleElement = (element: number): void => {
    let nameElement;
    let documentElement
    for (let i = 1; i <= 5; i++) {
      if (i === element) {
        documentElement = document.querySelector(`.element-${element}`);
        if (documentElement !== null && documentElement.classList.contains('filter-gray')) {
          documentElement.classList.remove('filter-gray');
        }
      } else {
        documentElement = document.querySelector(`.element-${i}`);
        if (documentElement !== null && !documentElement.classList.contains('filter-gray')) {
          documentElement.classList.add('filter-gray');
        }
      }
    }
    switch (element) {
      case 1:
        nameElement = 'Rojo Fuego';
        break;
      case 2:
        nameElement = 'Azul Hielo';
        break;
      case 3:
        nameElement = 'Verde Naturaleza';
        break;
      case 4:
        nameElement = 'Violeta Oscuro';
        break;
      case 5:
        nameElement = 'Amarillo Sagrado';
        break;
    }
    setData({
      ...dataHeroes,
      element: `${nameElement}`,
    });
  };

  const handleClassSearch = (e: React.FormEvent<HTMLInputElement>, name: string): void => {
    if (!e.currentTarget.classList.contains('buttonClassSearch-active')) {
      document.querySelectorAll('.buttonClassSearch').forEach((button) => {
        if (button.classList.contains('buttonClassSearch-active')) {
          button.classList.remove('buttonClassSearch-active');
        }
      });
      e.currentTarget.classList.add('buttonClassSearch-active');
      setData({
        ...dataHeroes,
        class: name,
      });
    }
  };

  const handleClean = () => {
    Array.from(document.querySelectorAll('.buttonClassSearch')).some((button) => {
      if (button.classList.contains('buttonClassSearch-active')) {
        button.classList.remove('buttonClassSearch-active');
      }
      return button.classList.contains('buttonClassSearch-active');
    });
    setClean(true);
    handleFilterStars(0);
    handleElement(0);
  };

  return (
    <div className='sm:grid sm:grid-cols-3 sm:gap-2 lg:grid-cols-1'>
      <h2 className='flex items-center justify-center text-xl font-bold md:text-lg md:block'>Buscador:</h2>
      <LabelInput
        value={dataHeroes.query}
        handleChange={(e: React.FormEvent<HTMLInputElement>): void => {
          setData({
            ...dataHeroes,
            query: e.currentTarget.value,
          });
        }}
        placeholder='Ameonna'
      >
        Nombre:
      </LabelInput>
      <div className='w-full mt-1 space-y-4'>
        <div className='grid grid-cols-5 gap-1'>
          <FilterButton handleOnClick={handleFilterStars} number={1} img='./static/star.png' identity='star'>star</FilterButton>
          <FilterButton handleOnClick={handleFilterStars} number={2} img='./static/star.png' identity='star'>star</FilterButton>
          <FilterButton handleOnClick={handleFilterStars} number={3} img='./static/star.png' identity='star'>star</FilterButton>
          <FilterButton handleOnClick={handleFilterStars} number={4} img='./static/star.png' identity='star'>star</FilterButton>
          <FilterButton handleOnClick={handleFilterStars} number={5} img='./static/star.png' identity='star'>star</FilterButton>
        </div>
        <div className='grid grid-cols-5 gap-1'>
          <FilterButton handleOnClick={handleElement} number={1} img='./static/fuego.png' identity='element'>Fuego</FilterButton>
          <FilterButton handleOnClick={handleElement} number={2} img='./static/hielo.png' identity='element'>Hielo</FilterButton>
          <FilterButton handleOnClick={handleElement} number={3} img='./static/naturaleza.png' identity='element'>Naturaleza</FilterButton>
          <FilterButton handleOnClick={handleElement} number={4} img='./static/oscuro.png' identity='element'>Oscuro</FilterButton>
          <FilterButton handleOnClick={handleElement} number={5} img='./static/sagrado.png' identity='element'>Sagrado</FilterButton>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-2 p-2 mt-4 border border-pink-400 rounded lg:p-1 xl:p-2'>
        <ButtonClassSearch image='./static/barbarian.png' name='Barbaro' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/cleric.png' name='Clerigo' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/druid.png' name='Druida' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/fighter.png' name='Luchador' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/monk.png' name='Monje' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/paladin.png' name='Paladin' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/ranger.png' name='Guardabosques' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/rogue.png' name='Rebelde' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/sorcer.png' name='Hechicero' handleClick={handleClassSearch} />
        <ButtonClassSearch image='./static/wizard.png' name='Brujo' handleClick={handleClassSearch} />
      </div>
      <div className='w-full mt-2 space-y-2'>
        <div>
          <LabelInput
            placeholder='Sakura'
            value={dataHeroes.family}
            handleChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setData({
                ...dataHeroes,
                family: e.currentTarget.value,
              });
            }}
          >
            Familia:
          </LabelInput>
        </div>
        <div>
          <LabelInput
            placeholder='Segunda Temporada'
            value={dataHeroes.event}
            handleChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setData({
                ...dataHeroes,
                event: e.currentTarget.value,
              });
            }}
          >
            Evento:
          </LabelInput>
        </div>
        <div>
          <LabelInput
            placeholder='El héroe cambia...'
            value={dataHeroes.effect}
            handleChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setData({
                ...dataHeroes,
                effect: e.currentTarget.value,
              });
            }}
          >
            Efecto:
          </LabelInput>
        </div>
      </div>
      <div className='pt-4 text-right sm:flex sm:justify-center sm:items-center'>
        <button className='px-2 py-1 font-semibold text-pink-700 bg-transparent border border-pink-500 rounded hover:bg-pink-500 hover:text-white hover:border-transparent' type='button' onClick={handleClean}>Limpiar</button>
      </div>
    </div>
  )
}

export default Buscador
