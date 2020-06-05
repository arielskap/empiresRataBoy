import './src/assets/styles/app.css';
import './src/assets/styles/tailwind.css';
import './src/assets/styles/googleTranslate.css';
import './src/assets/styles/vars.css';

const React = require('react');
const { Header, Footer } = require('./src/components');

export const wrapRootElement = ({ element }) => (
  <div className='min-h-screen'>
    <Header />
    <div className='pt-16'>
      {element}
    </div>
    <Footer />
  </div>
);

