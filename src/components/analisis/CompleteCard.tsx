import { animated } from 'react-spring';
import styles from '../../styles/CompleteCard.module.css'
import Card from './Card';
import BackCard from './BackCard';
import { Analisis } from '../../interfaces';

interface Props {
  img: string;
  json: Analisis;
  rotateY: any;
  dataTalents: any;
  closeModal: () => void;
  uniqueId: string;
}

const CompleteCard: React.FunctionComponent<Props> = ({ img, json, rotateY, dataTalents, closeModal, uniqueId }) => {
  let trimUniqueId = uniqueId.replace(/\s+/g, '');
  trimUniqueId = trimUniqueId.replace('/', '');
  return (
    <animated.div className={`${styles.carta} card-${trimUniqueId}`} style={rotateY}>
      <div className={`flex items-center justify-center ${styles.cara}`}>
        <button className='absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600' type='button' onClick={() => { closeModal(); }}>
            x
        </button>
        <Card img={img} json={json} />
      </div>
      <div className={styles.detras}>
        <BackCard dataTalents={dataTalents} json={json} uniqueId={trimUniqueId} />
      </div>
    </animated.div>
  )
}

export default CompleteCard
