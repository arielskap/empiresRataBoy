import React, { useState, useEffect } from 'react'
import styles from './styles';
import Button3D from '../../Button3D';

interface props {
  data: {
    id: number;
    name: string;
    img: string;
    text: string;
    accept?: boolean;
  },
  reload: boolean
}

const CardPj: React.FunctionComponent<props> = ({ data, reload }) => {
  const [selected, setSelected] = useState<{ state: boolean, button: undefined | boolean }>({
    state: false,
    button: undefined
  });
  const [time, setTime] = useState(0)

  const { id, name, img, text, accept } = data;

  const handleClick = (buttonClick: boolean) => {
    setSelected({
      state: true,
      button: buttonClick
    })
  }

  useEffect(() => {
    setSelected({
      state: false,
      button: undefined
    })
  }, [reload])

  useEffect(() => {
    setTime(Math.floor(59 * Math.random()));
  }, [])

  return (
    <div className={`${accept && 'pj-accept'} ${selected.button === true ? 'pj-accepted' : selected.button === false && 'pj-refused'} fadeIn pj p-2 text-blue-200 border border-black rounded shadow-inner text-semibold text-border bg-gradient-to-r from-primary via-secondary to-primary`}>
      <div className='flex items-center justify-between text-sm truncate rounded-lg shadow-inner sm:text-lg bg-tertiary'>
        <div className='flex items-center'>
          <img className='object-cover object-top w-16 h-10 border border-black rounded-tl-lg rounded-bl-lg' src={img} alt={name} />
          <p className='ml-2'>{name}</p>
        </div>
        <p className='mx-2'>hace {time} m</p>
      </div>
      <p className='py-3 text-center text-gray-300'>{text}</p>
      <div className='p-2 rounded-lg shadow-inner bg-tertiary'>
        <p className='mt-1 mb-3 text-center sm:text-lg'>¿Aceptar solicitud para unirse?</p>
        <div className='flex justify-center space-x-6'>
          <Button3D disabled={selected.state} color={selected.state ? !selected.button ? 'red' : 'gray' : 'red'} onClick={() => handleClick(false)}>Rechazar</Button3D>
          <Button3D disabled={selected.state} color={selected.state ? selected.button ? 'blue' : 'gray' : 'blue'} onClick={() => handleClick(true)}>¡Aceptar!</Button3D>
        </div>
      </div>
      <style jsx>
        {styles}
      </style>
    </div>
  )
}

export default CardPj
