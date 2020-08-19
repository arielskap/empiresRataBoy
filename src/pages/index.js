import { MessageErrorFetch, Modal } from '../components';
import Twitch from '../components/index/Twitch';
import LinkH1 from '../components/index/LinkH1';
import Layout from '../components/Layout';
import { sortById, fetchJson3 } from '../utils/localFunction';
import { useVerifyFetch } from '../hooks';

const Home = ({ response }) => {
  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);

  return (
    <Layout title='Home'>
      <main>
        <div className='md:hidden'>
          <img className='object-contain w-full max-h-screen' src='./redAlianzas2.png' alt='Red Alianzas' />
          <LinkH1 />
        </div>
        <div className='hidden md:flex md:flex-col md:items-center md:justify-center md:my-6'>
          <LinkH1 />
          <img className='object-contain w-full md:max-w-4xl xl:max-w-6xl' src='./redDeAlianzas.png' alt='Red de Alianzas' />
        </div>
        <div className='px-8'>
          <hr className='my-8 hr-home md:hidden' />
          <div>
            <h2 className='mb-4 text-xl font-bold text-center md:text-2xl'>¡Ver Directo Ahora!</h2>
            <div className='flex items-center justify-center'>
              <Twitch theme='dark' width='100%' height={480} channel='ratabboypda' />
            </div>
          </div>
          <hr className='my-8 hr-home' />
          <div>
            <h2 className='mb-4 text-xl font-bold text-center md:text-2xl'>¡Listas de Reproducción!</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {data && Array.isArray(data) && data.map((video) => {
                const { id, name, link, img } = video;
                return (
                  <div className={`mt-2 md:mt-0 ${img && 'md:col-span-3'}`} key={id}>
                    <h3 className='mb-2 text-lg font-bold text-center underline'>{name}</h3>
                    {img ? (
                      <div className='flex justify-center'>
                        <img className='object-contain' src={img} alt={name} />
                      </div>
                    ) : (
                      <iframe className='w-full h-48 rounded md:h-64' title={name} src={link} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Reproducción</MessageErrorFetch>
      </Modal>
      <style jsx>
        {`
        .hr-home {
          overflow: visible; /* For IE */
          padding: 0;
          border: none;
          height: 1px !important;
          background: #333;
          background-image: linear-gradient(to right, #ccc, #333, #ccc);
          color: #333;
          text-align: center;
        }

        .hr-home::after {
          content: "🕹️";
          display: inline-block;
          position: relative;
          top: -0.7em;
          font-size: 1.5em;
          padding: 0 0.25em;
        }
        `}
      </style>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetchJson3('inicioVideos')
  sortById(data)
  return { props: { response: data }, revalidate: 1 }
}

export default Home;
