import React from 'react';
import { animated } from 'react-spring';
import { useFetch, useSearchHeroes } from '../hooks';
import { useFade } from '../animations';
import { Face, Modal, MessageErrorFetch, SEO } from '../components';
import FilterButton from '../components/FilterButton';
import LabelInput from '../components/LabelInput';
import '../assets/styles/analisis.css';
import star from '../assets/static/star.png';
import fuego from '../assets/static/fuego.png';
import naturaleza from '../assets/static/naturaleza.png';
import oscuro from '../assets/static/oscuro.png';
import sagrado from '../assets/static/sagrado.png';
import hielo from '../assets/static/hielo.png';
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
import ButtonClassSearch from '../components/ButtonClassSearch';

export default () => {
  const { fade } = useFade();
  const { open, setOpen, errorResponse, data } = useFetch('5edebde42f5fd957fda675ee');

  const { data: dataHeroes, setData, jsonSearch, setClean } = useSearchHeroes(data);

  const handleFilterStars = (cantStars) => {
    for (let i = 1; i <= cantStars; i++) {
      if (document.querySelector(`.star-${i}`).classList.contains('filter-gray')) {
        document.querySelector(`.star-${i}`).classList.remove('filter-gray');
      }
    }
    for (let i = cantStars + 1; i <= 5; i++) {
      if (!document.querySelector(`.star-${i}`).classList.contains('filter-gray')) {
        document.querySelector(`.star-${i}`).classList.add('filter-gray');
      }
    }
    setData({
      ...dataHeroes,
      stars: `${cantStars !== 0 ? cantStars : ''}`,
    });
  };

  const handleElement = (element) => {
    let nameElement;
    for (let i = 1; i <= 5; i++) {
      if (i === element) {
        if (document.querySelector(`.element-${element}`).classList.contains('filter-gray')) {
          document.querySelector(`.element-${element}`).classList.remove('filter-gray');
        }
      } else {
        if (!document.querySelector(`.element-${i}`).classList.contains('filter-gray')) {
          document.querySelector(`.element-${i}`).classList.add('filter-gray');
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

  const handleClassSearch = (e, name) => {
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
    <>
      <SEO title='Analisis' />
      <animated.main className='pt-2 mx-2 lg:grid lg:grid-cols-12 lg:gap-2' style={fade}>
        <div className='mb-4 lg:col-span-2'>
          <div className='lg:sticky lg:top-0 lg:w-full lg:top_search'>
            <div className='text-center mb-2'>
              <h1 className='text-xl font-bold'>Analisis de Heroes</h1>
            </div>
            <div className='sm:grid sm:grid-cols-3 sm:gap-2 lg:grid-cols-1'>
              <h2 className='text-lg font-bold'>Buscador:</h2>
              <LabelInput
                value={dataHeroes.query}
                handleChange={(e) => {
                  setData({
                    ...dataHeroes,
                    query: e.target.value,
                  });
                }}
                placeholder='Ameonna'
              >
                Nombre:
              </LabelInput>
              <div className='mt-1 w-full space-y-4'>
                <div className='grid grid-cols-5 gap-1'>
                  <FilterButton handleOnClick={handleFilterStars} number={1} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={2} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={3} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={4} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={5} img={star} identity='star'>star</FilterButton>
                </div>
                <div className='grid grid-cols-5 gap-1'>
                  <FilterButton handleOnClick={handleElement} number={1} img={fuego} identity='element'>Fuego</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={2} img={hielo} identity='element'>Hielo</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={3} img={naturaleza} identity='element'>Naturaleza</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={4} img={oscuro} identity='element'>Oscuro</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={5} img={sagrado} identity='element'>Sagrado</FilterButton>
                </div>
                <div className='grid grid-cols-5 gap-2 border border-pink-400 rounded p-2 lg:p-1 xl:p-2'>
                  <ButtonClassSearch image={barbarian} name='Barbaro' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={cleric} name='Clerigo' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={druid} name='Druida' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={fighter} name='Luchador' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={monk} name='Monje' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={paladin} name='Paladin' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={ranger} name='Guardabosques' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={rogue} name='Rebelde' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={sorcer} name='Hechicero' handleClick={handleClassSearch} />
                  <ButtonClassSearch image={wizard} name='Brujo' handleClick={handleClassSearch} />
                </div>
              </div>
              <div className='mt-2 w-full space-y-2'>
                <div>
                  <LabelInput
                    placeholder='Sakura'
                    value={dataHeroes.family}
                    handleChange={(e) => {
                      setData({
                        ...dataHeroes,
                        family: e.target.value,
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
                    handleChange={(e) => {
                      setData({
                        ...dataHeroes,
                        event: e.target.value,
                      });
                    }}
                  >
                    Evento:
                  </LabelInput>
                </div>
              </div>
              <div className='text-right sm:flex sm:justify-center sm:items-center'>
                <button className='bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-1 px-2 border border-pink-500 hover:border-transparent rounded' type='button' onClick={handleClean}>Limpiar</button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-10'>
          <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:mr-12 xl:grid-cols-10 gap-4'>
            {jsonSearch && jsonSearch.map((heroe) => {
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
      </animated.main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Heroes</MessageErrorFetch>
      </Modal>
    </>
  );
};
