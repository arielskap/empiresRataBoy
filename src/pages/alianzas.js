import { useVerifyFetch } from '../hooks';
import { CardAlianza, Modal, MessageErrorFetch } from '../components';
import Layout from '../components/Layout';
import { fetchJson2, sortById } from '../localFunction';

export default ({ response }) => {
  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);

  return (
    <Layout title='Alianzas'>
      <main>
        <h2 className='mb-4 text-2xl font-bold text-center'>
          Alianzas
          <br />
          que Conforman la Red
        </h2>
        <div className='grid grid-cols-3 gap-4 mx-2 lg:grid-cols-6 lg:mx-6'>
          {data && Array.isArray(data) && data.map((alianza) => {
            const { id } = alianza;
            return (
              <div key={id}>
                <CardAlianza json={alianza} />
              </div>
            );
          })}
        </div>
      </main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la de Alianzas</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetchJson2('alianzas')
  sortById(data)
  return { props: { response: data } }
}
