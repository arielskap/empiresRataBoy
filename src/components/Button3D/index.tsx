import React from 'react'

interface Props {
  children: React.ReactNode;
  color?: string;
  transition?: boolean;
  disabled?: boolean;
  onClick?: (() => void);
}

const Button3D: React.FunctionComponent<Props> = ({ children, color = 'blue', onClick, transition, disabled }) => {
  const colorButton = `bg-${color}-500 border-${color}-700 hover:bg-${color}-400 hover:border-${color}-500`

  return (
    <button disabled={disabled} type='button' className={`px-4 py-2 font-bold text-white ${colorButton} ${transition && 'transition-colors duration-500 ease-in-out'} border-b-4 rounded`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button3D;
