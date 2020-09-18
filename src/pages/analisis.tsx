import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import lozad from 'lozad'
import { useVerifyFetch, useSearchHeroes } from '../hooks';
import { Modal, MessageErrorFetch } from '@components/index';
import { Face, CompareHeroes, Buscador } from '@components/analisis';
import Layout from '@components/Layout';
import { fetchJson3 } from '../utils/localFunction';
import { Analisis } from '../interfaces'
import { initialStateCompareHeroes } from '../utils/funciones';

interface Props {
  response: any;
  responseTalents: any;
}

const AnalisisPage: React.FunctionComponent<Props> = ({ response, responseTalents }) => {
  const [compareHeroes, setCompareHeroes] = useState(() => {
    const initialState: Analisis[] = [];
    for (let i = 1; i <= 3; i++) {
      initialState.push(initialStateCompareHeroes(i))
    }
    return initialState;
  });

  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);
  const { open: openTalents, setOpen: setOpenTalents, errorResponse: errorResponseTalents, data: dataTalents } = useVerifyFetch(responseTalents);

  const { data: dataHeroes, setData, jsonSearch, setClean } = useSearchHeroes(data);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, [dataHeroes])

  return (
    <Layout title='Analisis'>
      <main className='pt-2 mx-2 lg:grid lg:grid-cols-12 lg:gap-2'>
        <div className='mb-4 lg:col-span-2'>
          <div className='lg:sticky lg:top-0 lg:w-full lg:top_search'>
            <div className='mb-2 text-center'>
              <h1 className='text-xl font-bold'>Analisis de Heroes</h1>
            </div>
            <Buscador dataHeroes={dataHeroes} setData={setData} setClean={setClean} />
            <CompareHeroes state={{ compareHeroes, setCompareHeroes }} dataTalents={dataTalents} />
          </div>
        </div>
        <div className='lg:col-span-10'>
          <div className='grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-7 lg:mr-12 xl:grid-cols-8'>
            {Array.isArray(jsonSearch) && jsonSearch.map((heroe: Analisis) => {
              const { id, name } = heroe;

              return (
                <div key={id}>
                  <Face dataTalents={dataTalents} data={{ ...heroe }} compareHeroes={{ compareHeroes, setCompareHeroes }}>{name}</Face>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Heroes</MessageErrorFetch>
      </Modal>
      <Modal data={{ open: openTalents, setOpen: setOpenTalents }}>
        <MessageErrorFetch errorResponse={errorResponseTalents}>Traer la Lista de Talentos</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchJson3('heroes')
  const talents = await fetchJson3('talentosHeroes')
  return { props: { response: data, responseTalents: talents }, revalidate: 1 }
}

export default AnalisisPage;
