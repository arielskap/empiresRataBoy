import { useState } from 'react';
import { ModalHero } from './index.js';
import ButtonModal from '../ButtonModal';
import { Analisis, compareHeroes } from '../../interfaces'

interface Props {
  children: string;
  data: Analisis;
  compareHeroes: compareHeroes;
  dataTalents: any;
}

const Face: React.FunctionComponent<Props> = ({ children, data, compareHeroes, dataTalents }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonModal onClick={() => setOpen(true)}>
        <img className='object-contain w-full rounded lozad' data-src={data.img} alt={children} />
        <h3 className='absolute bottom-0 w-full text-lg font-bold text-center truncate bg-black-transparent'>{children}</h3>
      </ButtonModal>
      {open && <ModalHero dataTalents={dataTalents} data={{ open, setOpen }} compareHeroes={{ ...compareHeroes }} dataCard={{ ...data }} />}
    </>
  );
};

export default Face;
