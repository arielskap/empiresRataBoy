import { useEffect } from 'react';
import { animated } from 'react-spring';
import { useVerifyFetch } from '../hooks';
import { MessageErrorFetch, Modal } from '../components';
import { useFade } from '../animations';
import Layout from '../components/Layout';
import { fetchJson2, sortById } from '../localFunction';

export default ({ response }) => {
  const { fade } = useFade();
  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);

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
    <Layout title='Donar'>
      <animated.main style={fade}>
        <h1 className='my-4 text-2xl font-bold text-center'>
          <span role='img' aria-label='$'>💸</span>
          Donaciones
          <span role='img' aria-label='$'>💸</span>
        </h1>
        <div className='flex flex-col items-center justify-around w-full mt-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-40'>
          <div className='flex flex-col items-center justify-center lg:border-2 lg:border-blue-500 lg:rounded lg:p-4'>
            <a className='px-4 py-2 border-2 rounded border-gold hover:border-transparent hover:bg-yellow-500' href='https://www.paypal.me/ratabboy' target='__blank'>
              <img className='object-contain p-2 bg-white rounded' src='./static/payPal.png' alt='Pay Pal' />
            </a>
          </div>
          <div className='flex flex-col items-center justify-center mt-12 lg:border-2 lg:border-blue-500 lg:rounded lg:p-4 lg:mt-0 lg:row-span-2'>
            <img className='object-contain p-2 mb-5 bg-white rounded' src='./static/mercadoPago.png' alt='Mercado Pago' />
            <div className='grid grid-cols-1 gap-4 mx-4'>
              {data && Array.isArray(data) && data.map((donativo) => {
                const { id, name, cost, link } = donativo;
                return (
                  <a target='_blank' rel='noopener noreferrer' className='px-4 py-2 font-semibold text-center bg-transparent border rounded text-gold hover:bg-yellow-500 hover:text-white border-gold hover:border-transparent' mp-mode='dftl' href={link} name='MP-payButton' key={id}>
                    {`${name} $${cost}`}
                  </a>
                );
              })}
            </div>
          </div>
          <div className='hidden lg:flex lg:flex-col lg:justify-start lg:h-full'>
            <h2 className='text-xl font-bold text-center'>Pagar con Qr</h2>
            <h3 className='mb-4 text-lg font-bold text-center'>Mercado Pago</h3>
            <div className='flex items-center justify-center'>
              <img className='object-contain rounded' src='./static/qr.jpg' alt='qr' />
            </div>
          </div>
        </div>
      </animated.main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la de Alianzas</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetchJson2('donaciones')
  sortById(data)
  return { props: { response: data } }
}
