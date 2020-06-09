import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { MessageErrorFetch, Modal, SEO } from '../components';
import { animateCSS } from '../funciones';
import mercadoPago from '../assets/static/mercadoPago.png';
import payPal from '../assets/static/payPal.png';
import qr from '../assets/static/qr.jpg';

export default () => {
  const { open, setOpen, errorResponse, data } = useFetch('sgihiu');

  const handleCloseModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
      setOpen(false);
    });
  };

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    function $MPC_load() {
      window.$MPC_loaded !== true && (
        function () {
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = `${document.location.protocol}//secure.mlstatic.com/mptools/render.js`;
          const x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;
        })();
    }
    if (isBrowser) {
      window.$MPC_loaded !== true ? (
        window.attachEvent ?
          window.attachEvent('onload', $MPC_load) :
          window.addEventListener('load', $MPC_load, false)
      ) : null;
    }
  }, []);

  return (
    <>
      <SEO title='Donar' />
      <div className='animated fadeIn faster'>
        <h1 className='text-center my-4 text-2xl font-bold'>
          <span role='img' aria-label='$'>💸</span>
          Donaciones
          <span role='img' aria-label='$'>💸</span>
        </h1>
        <div className='flex flex-col w-full justify-around items-center mt-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-40'>
          <div className='flex items-center justify-center flex-col lg:border-2 lg:border-blue-500 lg:rounded lg:p-4'>
            <a className='border-2 border-gold py-2 px-4 rounded hover:border-transparent hover:bg-yellow-500' href='https://www.paypal.me/ratabboy' target='__blank'>
              <img className='object-contain bg-white p-2 rounded' src={payPal} alt='Pay Pal' />
            </a>
          </div>
          <div className='flex items-center justify-center flex-col lg:border-2 lg:border-blue-500 lg:rounded lg:p-4 mt-12 lg:mt-0 lg:row-span-2'>
            <img className='object-contain bg-white p-2 rounded mb-5' src={mercadoPago} alt='Mercado Pago' />
            <div className='grid grid-cols-1 gap-4 mx-4'>
              {data && !data.message && data.map((donativo) => {
                const { id, name, cost, link } = donativo;
                return (
                  <a target='_blank' rel='noopener noreferrer' className='bg-transparent text-gold font-semibold hover:bg-yellow-500 hover:text-white py-2 px-4 border border-gold hover:border-transparent rounded text-center' mp-mode='dftl' href={link} name='MP-payButton' key={id}>
                    {`${name} $${cost}`}
                  </a>
                );
              })}
            </div>
          </div>
          <div className='hidden lg:block lg:flex lg:flex-col lg:justify-start lg:h-full'>
            <h2 className='text-center text-xl font-bold'>Pagar con Qr</h2>
            <h3 className='text-center mb-4 text-lg font-bold'>Mercado Pago</h3>
            <div className='flex items-center justify-center'>
              <img className='object-contain rounded' src={qr} alt={qr} />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={open} onClose={handleCloseModal}>
        <MessageErrorFetch errorResponse={errorResponse} handleCloseModal={handleCloseModal}>Traer la de Alianzas</MessageErrorFetch>
      </Modal>
    </>
  );
};
