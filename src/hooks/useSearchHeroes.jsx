import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

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

export default useSearchHeroes;
