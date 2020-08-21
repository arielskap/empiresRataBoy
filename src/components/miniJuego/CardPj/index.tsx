import React, { useState } from 'react'
import Button3D from '../../Button3D';

interface props {
  data: {
    id: number;
    name: string;
    img: string;
    text: string;
    accept?: boolean;
  }
}

const CardPj: React.FunctionComponent<props> = ({ data }) => {
  const [selected, setSelected] = useState(false);
  const { id, name, img, text, accept } = data;

  return (
    <div className={`transition-colors duration-500 ease-in-out p-2 border-2 pj ${accept && 'pj-accept'} ${selected ? 'border-green-500 pj-selected' : 'border-blue-500'} rounded`} key={`pj-${id}`}>
      <p className='mb-2 text-lg font-semibold'>{name}</p>
      <div className='flex'>
        <img className='object-contain w-24 h-24' src={img} alt={name} />
        <p className='flex items-center ml-2 text-lg'>{text}</p>
      </div>
      <div className='text-right md:text-center'>
        <Button3D transition={true} color={selected ? 'red' : undefined} onClick={() => setSelected(!selected)}>{selected ? 'Cancelar' : '¡Aceptar!'}</Button3D> {/*() => pjSelected(accept)*/}
      </div>
    </div>
  )
}

export default CardPj
