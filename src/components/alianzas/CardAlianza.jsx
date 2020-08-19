import { useState } from 'react';
import ButtonModal from '../ButtonModal';
import Modal from '../Modal';

const CardAlianza = ({ json }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonModal onClick={() => setOpen(true)}>
        <img className='object-contain lg:w-48' src={json.picture} alt={json.name} />
      </ButtonModal>
      <Modal bgColor='bg-purple-400' data={{ open, setOpen }}>
        <div className='max-w-sm text-black rounded shadow-lg'>
          <div className='relative text-white'>
            <div className='absolute top-0 flex justify-center w-full'>
              <h2 className='px-3 py-1 text-lg text-center rounded-b bg-black-transparent'>{json.name}</h2>
            </div>
            <div className='flex items-center justify-center w-full pt-10'>
              <img className='object-contain w-64' src={json.picture} alt={json.name} />
            </div>
          </div>
          <div className='px-6 py-4'>
            <h3 className='mb-2 text-xl font-bold text-center'>Información</h3>
            <div>
              <p>
                <span className='font-bold'>Titanes:</span>
                {` ${json.titans}`}
              </p>
            </div>
            <div className='mt-2'>
              <p>
                <span className='font-bold'>Requerimientos:</span>
                {` ${json.requirements}`}
              </p>
            </div>
            <div className='mt-2'>
              <p>
                <span className='font-bold'>Reseña:</span>
                {` ${json.review}`}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardAlianza;
