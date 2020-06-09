import './src/assets/styles/app.css';
import './src/assets/styles/tailwind.css';
import './src/assets/styles/googleTranslate.css';
import './src/assets/styles/vars.css';
import 'animate.css/animate.css';
import React from 'react';
import { Header, Footer } from './src/components';

export const wrapRootElement = ({ element }) => (
  <div className='min-h-screen'>
    <Header />
    <div>
      {element}
    </div>
    <Footer />
    <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
  </div>
);
