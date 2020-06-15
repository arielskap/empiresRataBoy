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
  });
  const [clean, setClean] = useState(false);
  const [jsonSearch, setJsonSearch] = useState(false);

  const createFuse = (json, options) => {
    let newOptions = options.keys.filter((option) => option !== '');
    newOptions = { threshold: 0.3, keys: newOptions };
    return new Fuse(json, newOptions);
  };

  const createOperator = (key) => {
    let flag = 0;
    let operator;
    let newKey;

    const result = key.some((object) => {
      const value = Object.values(object);
      if (value[0] !== '') {
        flag++;
        operator = value[0];
      }
      return flag >= 2;
    });
    if (result) {
      newKey = key.filter((object) => {
        const value = Object.values(object);
        return value[0] !== '';
      });
      operator = {
        $and: newKey,
      };
    }
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
    console.log(newJson);
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
    const { query, stars, element, class: classHero, family, event } = data;
    if (clean) {
      setData({
        query: '',
        stars: '',
        element: '',
        class: '',
        family: '',
        event: '',
      });
      setJsonSearch(json);
      setClean(false);
    } else {
      if (query === '' && stars === '' && element === '' && classHero === '' && family === '' && event === '') { //No tiene nada
        if (json) {
          newJson = json.sort(compare);
          setJsonSearch(newJson);
        }
      } else {
        newJson = searching(json, {
          threshold: 0.3,
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
          ],
        },
        [
          { name: query },
          { stars },
          { element },
          { class: classHero },
          { family },
          { event },
        ]);
        setJsonSearch(newJson);
      }
    }
  }, [json, data, clean]);
  return { data, setData, jsonSearch, setClean };
};

export default useSearchHeroes;
