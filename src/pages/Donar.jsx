import React, { useEffect } from 'react';
import mercadoPago from '../assets/static/mercadoPago.png';
import payPal from '../assets/static/payPal.png';

const Donar = () => {
  useEffect(() => {
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
    window.$MPC_loaded !== true ? (
      window.attachEvent ?
        window.attachEvent('onload', $MPC_load) :
        window.addEventListener('load', $MPC_load, false)
    ) : null;
  }, []);

  return (
    <div className='animated fadeIn faster'>
      <div className='flex flex-col w-full justify-around items-center mt-5 lg:flex-row lg:px-48'>
        <div className='flex items-center justify-center flex-col lg:border-2 lg:border-blue-500 lg:rounded lg:p-4'>
          <img className='object-contain mb-5' src={mercadoPago} alt='Mercado Pago' />
          <a target='_blank' rel='noopener noreferrer' className='bg-transparent hover:bg-gold text-gold font-semibold hover:bg-yellow-500 hover:text-white py-2 px-4 border border-gold hover:border-transparent rounded' mp-mode='dftl' href='https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=68436190-f2ac5faa-f172-4d5e-8261-5b729a2dcd71' name='MP-payButton'>
            Donar 100 pesos ARS
          </a>
        </div>
        <div className='flex items-center justify-center flex-col mt-12 lg:mt-0 lg:border-2 lg:border-blue-500 lg:rounded lg:p-4'>
          <img className='object-contain mb-5' src={payPal} alt='Pay Pal' />
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='JDSLK287NKDRQ' />
            <button className='bg-transparent hover:bg-gold text-gold font-semibold hover:bg-yellow-500 hover:text-white py-2 px-4 border border-gold hover:border-transparent rounded' type='submit'>
              Donación Libre USD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donar;
