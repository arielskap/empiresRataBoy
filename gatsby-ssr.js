import './src/assets/styles/app.css';
import './src/assets/styles/tailwind.css';
import './src/assets/styles/googleTranslate.css';
import './src/assets/styles/vars.css';
import 'animate.css/animate.css';

const React = require('react');
const { Header, Footer } = require('./src/components');

export const wrapRootElement = ({ element }) => (
  <div className='min-h-screen'>
    <Header />
    <div style={{ padding: '1.5rem' }}>
      {element}
    </div>
    <Footer />
  </div>
);

