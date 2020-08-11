import { useState } from 'react';
import { useVerifyFetch, useSearchHeroes } from '../hooks';
import { Modal, MessageErrorFetch } from '../components';
import { Face, ModalHero, CompareHeroes, Buscador } from '../components/analisis';
import Layout from '../components/Layout';
import { fetchJson2 } from '../localFunction';

const Analisis = ({ response }) => {
  const [compareHeroes, setCompareHeroes] = useState([{
    id: 1,
    img: './static/black.png',
    alt: '',
  }, {
    id: 2,
    img: './static/black.png',
    alt: '',
  }, {
    id: 3,
    img: './static/black.png',
    alt: '',
  }]);
  const { open, setOpen, errorResponse, data } = useVerifyFetch(response);

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
            <CompareHeroes state={{ compareHeroes, setCompareHeroes }} />
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
                  <Face data={{ id, img, json: newJson }} compareHeroes={{ compareHeroes, setCompareHeroes }}>{name}</Face>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      {data && <ModalHero data={{ open, setOpen }} setCompareHeroes={setCompareHeroes} dataCard={{ img: data.img, json: data.json }} />}
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Heroes</MessageErrorFetch>
      </Modal>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await fetchJson2('heroes')
  return { props: { response: data } }
}

export default Analisis;
