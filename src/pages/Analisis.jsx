import React, { useState, useEffect, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import json from '../json/data.json';
import Face from '../components/Face';
import BlackBackground from '../components/BlackBackground';
import LoaderColors from '../components/LoaderColors';
import { animateCSS } from '../funciones';

const useSearchHeroes = (json) => {
  const [query, setQuery] = useState('');
  const [jsonSearch, setJsonSearch] = useState(json);
  const options = useRef({
    threshold: 0.0,
    keys: [
      'name',
    ],
  });
  const fuse = useRef(new Fuse(json, options.current));

  useMemo(() => {
    if (query === '') {
      setJsonSearch(json);
    } else {
      const search = fuse.current.search(query);
      const newJson = [];

      search.forEach((element) => {
        newJson.push(element.item);
      });

      setJsonSearch(newJson);
    }
  }, [json, query]);
  return { query, setQuery, jsonSearch };
};

const Analisis = () => {
  const [pageLoad, setPageLoad] = useState(true);
  const { query, setQuery, jsonSearch } = useSearchHeroes(json);

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
