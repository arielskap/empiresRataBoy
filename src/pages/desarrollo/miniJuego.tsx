import { useState } from 'react';
import { GetServerSideProps } from 'next'
import Layout from '@components/Layout'
import { fetchJson3, sortById } from '@utils/localFunction'
import Modal from '@components/Modal';
import MessageErrorFetch from '@components/MessageErrorFetch';
import { useVerifyFetch } from '@hooks/index';
import Button3D from '@components/Button3D';
import CardPj from '@components/miniJuego/CardPj';

interface ResMiniJuego {
  response: {
    error: string;
    body: MiniJuego[];
  }
}

interface MiniJuego {
  dataPj: [{
    id: number;
    name: string;
    img: string;
    text: string;
    accept?: boolean;
  }],
  _id: string;
  id: number;
  objetive: string;
}

type ResVerifyFetch = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorResponse: boolean;
  data: MiniJuego[];
}

const miniJuego: React.FunctionComponent<ResMiniJuego> = ({ response }) => {
  const { open, setOpen, errorResponse, data }: ResVerifyFetch = useVerifyFetch(response);
  const [openGameModal, setOpenGameModal] = useState(false);
  const [round, setRound] = useState({
    number: 1,
    win: false,
  })
  const [reload, setReload] = useState(false);
  const [stateELement, setStateELement] = useState(true)
  const [endGame, setEndGame] = useState(false);
  const MSJ_LOOSE = ['He tío que has echo que me pasado 9 malditos meses encerrado programando esto ... venga hazlo desde 0 que le digo a tus padres que no limpiaste la pieza', 'Parece que no lo entiendes te lo explicare en código binario 01100101 01101100 00100000 01100001 01111010 01110101 01101100 00100000 01100001 01100011 01100101 01110000 01110100 01100001', 'Vamos a ver te lo explico en lenguaje inclusivo les chiques lean las consignas', 'haz ganado el premio por mayores fallos vuelve al principio', 'segui participando', 'programa 1 tu 0', 'Imposible nada es. Difícil, muchas cosas son', 'Lo siento, pero eso de rendirte sin dar tu mejor esfuerzo, no va conmigo empieza de nuevo', 'derrapaste y te fuiste al pasto mal ahi', 'Al dios Bane no le gusto esto si te volves a equivocar todos tus héroes serán AMEONNA']
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
      const pjRefused = pjElement.classList.contains('pj-refused');
      const pjAccept = pjElement.classList.contains('pj-accept');

      if (pjAccept) {
        return pjRefused;
      }
      if (pjRefused) {
        return false
      }
      return true
    })

    if (isWrong) {
      if (round.number === 1) {
        setReload(!reload)
      }
      setRound({
        number: 1,
        win: false,
      })
    } else {
      if (round.number >= 31) {
        setEndGame(true)
      }
      setRound({
        number: round.number + 1,
        win: true,
      })
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setOpenGameModal(true)
  }

  const reset = () => {
    setRound({
      number: 1,
      win: false,
    })
    setEndGame(false)
  }

  const hotWin = () => {
    setEndGame(true)
  }

  return (
    <Layout title='Mini Juego'>
      <div className='mb-2'>
        <h1 className='text-2xl font-bold text-center'>Mini Juego</h1>
        <div className='text-center'>
          <button onClick={hotWin}>Hot Win</button>
        </div>
      </div>
      {endGame ? (
        <>
          <img className='object-contain w-full my-4 border border-black rounded-lg fadeIn' src='/win.jpeg' alt='¡ganaste!' />
          <div className='text-center'>
            <Button3D color='pink' onClick={reset}>¿Reiniciar?</Button3D>
          </div>
        </>
      ) : (
        <>
          <div className='mb-5'>
            <button type='button' className='px-2 py-1 mb-1 text-xl border border-purple-500 rounded hover:bg-pink-200' onClick={() => showHidden('reglasText')}>{stateELement ? 'Ocultar' : 'Mostrar'} Reglas:</button>
            <p className='text-lg element reglasText showElement'>Intenta llegar al final del juego sin equivocarte, cada consigna es diferente y siempre abra algunos que intentaran hacer trampas para entrar. nos regimos por reglas básicas de convivencia y sentido común. ten en cuenta que si pierdes volverás al principio. esto ademas de un juego de humor es una herramienta para que los chicos de las alianzas no aprieten el botón equivocado a la hora de aceptar un miembro</p>
          </div>
          <div className='max-w-xl p-2 m-auto border-2 border-pink-500 rounded-lg' aria-live='polite'>
            <h3 className='text-xl text-center'>Nivel {round.number}/{data.length}</h3>
            <p className='mt-2 mb-4 text-lg'><span className='font-semibold'>Objetivo:</span> {DATA_ACTUAL.objetive}</p>
            <div className='space-y-4'>
              {DATA_ACTUAL.dataPj.map((pj) => <CardPj key={`${round.number - 1}-${pj.id}`} reload={reload} data={{ ...pj }} />)}
              <div className='text-center'>
                <Button3D color='green' onClick={pjSelected}>Confirmar</Button3D>
              </div>
            </div>
          </div>
        </>
      )}
      <Modal data={{ open: openGameModal, setOpen: setOpenGameModal }}>
        <div className='p-4 text-center'>
          <h1 className='mb-1 text-xl'>{round.win ? '🎉🎊 Ganaste 🎊🎉' : 'Perdiste 😞✌🏽'}</h1>
          <p className='mb-2 text-lg'>{round.win ? '¡¡Muy Bien!! ¡Avanzaste al siguiente nivel!' : MSJ_LOOSE[Math.floor(MSJ_LOOSE.length * Math.random())]}</p>
          <Button3D color={`${round.win ? 'green' : 'red'}`} onClick={() => (document.querySelector('.Modal__close-button') as HTMLButtonElement).click()}>Continuar</Button3D>
        </div>
      </Modal>
      <Modal data={{ open, setOpen }}>
        <MessageErrorFetch errorResponse={errorResponse}>Traer la Lista de Reproducción</MessageErrorFetch>
      </Modal>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchJson3('miniJuego')
  sortById(data)
  return { props: { response: data } }
}

export default miniJuego
