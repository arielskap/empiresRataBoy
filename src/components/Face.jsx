import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';
import ButtonModal from './ButtonModal';

const Face = ({ children, img, json }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonModal onClick={() => setOpen(true)}>
        <img className='object-contain w-full rounded' src={img} alt={children} />
        <h3 className='text-center text-lg font-bold absolute bottom-0 text-center w-full bg-black-transparent truncate'>{children}</h3>
      </ButtonModal>
      <Modal data={{ open, setOpen }}>
        <Card img={img} json={json} />
      </Modal>
    </>
  );
};

export default Face;
