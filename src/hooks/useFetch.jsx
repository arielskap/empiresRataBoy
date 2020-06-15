import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetchJson2 } from '../localFunction';
//import json from '../json/analisis.json';

const useFetch = (id) => {
  const [open, setOpen] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  const { data, error } = useSWR(id, fetchJson2);
  //const data = json;
  //const error = null;
  useEffect(() => {
    if (error) {
      console.log(`Hubo un problema con la petición Fetch:${error.message}`);
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      setOpen(true);
      setErrorResponse(error.message);
    }
    if (data) {
      console.log(data);
    }
  }, [error, data]);

  return { open, setOpen, errorResponse, setErrorResponse, data };
};

export default useFetch;
