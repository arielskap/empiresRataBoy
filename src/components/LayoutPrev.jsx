import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Header from './Header';
import Footer from './Footer';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {

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
    <div className='relative min-h-screen'>
      <Head>
        <title>{`${title} | Empires and Puzzles: Rata B Boy`}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Rata B Boy Empires and Puzzles Guias y Tutoriales' />
        <link rel='shortcut icon' href='./logo.png' />
      </Head>
      <Header />
      <div className='absolute left-0 z-10 hidden w-full h-auto bg-black opacity-50 nav-bg-black' />
      <div className='relative flex justify-center pb-24'>
        <main className='container px-2'>
          {children}
        </main>
        <aside id='aside' />
      </div>
      <Footer />
      <div id='modal' />
      <style jsx>
        {`
          .nav-bg-black{
            top: 114px;
            min-height: calc(100% - 114px);
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
