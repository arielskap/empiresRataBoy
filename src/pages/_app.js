import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo'
import '../styles/app.css';

import SEO from '../../next-seo.config'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
