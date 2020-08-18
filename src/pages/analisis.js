import { useState } from 'react';
import { useVerifyFetch, useSearchHeroes } from '../hooks';
import { Modal, MessageErrorFetch } from '../components';
import { Face, CompareHeroes, Buscador } from '../components/analisis';
import Layout from '../components/Layout';
import { fetchJson3 } from '../utils/localFunction';

const Analisis = ({ response, responseTalents }) => {

  const [compareHeroes, setCompareHeroes] = useState([{
    id: 1,
    img: './black.png',
    alt: '',
  }, {
    id: 2,
    img: './black.png',
    alt: '',
  }, {
    id: 3,
    img: './black.png',
    alt: '',
  }]);

  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);
  const { open: openTalents, setOpen: setOpenTalents, errorResponse: errorResponseTalents, data: dataTalents } = useVerifyFetch(responseTalents);

  const { data: dataHeroes, setData, jsonSearch, setClean } = useSearchHeroes(data);

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
            {jsonSearch && jsonSearch.map((heroe) => {
              const { id, name, power, element, stars, attack, defense, health, manaSpeed, family, event, effect, video, img } = heroe;
              const classHero = heroe.class;
              const newJson = {
                name,
                power,
                element,
                stars,
                attack,
                defense,
                health,
                manaSpeed,
                classHero,
                family,
                event,
                effect,
                video,
              };
              return (
                <div key={id}>
                  <Face dataTalents={dataTalents} data={{ id, img, json: newJson }} compareHeroes={{ compareHeroes, setCompareHeroes }}>{name}</Face>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Heroes</MessageErrorFetch>
      </Modal>
      <Modal data={{ openTalents, setOpenTalents }}>
        <MessageErrorFetch errorResponse={errorResponseTalents}>Traer la Lista de Talentos</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await fetchJson3('heroes')
  const talents = await fetchJson3('talentosHeroes')
  return { props: { response: data, responseTalents: talents }, revalidate: 1 }
}

export default Analisis;
