import React, { useState, useEffect, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import json from '../json/data.json';
import Face from '../components/Face';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';
import '../assets/styles/analisis.css';
import star from '../assets/static/star.png';
import fuego from '../assets/static/fuego.png';
import naturaleza from '../assets/static/naturaleza.png';
import oscuro from '../assets/static/oscuro.png';
import sagrado from '../assets/static/sagrado.png';
import hielo from '../assets/static/hielo.png';

const useSearchHeroes = (json, options) => {
  const [query, setQuery] = useState('');
  const [stars, setStars] = useState('0');
  const [element, setElement] = useState('');
  const [clean, setClean] = useState(false);
  const [jsonSearch, setJsonSearch] = useState(json);
  const fuseQuery = useRef(new Fuse(json, options.query));
  const fuseStars = useRef(new Fuse(json, options.stars));
  const fuseElement = useRef(new Fuse(json, options.element));

  const searching = (search) => {
    const newJson = [];

    search.forEach((element) => {
      newJson.push(element.item);
    });

    setJsonSearch(newJson);
  };

  const allSearching = () => {
    let search;
    let newJson = [];
    search = fuseStars.current.search(stars);
    search.forEach((element) => {
      newJson.push(element.item);
    });
    const fuse = new Fuse(newJson, options.query);
    newJson = [];
    search = fuse.search(query);
    search.forEach((element) => {
      newJson.push(element.item);
    });
    setJsonSearch(newJson);
  };

  useMemo(() => {
    let search;
    if (clean) {
      setQuery('');
      setStars('0');
      setElement('');
      setJsonSearch(json);
      setClean(false);
    } else {
      if (query === '' && stars === '0' && element === '') {
        setJsonSearch(json);
      } else if (query !== '' && stars === '0' && element === '') {
        search = fuseQuery.current.search(query);
        searching(search);
      } else if (query === '' && stars !== '0' && element === '') {
        search = fuseStars.current.search(stars);
        searching(search);
      } else {
        allSearching();
      }
    }
  }, [json, query, stars, clean]);
  return { query, setQuery, jsonSearch, setStars, setElement, setClean };
};

const Analisis = () => {
  const [pageLoad, setPageLoad] = useState(true);
  const options = useRef({
    query: {
      threshold: 0.0,
      keys: [
        'name',
      ],
    },
    stars: {
      keys: [
        'stars',
      ],
    },
    element: {
      keys: [
        'element',
      ],
    },
  });
  const { query, setQuery, jsonSearch, setStars, setClean } = useSearchHeroes(json, options.current);

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

  const handleClean = () => {
    setClean(true);
    handleFilterStars(0);
  };

  const handleElement = (element) => {
    const FUEGO = 1;
    const HIELO = 2;
    const NATURALEZA = 3;
    const OSCURO = 4;
    const SAGRADO = 5;
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
  };

  useEffect(() => {
    animateCSS('.BlackBackground', 'fadeOut faster', () => {
      setPageLoad(false);
    });
    animateCSS('.LoaderColors', 'fadeOut faster');
  }, []);

  return (
    <>
      <div className='pt-2 mx-2 animated fadeIn faster'>
        <div className='mb-4'>
          <div className='text-center mb-2'>
            <h1 className='text-xl font-bold'>Analisis de Heroes</h1>
          </div>
          <div>
            <label htmlFor='search'>
              <h2 className='text-lg font-bold'>Buscador: </h2>
              <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full max-w-xs py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' value={query} onChange={(e) => { setQuery(e.target.value); }} type='text' name='search' id='search' placeholder='Gobbler' tabIndex='0' />
            </label>
            <h2>Filtros</h2>
            <div className='flex'>
              <button type='button' onClick={() => { handleFilterStars(1); }}>
                <img className='star star-1 object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(2); }}>
                <img className='star star-2 object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(3); }}>
                <img className='star star-3 object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(4); }}>
                <img className='star star-4 object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(5); }}>
                <img className='star star-5 object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
            </div>
            <div className='flex'>
              <button type='button' onClick={() => { handleElement(1); }}>
                <img className='element element-1 object-contain filter-gray w-8 h-full' src={fuego} alt='Fuego' />
              </button>
              <button type='button' onClick={() => { handleElement(2); }}>
                <img className='element element-2 object-contain filter-gray w-8 h-full' src={hielo} alt='Hielo' />
              </button>
              <button type='button' onClick={() => { handleElement(3); }}>
                <img className='element element-3 object-contain filter-gray w-8 h-full' src={naturaleza} alt='naturaleza' />
              </button>
              <button type='button' onClick={() => { handleElement(4); }}>
                <img className='element element-4 object-contain filter-gray w-8 h-full' src={oscuro} alt='Oscuro' />
              </button>
              <button type='button' onClick={() => { handleElement(5); }}>
                <img className='element element-5 object-contain filter-gray w-8 h-full' src={sagrado} alt='sagrado' />
              </button>
            </div>
            <div>
              <button type='button' onClick={handleClean}>Limpiar</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8  lg:grid-cols-12 gap-4'>
          {jsonSearch.map((heroe) => {
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
      {pageLoad && (
        <BlackBackground>
          <LoaderColors />
        </BlackBackground>
      )}
    </>
  );
};

export default Analisis;
