import { useEffect, useState } from 'react';

const useVerifyFetch = (response) => {
  const [open, setOpen] = useState(false);
  const [errorResponse, setErrorResponse] = useState(false);
  //console.log(response)
  useEffect(() => {
    const error = response.error || response.message;
    if (error) {
      console.log(`Hubo un problema con la petición Fetch:${error}`);
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }
      setOpen(true);
      setErrorResponse(error);
    }
  }, [response]);

  return { open, setOpen, errorResponse, setErrorResponse, data: response.body || undefined };
};

export default useVerifyFetch;
