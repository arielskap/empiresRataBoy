import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode;
  selector: string;
}

const ClientOnlyPortal: React.FunctionComponent<Props> = ({ children, selector }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, (ref.current as HTMLElement)) : null
}

export default ClientOnlyPortal
