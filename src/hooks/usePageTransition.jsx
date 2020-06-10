import { useTransition } from 'react-spring';
import { useState } from 'react';

const usePageTransition = () => {
  const [item, setItem] = useState(true);
  const transitions = useTransition(item, null, {
    config: { duration: 500, delay: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return { transitions };
};

export default usePageTransition;
