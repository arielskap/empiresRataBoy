import { animated } from 'react-spring';
import styles from '../../../public/styles/CompleteCard.module.css'
import Card from './Card';
import BackCard from './BackCard';

const CompleteCard = ({img, json, rotateY, dataTalents, closeModal, uniqueId}: any) => {
  return (
    <animated.div className={`${styles.carta} card-${uniqueId}`} style={rotateY}>
      <div className={`flex items-center justify-center ${styles.cara}`}>
        <div className='relative'>
          <button className='absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => { closeModal(); }}>
              x
          </button>
          <Card img={img} json={json} />
        </div>
      </div>
      <div className={styles.detras}>
        <BackCard dataTalents={dataTalents} json={json} uniqueId={uniqueId} />
      </div>
    </animated.div>
  )
}

export default CompleteCard
