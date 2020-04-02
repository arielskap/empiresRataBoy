import React, { useState, useEffect, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import json from '../json/data.json';
import Face from '../components/Face';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';
import star from '../assets/static/star.png';
import '../assets/styles/analisis.css';

const useSearchHeroes = (json, options) => {
  const [query, setQuery] = useState('');
  const [stars, setStars] = useState('0');
  const [jsonSearch, setJsonSearch] = useState(json);
  const [fuse, setFuse] = useState(new Fuse(json, options));

  const searching = (search) => {
    const newJson = [];

    search.forEach((element) => {
      newJson.push(element.item);
    });

    setJsonSearch(newJson);
  };

  useMemo(() => {
    let search;
    if (query === '' && stars === '0') {
      setJsonSearch(json);
    } else if (query === '' && stars !== '0') {
      search = fuse.search(stars);
      searching(search);
    } else {
      search = fuse.search(query);
      searching(search);
    }
  }, [json, query, stars]);
  return { query, setQuery, jsonSearch, setFuse, setStars };
};

const Analisis = () => {
  const [pageLoad, setPageLoad] = useState(true);
  const options = useRef({
    threshold: 0.0,
    keys: [
      'name',
    ],
  });
  const { query, setQuery, jsonSearch, setFuse, setStars } = useSearchHeroes(json, options.current);

  const handleFilterStars = (cantStars) => {
    if (query === '') {
      options.current = {
        isCaseSensitive: false,
        findAllMatches: false,
        includeMatches: false,
        includeScore: false,
        useExtendedSearch: false,
        minMatchCharLength: 1,
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        keys: [
          'stars',
        ],
      };
    } else {
      options.current = {
        threshold: 0.0,
        keys: [
          'name',
          'stars',
        ],
      };
    }
    setFuse(new Fuse(json, options));
    setStars(`${cantStars}`);
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
                <img className='object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(2); }}>
                <img className='object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(3); }}>
                <img className='object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(4); }}>
                <img className='object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
              <button type='button' onClick={() => { handleFilterStars(5); }}>
                <img className='object-contain filter-gray w-8 h-full' src={star} alt='star' />
              </button>
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
