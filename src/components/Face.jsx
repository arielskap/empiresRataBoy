import React, { useState } from 'react';
import ModalHero from './ModalHero';
import ButtonModal from './ButtonModal';

const Face = ({ children, data, compareHeroes }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonModal onClick={() => setOpen(true)}>
        <img className='object-contain w-full rounded' src={data.img} alt={children} />
        <h3 className='text-center text-lg font-bold absolute bottom-0 w-full bg-black-transparent truncate'>{children}</h3>
      </ButtonModal>
      <ModalHero data={{ open, setOpen }} compareHeroes={{ ...compareHeroes }} dataCard={{ ...data, alt: children }} />
    </>
  );
};

export default Face;
