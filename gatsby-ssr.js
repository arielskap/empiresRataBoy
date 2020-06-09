import './src/assets/styles/app.css';
import './src/assets/styles/tailwind.css';
import './src/assets/styles/googleTranslate.css';
import './src/assets/styles/vars.css';
import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Header, Footer } from './src/components';

const Body = ({ element }) => {
  const [show, set] = useState(true);
  const transitions = useTransition(show, null, {
    config: { duration: 500, delay: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id = 'googleScript';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(s);
    }
  }, []);
  console.log(transitions);
  return (
    <div className='min-h-screen'>
      <Header />
      {transitions.map(({ item, key, props }) => {
        console.log(props);
        return (
          <animated.main key={key} style={props}>
            {element}
          </animated.main>
        );
      })}
      <Footer />
    </div>
  );
};

export const wrapRootElement = ({ element }) => <Body element={element} />;
