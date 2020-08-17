import PropTypes from 'prop-types';
import '../../public/styles/app.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
