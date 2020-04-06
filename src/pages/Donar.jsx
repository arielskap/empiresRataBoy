import React, { useEffect } from 'react';

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
      <div className='flex w-full items-center justify-center flex-col mt-5'>
        <div>
          <a className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' mp-mode='dftl' href='https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=192968117-ae713996-2d97-432e-90f7-4fff98bfa522' name='MP-payButton'>Pagar un peso</a>
        </div>
        <div className='mt-12'>
          <a className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' mp-mode='dftl' href='https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=192968117-34e612f7-7e3b-4eeb-bb2a-c0fd03e2efb2' name='MP-payButton'>Pagar dos pesos</a>
        </div>
      </div>
    </div>
  );
};

export default Donar;
