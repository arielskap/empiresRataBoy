import { useState } from 'react';
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { fetchJson3, sortById } from '../utils/localFunction'
import Modal from '../components/Modal';
import MessageErrorFetch from '../components/MessageErrorFetch';
import { useVerifyFetch } from '../hooks';
import Button3D from '../components/Button3D';
import CardPj from '../components/miniJuego/CardPj';

interface resMiniJuego {
  response: {
    error: string,
    body: miniJuego[]
  }
}

interface miniJuego {
  dataPj: [{
    id: number,
    name: string,
    img: string,
    text: string,
    accept?: boolean
  }],
  _id: string,
  id: number,
  objetive: string
}

interface resVerifyFetch {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  errorResponse: boolean,
  data: miniJuego[]
}

const miniJuego: React.FunctionComponent<resMiniJuego> = ({ response }) => {
  const { open, setOpen, errorResponse, data }: resVerifyFetch = useVerifyFetch(response);
  const [openGameModal, setOpenGameModal] = useState(false);
  const [round, setRound] = useState({
    number: 1,
    win: false
  })
  const [stateELement, setStateELement] = useState(true)
  const DATA_ACTUAL = data[round.number - 1];

  const showHidden = (nameElement: string) => {
    const element = document.querySelector(`.${nameElement}`);
    if (element?.classList.contains('showElement')) {
      element.classList.replace('showElement', 'hiddenElement')
    } else {
      element?.classList.replace('hiddenElement', 'showElement')
    }
    setStateELement(!stateELement)
  }

  const pjSelected = () => {
    const isWrong = [...document.querySelectorAll('.pj')].some((pjElement) => {
      return (!pjElement.classList.contains('pj-accept') && pjElement.classList.contains('pj-selected')) || (pjElement.classList.contains('pj-accept') && !pjElement.classList.contains('pj-selected'));
    })

    if (isWrong) {
      setRound({
        number: 1,
        win: false
      })
    } else {
      setRound({
        number: round.number + 1,
        win: true
      })
    }
    setOpenGameModal(true)
  }

  return (
    <Layout title='Mini Juego'>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold text-center'>Mini Juego</h1>
        <div className='mt-2'>
          <button type='button' className='px-2 py-1 mb-1 text-xl border border-purple-500 rounded hover:bg-pink-200' onClick={() => showHidden('reglasText')}>{stateELement ? 'Ocultar' : 'Mostrar'} Reglas:</button>
          <p className='text-lg element reglasText showElement'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nihil reiciendis, dolores natus accusamus facilis quasi blanditiis delectus molestiae vero ab obcaecati assumenda perferendis exercitationem nemo saepe ipsum dolore odio!Perferendis, praesentium quam. Veniam optio reprehenderit illum adipisci, corrupti nobis iste quam exercitationem consequuntur rem praesentium tempore doloribus accusamus beatae soluta natus perferendis amet nihil ad explicabo nisi. Facilis, rerum?</p>
        </div>
      </div>
      <div className='max-w-xl p-2 m-auto border-2 border-pink-500 rounded-lg'>
        <h3 className='text-xl text-center'>Nivel {round.number}/{data.length}</h3>
        <p className='mt-2 mb-4 text-lg'><span className='font-semibold'>Objetivo:</span> {DATA_ACTUAL.objetive}</p>
        <div className='space-y-4'>
          {DATA_ACTUAL.dataPj.map((pj) => <CardPj key={`${round.number - 1}-${pj.id}`} data={{ ...pj }} />)}
          <div className='text-center'>
            <Button3D color='green' onClick={pjSelected}>Confirmar decisión</Button3D>
          </div>
        </div>
      </div>
      <Modal data={{ open: openGameModal, setOpen: setOpenGameModal }}>
        <div className='p-2 text-center'>
          <h1 className='mb-1 text-xl'>{round.win ? '🎉🎊 Ganaste 🎊🎉' : 'Perdiste 😞✌🏽'}</h1>
          <p className='mb-2 text-lg'>{round.win ? '¡¡Muy Bien!! ¡Avanzaste a la siguiente nivel!' : 'Debiste haber leído mejor... Volveras al principio'}</p>
          <Button3D color={`${round.win ? 'green' : 'red'}`} onClick={() => (document.querySelector('.Modal__close-button') as HTMLButtonElement).click()}>Continuar</Button3D>
        </div>
      </Modal>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Reproducción</MessageErrorFetch>
      </Modal>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchJson3('miniJuego')
  sortById(data)
  return { props: { response: data }, revalidate: 1 }
}

export default miniJuego
