import React, { useEffect } from 'react';
import { Header, Footer } from './src/components';
import './src/assets/styles/app.css';
import './src/assets/styles/tailwind.css';
import './src/assets/styles/googleTranslate.css';
import './src/assets/styles/vars.css';

const Body = ({ element }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.id = 'googleScript';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(s);
    }
  }, []);
  return (
    <div className='min-h-screen'>
      <Header />
      <div>
        {element}
      </div>
      <Footer />
    </div>
  );
};

export const wrapRootElement = ({ element }) => <Body element={element} />;
