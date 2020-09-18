import React from 'react'
import LinkNext from 'next/link';

interface Props {
  children: React.ReactNode,
  className?: string,
  href: string
}

const Link: React.FunctionComponent<Props> = ({children, className, href}) => {
  return (
    <>
      { process.env.MOBILE === 'false' ?
        <LinkNext href={href}>
          <a className={className}>
            {children}
          </a>
        </LinkNext>
      :
        <a href={`.${href === '/' ? '/index' : href}.html`} className={className}>
          {children}
        </a>
      }
    </>
  )
}

export default Link
