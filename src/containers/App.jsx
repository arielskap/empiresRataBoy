import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import '../assets/styles/app.css';
import '../assets/styles/tailwind.css';
import '../assets/styles/googleTranslate.css';
import '../assets/styles/vars.css';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Alianzas from '../pages/Alianzas';
import Footer from '../components/Footer';
import Analisis from '../pages/Analisis';
import Guias from '../pages/Guias';
import Prueba from '../pages/Prueba';
import Donar from '../pages/Donar';

const App = () => {
  return (
    <div className='min-h-screen'>
      <HashRouter>
        <Header />
        <div className='pt-16'>
          <Switch>
            <Route exact path='/'>
              <ScrollToTop />
              <Home />
            </Route>
            <Route path='/prueba'>
              <ScrollToTop />
              <Prueba />
            </Route>
            <Route path='/guias'>
              <ScrollToTop />
              <Guias />
            </Route>
            <Route path='/alianzas'>
              <ScrollToTop />
              <Alianzas />
            </Route>
            <Route path='/analisis'>
              <ScrollToTop />
              <Analisis />
            </Route>
            <Route path='/donar'>
              <ScrollToTop />
              <Donar />
            </Route>
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
