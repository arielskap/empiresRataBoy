import React, { useState, useMemo, useRef, useEffect } from 'react';
import Fuse from 'fuse.js';
import Face from '../components/Face';
import Modal from '../components/Modal';
import MessageErrorFetch from '../components/MessageErrorFetch';
import { fetchJson } from '../localFunction';
import '../assets/styles/analisis.css';
import star from '../assets/static/star.png';
import fuego from '../assets/static/fuego.png';
import naturaleza from '../assets/static/naturaleza.png';
import oscuro from '../assets/static/oscuro.png';
import sagrado from '../assets/static/sagrado.png';
import hielo from '../assets/static/hielo.png';
import FilterButton from '../components/FilterButton';

const useSearchHeroes = (json, options) => {
  const [query, setQuery] = useState('');
  const [stars, setStars] = useState('0');
  const [element, setElement] = useState('');
  const [clean, setClean] = useState(false);
  const [jsonSearch, setJsonSearch] = useState(false);

  const searching = (json, options, key) => {
    const newJson = [];
    const fuse = new Fuse(json, options);
    const search = fuse.search(key);
    search.forEach((element) => {
      newJson.push(element.item);
    });
    return newJson;
  };

  useMemo(() => {
    let newJson;
    if (clean) {
      setQuery('');
      setStars('0');
      setElement('');
      setJsonSearch(json);
      setClean(false);
    } else {
      if (query === '' && stars === '0' && element === '') { //No tiene nada
        setJsonSearch(json);
      } else if (query !== '' && stars === '0' && element === '') { //Tiene texto
        newJson = searching(json, options.query, query);
        setJsonSearch(newJson);
      } else if (query === '' && stars !== '0' && element === '') { //Tiene estrellas
        newJson = searching(json, options.stars, stars);
        setJsonSearch(newJson);
      } else if (query === '' && stars === '0' && element !== '') { //Tiene Elemento
        newJson = searching(json, options.element, element);
        setJsonSearch(newJson);
      } else if (query !== '' && stars !== '0' && element === '') { //Tiene texto y estrellas
        newJson = searching(json, options.stars, stars);
        newJson = searching(newJson, options.query, query);
        setJsonSearch(newJson);
      } else if (query !== '' && stars === '0' && element !== '') { //Tiene texto y elemento
        newJson = searching(json, options.element, element);
        newJson = searching(newJson, options.query, query);
        setJsonSearch(newJson);
      } else if (query === '' && stars !== '0' && element !== '') { //Tiene estrellas y elemento
        newJson = searching(json, options.stars, stars);
        newJson = searching(newJson, options.element, element);
        setJsonSearch(newJson);
      } else { //Tiene todo
        newJson = searching(json, options.stars, stars);
        newJson = searching(newJson, options.element, element);
        newJson = searching(newJson, options.query, query);
        setJsonSearch(newJson);
      }
    }
  }, [json, query, element, stars, clean]);
  return { query, setQuery, jsonSearch, setStars, setElement, setClean };
};

const Analisis = () => {
  const [json, setJson] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);

  const options = useRef({
    query: {
      threshold: 0.3,
      keys: [
        'name',
      ],
    },
    stars: {
      threshold: 0.0,
      keys: [
        'stars',
      ],
    },
    element: {
      threshold: 0.0,
      keys: [
        'element',
      ],
    },
  });
  const { query, setQuery, jsonSearch, setStars, setElement, setClean } = useSearchHeroes(json, options.current);

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
    setStars(`${cantStars}`);
  };

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
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
    setElement(`${nameElement}`);
  };

  const handleClean = () => {
    setClean(true);
    handleFilterStars(0);
    handleElement(0);
  };

  useEffect(() => {
    fetchJson('analisis', '5e8a82310ac8b8518995c672', { setOpen, setErrorResponse, setJson });
  }, []);

  return (
    <>
      <div className='pt-2 mx-2 animated fadeIn faster lg:grid lg:grid-cols-12 lg:gap-2'>
        <div className='mb-4 lg:col-span-2'>
          <div className='lg:sticky lg:top-0 lg:w-full lg:top_search'>
            <div className='text-center mb-2'>
              <h1 className='text-xl font-bold'>Analisis de Heroes</h1>
            </div>
            <div className='sm:grid sm:grid-cols-3 sm:gap-2 lg:grid-cols-1'>
              <label htmlFor='search'>
                <h2 className='text-lg font-bold'>Buscador: </h2>
                <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full max-w-xs py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' value={query} onChange={(e) => { setQuery(e.target.value); }} type='text' name='search' id='search' placeholder='Gobbler' tabIndex='0' />
              </label>
              <div className='mt-1 w-full'>
                <div className='my-2 grid grid-cols-5 gap-1'>
                  <FilterButton handleOnClick={handleFilterStars} number={1} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={2} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={3} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={4} img={star} identity='star'>star</FilterButton>
                  <FilterButton handleOnClick={handleFilterStars} number={5} img={star} identity='star'>star</FilterButton>
                </div>
                <div className='my-2 grid grid-cols-5 gap-1'>
                  <FilterButton handleOnClick={handleElement} number={1} img={fuego} identity='element'>Fuego</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={2} img={hielo} identity='element'>Hielo</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={3} img={naturaleza} identity='element'>Naturaleza</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={4} img={oscuro} identity='element'>Oscuro</FilterButton>
                  <FilterButton handleOnClick={handleElement} number={5} img={sagrado} identity='element'>Sagrado</FilterButton>
                </div>
              </div>
              <div className='text-right sm:flex sm:justify-center sm:items-center'>
                <button className='bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-1 px-2 border border-pink-500 hover:border-transparent rounded' type='button' onClick={handleClean}>Limpiar</button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:col-span-10 lg:mr-12 xl:grid-cols-10 gap-4'>
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
      <Modal isOpen={open} onClose={handleCloseModal}>
        <MessageErrorFetch errorResponse={errorResponse} handleCloseModal={handleCloseModal}>Traer la Lista de Heroes</MessageErrorFetch>
      </Modal>
    </>
  );
};

export default Analisis;
