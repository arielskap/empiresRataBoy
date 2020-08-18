import { Modal, MessageErrorFetch } from '../components';
import CardGuias from '../components/guias/CardGuias';
import Layout from '../components/Layout';
import { useVerifyFetch } from '../hooks';
import { fetchJson3, sortById } from '../utils/localFunction';

const Guias = ({ response }) => {
  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);

  return (
    <Layout title='Guias'>
      <main className='mx-4 lg:grid lg:grid-cols-2'>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <div className='py-4'>
            <h1 className='text-xl font-bold text-center'>¡Todas mis Guías!</h1>
          </div>
          <div className='flex items-center justify-center w-full'>
            <a target='_blank' rel='noopener noreferrer' href='https://drive.google.com/drive/folders/1DqpgV7wugGVlbo5TvehZ7YrBG5NpMPEA' className='px-4 py-2 font-bold text-white bg-pink-500 border-b-4 border-pink-700 rounded hover:bg-pink-400 hover:border-pink-500'>Ir al Drive</a>
          </div>
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-bold'>Listado de Guías</h2>
          <ul className='flex flex-col items-center p-2 mt-2 border-2 border-pink-500 rounded sm:grid sm:grid-cols-2'>
            {data && Array.isArray(data) && data.map((guia) => {
              const { id } = guia;
              return (
                <li className='mb-1 text-center' key={id}>
                  <CardGuias json={guia} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Guias</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetchJson3('guias')
  sortById(data)
  return { props: { response: data }, revalidate: 1 }
}

export default Guias;
