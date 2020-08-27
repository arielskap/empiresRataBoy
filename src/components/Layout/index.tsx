import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { NextSeo } from 'next-seo'
import Router from 'next/router';
import NProgress from 'nprogress';
import styles, { globalStyles } from './styles';
import { Header, Footer } from '../';

if (typeof window !== 'undefined') {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });
}

interface Props {
  children: React.ReactNode;
  title:string;
}

const Layout:React.FunctionComponent<Props> = ({ children, title }) => {
  const router = useRouter()

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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="manifest" href="./manifest.json" />
        <link href="./logo.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="./logo.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="./logo.png"></link>
        <meta name="theme-color" content="#1c065d" />
      </Head>
      <NextSeo
        title={`${title}`}
        description='Rata B Boy Empires and Puzzles Guias y Tutoriales | Pagina anterior https://ratabboy.herokuapp.com/'
        canonical="https://ratabboy.com.ar/"
        openGraph={{
          url: `https://ratabboy.com.ar${router.pathname}`,
          description: 'Rata B Boy Empires and Puzzles Guias y Tutoriales | Pagina anterior https://ratabboy.herokuapp.com/',
          images: [
            {
              url: 'https://ratabboy.com.ar/logo.jpg',
              width: 800,
              height: 600,
              alt: 'Rata B Boy',
            },
            {
              url: 'https://ratabboy.com.ar/logo.jpg',
              width: 800,
              height: 600,
              alt: 'Rata B Boy',
            },
          ]
        }}
      />
      <Header />
      <div className='absolute left-0 z-10 hidden w-full h-auto bg-black opacity-50 nav-bg-black' />
      <div className='relative flex justify-center pb-24'>
        <main className='container px-2'>
          {children}
        </main>
        <aside id='aside' />
      </div>
      <Footer />
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </div>
  );
};

export default Layout;
