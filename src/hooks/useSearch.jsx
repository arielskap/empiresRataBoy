import { useState, useMemo, useRef } from 'react';

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

export default useSearchHeroes;
