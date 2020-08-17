import { useState } from 'react';
import Modal from '../Modal';
import { changeDevice } from '../../utils/funciones';

const CardGuias = ({ json }) => {
  const [open, setOpen] = useState(false);
  const [imgDevice, setImgDevice] = useState('mobile');

  const handleOpenModal = () => {
    const device = changeDevice();
    if (device !== imgDevice) {
      if (device === 'mobile') {
        setImgDevice('mobile');
      } else {
        setImgDevice('desktop');
      }
    }
    setOpen(true);
  };

  return (
    <>
      <button type='button' className='relative px-2 duration-500 transform border-2 border-transparent rounded hover:scale-105 hover:border-pink-500' onClick={() => { handleOpenModal(); }}>
        {`${json.id}. ${json.name}`}
      </button>
      <Modal data={{ open, setOpen }}>
        <img className='object-contain w-full h-full' src={imgDevice === 'mobile' ? json.mobile : json.pc} alt={json.name} />
      </Modal>
    </>
  );
};

export default CardGuias;

