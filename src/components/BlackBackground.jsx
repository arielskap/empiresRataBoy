import React from 'react';

const BlackBackground = ({ children }) => {
  return (
    <div className='BlackBackground bg-black-trasparent animated fadeIn faster fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-20'>
      {children}
    </div>
  );
};

export default BlackBackground;
