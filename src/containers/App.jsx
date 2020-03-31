import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import '../assets/styles/app.css';
import '../assets/styles/tailwind.css';
import '../assets/styles/vars.css';
import Header from '../components/Header';
import Alianzas from '../pages/Alianzas';
import Footer from '../components/Footer';
import Analisis from '../pages/Analisis';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <div className='mt-16 lg:mt-0'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/alianzas'>
            <Alianzas />
          </Route>
          <Route path='/analisis'>
            <Analisis />
          </Route>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
};

export default App;
