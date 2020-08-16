import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

const useSearchHeroes = (json) => {
  const [data, setData] = useState({
    query: '',
    stars: '',
    element: '',
    class: '',
    family: '',
    event: '',
    effect: ''
  });
  const [clean, setClean] = useState(false);
  const [jsonSearch, setJsonSearch] = useState(false);

  const createFuse = (json, options) => {
    const threshold = options.threshold;
    let newOptions = options.keys.filter((option) => option !== '');
    newOptions = { threshold, keys: newOptions, ignoreLocation: true };

    return new Fuse(json, newOptions);
  };

  const createOperator = (key) => {
    const newKey = key.reduce((result, object) => {
      const value = Object.values(object);
      const key = Object.keys(object);
      if (value[0] !== '') {
        if (Array.isArray(value[0])) {
          const newObject = value[0].map((o) => {
            return { [key]: o }
          })
          result.push({ $or: newObject })
        } else {
          result.push(object)
        }
      }
      return result
    }, []);
    const operator = {
      $and: newKey,
    };
    return operator;
  };

  const searching = (json, options, key) => {
    const newJson = [];
    const fuse = createFuse(json, options);

    const operator = createOperator(key);

    const search = fuse.search(operator);
    search.forEach((element) => {
      newJson.push(element.item);
    });

    return newJson;
  };

  const compare = (a, b) => {
    if (a.name.trim() < b.name.trim()) {
      return -1;
    }
    if (a.name.trim() > b.name.trim()) {
      return 1;
    }
    return 0;
  };

  useMemo(() => {
    let newJson;
    let threshold;
    const { query, stars, element, class: classHero, family, event, effect } = data;
    if (clean) {
      setData({
        query: '',
        stars: '',
        element: '',
        class: '',
        family: '',
        event: '',
        effect: ''
      });
      setJsonSearch(json);
      setClean(false);
    } else {
      if (query === '' && stars === '' && element === '' && classHero === '' && family === '' && event === '' && effect === '') { //No tiene nada
        if (json) {
          newJson = json.sort(compare);
          setJsonSearch(newJson);
        }
      } else {
        threshold = 0.3;
        newJson = searching(json, {
          threshold,
          keys: [
            query && {
              name: 'name',
            },
            stars && {
              name: 'stars',
            },
            element && {
              name: 'element',
            },
            classHero && {
              name: 'class',
            },
            family && {
              name: 'family',
            },
            event && {
              name: 'event',
            },
            effect && {
              name: 'effect.data',
            },
          ],
        },
        [
          { name: query },
          { stars },
          { element },
          { class: classHero },
          { family },
          { event },
          { 'effect.data': effect }
        ]);
        setJsonSearch(newJson);
      }
    }
  }, [json, data, clean]);
  return { data, setData, jsonSearch, setClean };
};

export default useSearchHeroes;
