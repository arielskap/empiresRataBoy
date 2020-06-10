import React from 'react';
import { animated } from 'react-spring';
import { useFade } from '../animations';

const BlackBackground = ({ children }) => {
  const { fade } = useFade();
  return (
    <>
      <animated.div className='BlackBackground bg-black-trasparent fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-20' style={fade}>
        {children}
      </animated.div>
    </>
  );
};

export default BlackBackground;
